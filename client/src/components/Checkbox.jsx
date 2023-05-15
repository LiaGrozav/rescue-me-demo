
import React from "react";

const Checkbox = ({ label, isChecked, onCheckboxChange }) => {
  const handleCheckboxChange = (event) => {
    onCheckboxChange(event.target.checked);
  };

  return (
    <div className="checkbox-wrapper">
      <input
        id={label}
        type="checkbox"
        checked={isChecked}
        onChange={handleCheckboxChange}
      />
      <label htmlFor={label}>{label}</label>
    </div>
  );
};

export default Checkbox;

