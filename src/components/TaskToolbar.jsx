import React, { useContext, useState } from "react";
import { BiMenu } from "react-icons/bi";
import { BsListNested } from "react-icons/bs";
import { GoLightBulb } from "react-icons/go";
import { HiMiniArrowLeftOnRectangle } from "react-icons/hi2";
import { TbArrowsUpDown, TbLayoutGridFilled } from "react-icons/tb";
import LatestDate from "./LatestDate";
import { motion } from "framer-motion";
import { GlobalContext } from "../context/GlobalContext";

const TaskToolbar = () => {
  const { setSelectedView, selectedView } = useContext(GlobalContext);
  const [isViewHovered, setIsViewHovered] = useState(null);
  const [isIconHovered, setIsIconHovered] = useState(null);

  const listView = [
    { icon: TbLayoutGridFilled, tooltip: "gird view" },
    { icon: BsListNested, tooltip: "list view" },
  ];
  const icons = [
    { icon: TbArrowsUpDown, tooltip: "sort" },
    { icon: HiMiniArrowLeftOnRectangle, tooltip: "group" },
    { icon: GoLightBulb, tooltip: "suggestion" },
  ];

  const handleListItemView = (idx) => {
    setSelectedView(idx);
  };

  return (
    <div className="mt-24">
      <div className="mx-5 py-3 ">
        <div className="flex items-center justify-between px-10">
          <div className="flex items-center gap-5 basis-[70%]">
            <span className="cursor-pointer">
              <BiMenu size={35} />
            </span>
            <h2 className="text-xl font-semibold ">My day </h2>
            {listView.map((data, idx) => {
              const Icon = data.icon;
              return (
                <motion.div
                  onClick={() => handleListItemView(idx)}
                  onMouseEnter={() => setIsViewHovered(idx)}
                  onMouseLeave={() => setIsViewHovered(null)}
                  key={idx}
                  className="cursor-pointer relative"
                >
                  <Icon size={25} />

                  {isViewHovered === idx && (
                    <motion.span
                      initial={{ y: -10, x: 0 }}
                      whileInView={{ y: 20, x: -30 }}
                      className="absolute left-0 whitespace-nowrap capitalize bg-blue-500 text-white px-2 rounded-md"
                    >
                      {data.tooltip}
                    </motion.span>
                  )}
                  {selectedView === idx && (
                    <motion.div
                      layoutId="underline"
                      className="h-1 w-full rounded-lg bg-blue-500 mt-1"
                    ></motion.div>
                  )}
                </motion.div>
              );
            })}
          </div>
          <div className="flex gap-5 ">
            {icons.map((data, idx) => {
              const Icon = data.icon;
              return (
                <span
                  key={idx}
                  onMouseEnter={() => setIsIconHovered(idx)}
                  onMouseLeave={() => setIsIconHovered(null)}
                  className="h-full flex items-center cursor-pointer relative"
                >
                  <Icon size={20} />
                  {isIconHovered === idx && (
                    <motion.span
                      initial={{ y: -10, x: 0 }}
                      whileInView={{ y: 10, x: -25 }}
                      className="absolute bottom-[-30px] whitespace-nowrap capitalize bg-blue-500 text-white px-2 rounded-md"
                    >
                      {data.tooltip}
                    </motion.span>
                  )}
                </span>
              );
            })}
          </div>
        </div>
        <LatestDate />
      </div>
    </div>
  );
};

export default TaskToolbar;
