import React, { useState } from 'react';
import { ReactComponent as DisplayIcon } from '../assets/Display.svg';
import { ReactComponent as DownIcon } from '../assets/down.svg';

const Header = ({ setGroupBy, setSortBy }) => {
  const [isDropdownOpen, setIsDropdownOpen] = useState(false);

  const toggleDropdown = () => {
    setIsDropdownOpen(!isDropdownOpen);
  };

  return (
    <div className="header">
      <div className="display-dropdown" onClick={toggleDropdown}>
        <DisplayIcon />
        <span>Display</span>
        <DownIcon />
      </div>
      {isDropdownOpen && (
        <div className="dropdown-content">
          <div className="dropdown-menu">
            <label>Grouping</label>
            <select onChange={(e) => setGroupBy(e.target.value)}>
              <option value="status">Status</option>
              <option value="userId">User</option>
              <option value="priority">Priority</option>
            </select>
          </div>
          <div className="dropdown-menu">
            <label>Ordering</label>
            <select onChange={(e) => setSortBy(e.target.value)}>
              <option value="priority">Priority</option>
              <option value="title">Title</option>
            </select>
          </div>
        </div>
      )}
    </div>
  );
};

export default Header;
