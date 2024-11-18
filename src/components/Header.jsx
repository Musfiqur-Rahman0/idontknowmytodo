import React from "react";
import { AiOutlineNotification } from "react-icons/ai";
import { CgMenuGridO } from "react-icons/cg";
import { CiSearch } from "react-icons/ci";
import { IoMdHelp, IoMdSettings } from "react-icons/io";
import { PiUser } from "react-icons/pi";

const Header = () => {
  const icons = [
    { icon: IoMdSettings, tooltip: "setting" },
    { icon: IoMdHelp, tooltip: "help center" },
    { icon: AiOutlineNotification, tooltip: "what's new" },
    { icon: PiUser, tooltip: "user" },
  ];

  return (
    <nav className="fixed top-0 w-full h-[70px] bg-blue-600  px-10 flex items-center justify-between text-white">
      <div className="h-full flex gap-2 items-center">
        <span className="h-full flex items-center hover:bg-blue-700 px-4 rounded-md cursor-pointer">
          <CgMenuGridO size={30} />
        </span>
        <h2 className="text-2xl hover:underline ">My todo</h2>
      </div>
      <div className="h-full flex items-center basis-1/2 relative">
        <input
          type="text"
          placeholder=""
          className="h-[60%] w-full px-10  outline-none border-none rounded-md text-black"
        />
        <span className="absolute left-2 ">
          <CiSearch color="blue" size={25} className="rotate-90" />
        </span>
      </div>
      <div className="flex items-center gap-3 h-full">
        {icons.map((data, idx) => {
          const Icon = data.icon;
          return (
            <span
              key={idx}
              className="h-full flex items-center px-4 hover:bg-blue-700  rounded-md cursor-pointer"
            >
              <Icon size={20} />
            </span>
          );
        })}
      </div>
    </nav>
  );
};

export default Header;
