import React from "react";
import { useSelector } from "react-redux";

const TaskList = () => {
  const stateTasks = useSelector((state) => state.tasks);
  console.log(stateTasks);

  return (
    <div>
      <h1>TaskList</h1>
      <ul>
        {stateTasks.map((state) => (
          <li key={state.id}>{state.title}</li>
        ))}
      </ul>
    </div>
  );
};

export default TaskList;
