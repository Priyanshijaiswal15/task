import React from 'react';
import Card from './Card';
import { ReactComponent as NoPriorityIcon } from '../assets/No-priority.svg';
import { ReactComponent as UrgentPriorityIcon } from '../assets/SVG - Urgent Priority colour.svg';
import { ReactComponent as HighPriorityIcon } from '../assets/Img - High Priority.svg';
import { ReactComponent as MediumPriorityIcon } from '../assets/Img - Medium Priority.svg';
import { ReactComponent as LowPriorityIcon } from '../assets/Img - Low Priority.svg';
import { ReactComponent as AddIcon } from '../assets/add.svg';
import { ReactComponent as BacklogIcon } from '../assets/Backlog.svg';
import { ReactComponent as TodoIcon } from '../assets/To-do.svg';
import { ReactComponent as InProgressIcon } from '../assets/in-progress.svg';
import { ReactComponent as ThreeDotMenu } from '../assets/3 dot menu.svg';
import { ReactComponent as Cancelled } from '../assets/Cancelled.svg';
import { ReactComponent as DoneIcon } from '../assets/Done.svg';
const Column = ({ groupBy, groupKey, tickets, users }) => {

  const getTitleAndIcon = () => {
    console.log('Group By:', groupBy);  // Debug
    console.log('Group Key:', groupKey);  // Debug

    switch (groupBy) {
      case 'status':
        switch (groupKey) {
          case 'Backlog':
            return { title: `Backlog (${tickets.length})`, icon: <BacklogIcon /> };
          case 'Todo':
            return { title: `To Do (${tickets.length})`, icon: <TodoIcon /> };
          case 'In progress':
            return { title: `In Progress (${tickets.length})`, icon: <InProgressIcon /> };
          case 'Done':
            return { title: `Done (${tickets.length})`, icon: <DoneIcon /> };
          case 'Cancelled':
            return { title: `Cancelled (${tickets.length})`, icon: <Cancelled /> };
          default:
            return { title: `No Status (${tickets.length})`, icon: <NoPriorityIcon /> };
        }
      case 'userId':
        const user = users.find((user) => user.id === groupKey);
        return {
          title: `${user?.name || 'Unassigned'} (${tickets.length})`,
          icon: user ? <img src={`path/to/user/icon/${user.id}.svg`} alt={user.name} /> : <NoPriorityIcon />,
        };
      case 'priority':
        switch (groupKey) {
          case "4":
            return { title: `Urgent (${tickets.length})`, icon: <UrgentPriorityIcon /> };
          case "3":
            return { title: `High (${tickets.length})`, icon: <HighPriorityIcon /> };
          case "2":
            return { title: `Medium (${tickets.length})`, icon: <MediumPriorityIcon /> };
          case "1":
            return { title: `Low (${tickets.length})`, icon: <LowPriorityIcon /> };
          case "0":
            return { title: `No Priority (${tickets.length})`, icon: <NoPriorityIcon /> };
          default:
            return { title: `No Priority (${tickets.length})`, icon: <NoPriorityIcon /> };
        }
      default:
        return { title: `Unknown (${tickets.length})`, icon: <NoPriorityIcon /> };
    }
  };


  const { title, icon } = getTitleAndIcon();

  return (
    <div className="column">
      <div className="column-header">
        {icon}
        <h2>{title}</h2>
        <div className="add-new">
          <AddIcon />
          <ThreeDotMenu />
        </div>
      </div>
      {tickets.map((ticket) => (
        <Card key={ticket.id} ticket={ticket} user={users.find((u) => u.id === ticket.userId)} />
      ))}
    </div>
  );
};

export default Column;
