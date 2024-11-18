import React, { useContext } from "react";
import { GlobalContext } from "../context/GlobalContext";

const AddTask = () => {
  const { inputValue, handleInputChange, handleListValue, handleKeyDown } =
    useContext(GlobalContext);

  return (
    <div className="px-5 mt-5 w-full h-16">
      <div className="h-full w-full border border-blue-500 rounded-md flex items-center pl-5 bg-white">
        <button className="h-6 w-6 rounded-full border border-black"></button>
        <input
          type="text"
          value={inputValue}
          onChange={handleInputChange}
          onKeyDown={(e) => handleKeyDown(e, e.target.value)}
          placeholder="Add a task"
          className="h-full w-full outline-none border-none px-5"
        />
        <button
          onClick={() => handleListValue(inputValue)}
          className="h-full px-6 bg-blue-500 text-white rounded-r-sm"
        >
          Add
        </button>
      </div>
    </div>
  );
};

export default AddTask;
