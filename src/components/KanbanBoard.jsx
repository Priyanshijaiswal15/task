import React, { useState, useEffect } from 'react';
import useFetchData from '../hooks/useFetchData';
import { groupTickets, sortTickets } from '../utils/helpers';
import Column from './Column.jsx';
import Header from './Header.jsx';
import '../styles/styles.css';

const KanbanBoard = () => {
  const data = useFetchData('https://api.quicksell.co/v1/internal/frontend-assignment');
  const { tickets, users } = data || { tickets: [], users: [] };

  // Load initial state from localStorage or default
  const [groupBy, setGroupBy] = useState(localStorage.getItem('groupBy') || 'status');
  const [sortBy, setSortBy] = useState(localStorage.getItem('sortBy') || 'priority');
  const [groupedTickets, setGroupedTickets] = useState({});

  // Save state to localStorage on changes
  useEffect(() => {
    localStorage.setItem('groupBy', groupBy);
    localStorage.setItem('sortBy', sortBy);
  }, [groupBy, sortBy]);

  useEffect(() => {
    const grouped = groupTickets(tickets, groupBy);
    const sortedGrouped = {};
    for (const key in grouped) {
      sortedGrouped[key] = sortTickets(grouped[key], sortBy);
    }
    setGroupedTickets(sortedGrouped);
  }, [tickets, groupBy, sortBy]);

  if (!data) return <div>Loading...</div>;

  return (
    <>
      <div className="navbar">
        <Header setGroupBy={setGroupBy} setSortBy={setSortBy} />
      </div>
      <div className="kanban-board">
        <div className="columns">
          {Object.keys(groupedTickets).sort((a, b) => {
            if (groupBy === 'status') {
              const order = ['Backlog', 'Todo', 'In progress', 'Done', 'Cancelled'];
              return order.indexOf(a) - order.indexOf(b);
            } else if (groupBy === 'priority') {
              const order = [0, 4, 3, 2, 1];
              return order.indexOf(Number(a)) - order.indexOf(Number(b));
            } else if (groupBy === 'userId') {
              return a.localeCompare(b);
            }
            return 0;
          }).map((group) => (
            <Column
              key={group}
              groupBy={groupBy}
              groupKey={group}
              tickets={groupedTickets[group]}
              users={users}
            />
          ))}
        </div>
      </div>
    </>
  );
};

export default KanbanBoard;
