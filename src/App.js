import React from "react";
import { useSelector } from "react-redux";
import TaskForm from "./components/TaskForm";
import TaskList from "./components/TaskList";
import "./App.css";

function App() {
  const tasksState = useSelector((state) => state.tasks);
  console.log(tasksState);

  return (
    <div className="text-center mt-2">
      <h1 className="text-3xl font-bold underline">Hello world!</h1>
      <TaskForm />
      <TaskList />
    </div>
  );
}

export default App;
