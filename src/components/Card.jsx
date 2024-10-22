import React from 'react';
import NoPriorityIcon from '../assets/No-priority.svg';
import UrgentPriorityIcon from '../assets/SVG - Urgent Priority colour.svg';
import HighPriorityIcon from '../assets/Img - High Priority.svg';
import MediumPriorityIcon from '../assets/Img - Medium Priority.svg';
import LowPriorityIcon from '../assets/Img - Low Priority.svg';

const Card = ({ ticket, user }) => {
  const getPriorityIcon = (priority) => {
    switch (priority) {
      case 4:
        return <img src={UrgentPriorityIcon} alt="Urgent Priority" />;
      case 3:
        return <img src={HighPriorityIcon} alt="High Priority" />;
      case 2:
        return <img src={MediumPriorityIcon} alt="Medium Priority" />;
      case 1:
        return <img src={LowPriorityIcon} alt="Low Priority" />;
      default:
        return <img src={NoPriorityIcon} alt="No Priority" />;
    }
  };

  return (
    <div className="card">
      <div className="card-header">
        <span className="card-id">{ticket.id}</span>
        <span className="card-user">{user ? user.name : 'Unassigned'}</span>
      </div>
      <div className="card-content">
        <h3>{ticket.title}</h3>
        <div className="card-tags">
          {getPriorityIcon(ticket.priority)}
          {ticket.tag.map((tag, index) => (
            <span key={index} className="tag">{tag}</span>
          ))}
        </div>
      </div>
    </div>
  );
  

};

export default Card;
