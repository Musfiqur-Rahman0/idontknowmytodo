import React, { useContext, useState } from "react";
import { GlobalContext } from "../context/GlobalContext";
import { RiArrowDownSLine, RiArrowUpSLine } from "react-icons/ri";

import { IoIosCheckmarkCircleOutline } from "react-icons/io";
import { FaRegStar } from "react-icons/fa";

const CompletedTask = () => {
  const { completedTasks, selectedView, handleCompletedTaskRemove } =
    useContext(GlobalContext);
  const [isCompletedListShown, setIsCompletedListShown] = useState(null);

  const handleToggleShowList = () => {
    setIsCompletedListShown(!isCompletedListShown);
  };

  return (
    <div className="pt-5 h-14 ">
      <button
        onClick={handleToggleShowList}
        className="flex items-center gap-2 px-4 py-2"
      >
        {isCompletedListShown ? (
          <RiArrowDownSLine size={20} />
        ) : (
          <RiArrowUpSLine size={20} />
        )}
        <p>Completed</p>
        <p>{completedTasks.length}</p>
      </button>
      <ul
        className={` h-full w-full rounded-md  ${
          selectedView ? "space-y-3 " : "space-y-0"
        } ${isCompletedListShown ? "visible" : "hidden"}`}
      >
        {completedTasks.map((task, index) => (
          <div
            key={index}
            className={`w-full h-full flex items-center justify-between border px-5 ${
              selectedView ? "rounded-lg" : "rounded-none"
            }`}
          >
            <div className="flex  gap-2 items-center h-full w-full">
              <button onClick={() => handleCompletedTaskRemove(index)}>
                <IoIosCheckmarkCircleOutline size={20} />
              </button>
              <input
                type="text"
                value={task}
                readOnly
                className="h-[80%] basis-[100%] px-2  border-none outline-1 outline-gray-600 "
              />
            </div>
          </div>
        ))}
      </ul>
    </div>
  );
};

export default CompletedTask;
