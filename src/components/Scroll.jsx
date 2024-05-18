import React from "react";
import side from "../Sidebar.png";

const ScrollFeatures = ({ details }) => {
  return (
    <div className="section second w-full flex flex-col md:flex-row gap-2 items-start relative">
      <div className="left mt-[3rem] md:sticky md:top-[6rem] md:w-[50%] bg-[#EFEEEA]">
        <img src={side} className="mx-auto my-[3rem] w-full md:w-auto" alt="" />
      </div>
      <div className="right w-full md:w-[50%]">
        {details.map((e, index) => (
          <div
            key={index}
            className="one font-mono gap-6 mt-[2rem] md:mt-[10rem] flex flex-col p-[1rem] md:p-[3rem] h-auto md:h-[70vh] w-full md:w-[70%] ml-0 md:ml-[3rem] items-start"
          >
            <h1 className="text-xl md:text-3xl">{e.heading}</h1>
            <p>{e.subheading}</p>
            <div className="text-blue-500 cursor-pointer">Learn More</div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default ScrollFeatures;
