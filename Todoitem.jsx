// TodoItem.js

import React from "react";

const TodoItem = ({ task, removeTaskWithIndex }) => {
  const { task: currentTask, deadline, status } = task;

  const getColor = () => {
    if (status === 'completed') {
      return 'green';
    }

    const now = new Date();
    const taskDeadline = new Date(deadline);

    if (now > taskDeadline) {
      return 'red';
    }

    return 'grey';
  };

  return (
    <li style={{ color: getColor() }}>
      {currentTask} - Deadline: {deadline ? new Date(deadline).toLocaleString() : "No deadline"}
      <button onClick={removeTaskWithIndex} className="ml-4">
        Remove
      </button>
    </li>
  );
};

export default TodoItem;
