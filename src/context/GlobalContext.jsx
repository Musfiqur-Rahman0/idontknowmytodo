import { input } from "framer-motion/client";
import { createContext, useState } from "react";
import Task from "../components/Task";
import { json } from "react-router-dom";

export const GlobalContext = createContext();

export const GlobalProvider = ({ children }) => {
  const [inputValue, setInputValue] = useState("");
  const [listValue, setListValue] = useState([]);
  const [selectedView, setSelectedView] = useState(null);
  const [selectedTool, setSelectedTool] = useState(null);
  const [isStarred, setIsStarred] = useState([]);
  const [selectedListIndex, setSelectedListIndex] = useState(null);
  const [completedTasks, setCompletedTasks] = useState([]);

  const handleInputChange = (e) => {
    setInputValue(e.target.value);
  };

  const handleListValue = (inputValue) => {
    if (inputValue.trim() !== "") {
      setListValue((prev) => {
        if (listValue.includes(inputValue)) {
          return prev;
        }
        return [...prev, inputValue];
      });
      setInputValue("");
    }
  };

  const handleKeyDown = (e, inputValue) => {
    if (e.key === "Enter") {
      handleListValue(inputValue);
      setInputValue("");
    }
  };

  const handleSelectedTools = (listIndex, toolType) => {
    if (toolType === "favourite") {
      setIsStarred((prevIsStarred) => {
        if (prevIsStarred.includes(listIndex)) {
          return prevIsStarred.filter((index) => index !== listIndex);
        } else {
          return [...prevIsStarred, listIndex];
        }
      });
    }
  };

  const handleSelectedListIndex = (idx) => {
    setSelectedListIndex(idx);
  };

  // delete any task and starred them
  const handleRemoveList = (idx) => {
    if (selectedListIndex === idx) {
      setSelectedListIndex(null);
    }
    setListValue(listValue.filter((_, index) => index !== idx));
    setIsStarred((prevIsStarred) =>
      prevIsStarred.filter((index) => index !== idx)
    );
  };

  // store the completed task
  const handleCompletedTask = (idx) => {
    const completedTask = listValue[idx];

    if (selectedListIndex === idx) {
      setSelectedListIndex(null);
    }
    setListValue(listValue.filter((_, index) => index !== idx));

    setCompletedTasks((prevCompletedTask) => {
      if (prevCompletedTask.includes(completedTask)) {
        return prevCompletedTask;
      }
      return [...prevCompletedTask, completedTask];
    });
  };

  // remove completed task
  const handleCompletedTaskRemove = (idx) => {
    const removedTask = completedTasks[idx];
    console.log(removedTask);
    setCompletedTasks(completedTasks.filter((_, index) => index !== idx));

    setListValue((prevTask) => {
      const isDublicate = prevTask.some(
        (task) => JSON.stringify(task) === JSON.stringify(removedTask)
      );

      if (isDublicate) {
        return prevTask;
      }
      return [...prevTask, removedTask];
    });
  };

  return (
    <GlobalContext.Provider
      value={{
        handleInputChange,
        inputValue,
        listValue,
        setListValue,
        setInputValue,
        handleListValue,
        selectedView,
        setSelectedView,
        handleKeyDown,
        handleCompletedTask,
        handleInputChange,
        handleKeyDown,
        handleListValue,
        handleRemoveList,
        handleSelectedListIndex,
        handleSelectedTools,
        isStarred,
        completedTasks,
        handleCompletedTaskRemove,
      }}
    >
      {children}
    </GlobalContext.Provider>
  );
};
