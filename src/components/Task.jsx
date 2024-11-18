import React, { useContext } from "react";
import { GlobalContext } from "../context/GlobalContext";
import { FaStar } from "react-icons/fa";
import CompletedTask from "./CompletedTask";
import { tool } from "../consents";

const Task = () => {
  const {
    listValue,
    selectedView,
    handleSelectedListIndex,
    handleCompletedTask,
    isStarred,
    handleRemoveList,
    handleSelectedTools,
    completedTasks,
  } = useContext(GlobalContext);

  return (
    <div className="mt-3 px-5 h-12 w-full">
      <ul
        className={` h-full w-full rounded-md ${
          selectedView ? "space-y-3 " : "space-y-0"
        }`}
      >
        {listValue.map((task, idx) => (
          <div
            key={idx}
            onClick={() => handleSelectedListIndex(idx)}
            className={`w-full h-full flex items-center justify-between border px-5 ${
              selectedView ? "rounded-lg" : "rounded-none"
            }`}
          >
            <div className="flex  gap-2 items-center h-full w-full">
              <button
                onClick={() => handleCompletedTask(idx)}
                className="h-3 w-3 rounded-full border border-black"
              ></button>
              <input
                type="text"
                value={task}
                readOnly
                className="h-[80%] basis-[70%] px-2  border-none outline-1 outline-gray-600 "
              />
            </div>
            <div className="flex items-center gap-4">
              {tool.map((icon, index) => {
                let Icon = icon.icon;
                let iconColor = "black";
                if (index === 1 && isStarred.includes(idx)) {
                  Icon = FaStar;
                  iconColor = "blue";
                }

                return (
                  <button
                    onClick={() => {
                      if (icon.tooltip === "delete") {
                        handleRemoveList(idx);
                      } else if (icon.tooltip === "favourite") {
                        handleSelectedTools(idx, "favourite");
                      }
                    }}
                    key={index}
                  >
                    <Icon size={20} color={iconColor} />
                  </button>
                );
              })}
            </div>
          </div>
        ))}
        {completedTasks.length !== 0 && <CompletedTask />}
      </ul>
    </div>
  );
};

export default Task;
