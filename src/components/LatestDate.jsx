import React from "react";

const LatestDate = () => {
  const date = new Date();

  const formatedDate = date.toLocaleDateString("en-US", {
    weekday: "long",
    month: "long",
    day: "numeric",
  });

  return <p className="px-14 text-[0.7rem] ">{formatedDate}</p>;
};

export default LatestDate;
