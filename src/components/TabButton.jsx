import React from "react";

const TabButton = ({ children, onSelect, isSelected }) => {
  return (
    <div>
      <li>
        <button className={isSelected ? "active" : ""} onClick={onSelect}>
          {children}
        </button>
      </li>
    </div>
  );
};

export default TabButton;
