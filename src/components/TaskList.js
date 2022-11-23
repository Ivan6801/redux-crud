import React from "react";
import { useSelector, useDispatch } from "react-redux";
import { deleteTask } from "../features/tasks/taskSlice";

const TaskList = () => {
  const stateTasks = useSelector((state) => state.tasks);
  const dispatch = useDispatch();
  console.log(stateTasks);

  const handleDelete = (id) => {
    dispatch(deleteTask(id));
  };

  return (
    <div className="w-4/6">
      <div className="grid grid-cols-3 gap-3">
        {stateTasks.map((task) => (
          <div className="bg-gray-200 p-4 rounded-md" key={task.id}>
            <header className="flex justify-between">
              <h3 className="text-lg font-bold">{task.title}</h3>
              <button
                onClick={() => handleDelete(task.id)}
                className="bg-red-500 px-2 py-1 text-xs rounded-md"
              >
                delete
              </button>
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
