import React from "react";
import side from "../Sidebar.png"

const ScrollFeatures = ({ details }) => {
  return (
    <div className="section second w-full  flex gap-2 items-start relative">
      <div className="left mt-[3rem] sticky top-[6rem] left-0 w-[50%]  bg-[#EFEEEA]">
        <img src={side} className="mx-auto my-[3rem]" alt="" />
      </div>
      <div className="right w-[50%]">
        {details.map((e, index) => (
          <div
            key={index}
            className="one font-mono gap-6 mt-[10rem] flex flex-col p-[3rem] h-[70vh] w-[70%] ml-[3rem] items-start"
          >
            <h1 className="text-3xl">{e.heading}</h1>
            <p>{e.subheading}</p>
            <div>Learn More</div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default ScrollFeatures;
