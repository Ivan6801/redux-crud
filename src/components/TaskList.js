import React from "react";
import { useSelector } from "react-redux";

const TaskList = () => {
  const stateTasks = useSelector((state) => state.tasks);
  console.log(stateTasks);

  return (
    <div className="w-4/6">
      <div className="grid grid-cols-3 gap-3">
        {stateTasks.map((task) => (
          <div className="bg-gray-200 p-4 rounded-md" key={task.id}>
            <header className="flex justify-between">
              <h3 className="text-lg font-bold">{task.title}</h3>
            </header>
            <p>{task.description}</p>
            <p className="text-xs text-slate-400">{task.id}</p>
          </div>
        ))}
      </div>
    </div>
  );
};

// description

export default TaskList;
