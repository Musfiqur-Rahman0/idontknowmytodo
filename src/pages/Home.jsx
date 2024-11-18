import React from "react";
import TaskToolbar from "../components/TaskToolbar";
import AddTask from "../components/AddTask";
import Task from "../components/Task";

const Home = () => {
  return (
    <div className="h-screen w-screen overflow-hidden overflow-y-scroll">
      <TaskToolbar />
      <AddTask />
      <Task />
    </div>
  );
};

export default Home;
