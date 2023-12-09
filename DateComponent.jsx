// DateComponent.jsx
import React from "react";

const DateComponent = ({ date, setDate, className }) => {
  const handleDateChange = (e) => {
    setDate(new Date(e.target.value));
  };

  return (
    <input
      type="datetime-local"
      value={date.toISOString().slice(0, 16)}
      onChange={handleDateChange}
      className={className}
    />
  );
};

export default DateComponent;
