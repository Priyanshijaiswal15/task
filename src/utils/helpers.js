export const groupTickets = (tickets, groupBy) => {
  const grouped = {};
  if (groupBy === 'status') {
    grouped['Done'] = [];
    grouped['Cancelled'] = [];
  }
  // console.log(`Grouping by: ${groupBy}`);
  tickets.forEach((ticket) => {
    const key = ticket[groupBy] || 'No Group';
    if (!grouped[key]) {
      grouped[key] = [];
    }
    grouped[key].push(ticket);
  });
  // console.log('Grouped tickets:', grouped);
  return grouped;
};

export const sortTickets = (tickets, sortBy) => {
  // console.log(`Sorting by: ${sortBy}`);
  const sortedTickets = tickets.slice().sort((a, b) => {
    if (sortBy === 'priority') {
      return b.priority - a.priority;
    } else if (sortBy === 'title') {
      return a.title.localeCompare(b.title);
    }
    return 0;
  });
  // console.log('Sorted tickets:', sortedTickets);
  return sortedTickets;
};
