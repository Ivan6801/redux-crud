import React, { useState } from "react";
import { useDispatch } from "react-redux";
import { addTask } from "../features/tasks/taskSlice";
import { v4 as uuid } from "uuid";

const TaskForm = () => {
  const [task, setTask] = useState({
    title: "",
    description: "",
  });
  const dispatch = useDispatch();

  const handleChange = (e) => {
    setTask({
      ...task,
      [e.target.name]: e.target.value,
    });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    dispatch(
      addTask({
        ...task,
        id: uuid(),
      })
    );
    console.log();
  };

  return (
    <form onSubmit={handleSubmit}>
      <div className="flex flex-col items-center">
        <input
          type="text"
          name="title"
          className="shadow appearance-none border rounded w-2/4 py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline my-2"
          placeholder="Write a title"
          autoFocus
          value={task.title}
          onChange={handleChange}
        />
        <textarea
          type="text"
          name="description"
          className="text-grey-darkest flex-1 border rounded p-2 m-1 w-2/4 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
          onChange={handleChange}
          value={task.description}
          placeholder="Write a description"
        />
        <button className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded">
          Save
        </button>
      </div>
    </form>
  );
};

export default TaskForm;
