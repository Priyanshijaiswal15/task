import React from 'react';

const DropdownMenu = ({ options, onChange, label }) => {
  return (
    <div className="dropdown-menu">
      <label>{label}</label>
      <select onChange={(e) => onChange(e.target.value)}>
        {options.map((option) => (
          <option key={option.value} value={option.value}>
            {option.label}
          </option>
        ))}
      </select>
    </div>
  );
};

export default DropdownMenu;
