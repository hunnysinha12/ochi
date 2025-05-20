import React from "react";

const Cards = () => {
  return (
    <div className="w-full h-auto p-20 grid lg:grid-cols-2 md:grid-cols-1 items-center justify-center  gap-5 bg-zinc-900">
      <div className="card-container h-full w-full">
        <div className="card relative p-30 flex items-center justify-center w-full rounded-xl h-full bg-[#004D43]">
          <img
            className="w-32"
            src="https://ochi.design/wp-content/uploads/2022/04/logo001.svg"
          />
          <button className="absolute text-[#CDEA68] px-5 py-1 rounded-full text-[10px] border-2 left-10 bottom-10">
            &copy;2019-2022
          </button>
        </div>
      </div>
      <div className="card-container md:mb-0 mb-40 grid lg:grid-cols-2 md:grid-cols-2 sm:grid-col-1 gap-5 w-full h-[50vh]">
        <div className="card p-30 relative flex items-center justify-center w-full rounded-xl h-full bg-[#212121]">
          <img
            className="w-32"
            src="https://ochi.design/wp-content/uploads/2022/04/logo002.svg"
          />
          <button className="absolute text-white px-5 py-1 rounded-full text-[10px] border-2 left-10 bottom-10">
            RATING 5.0 ON CLUTCH
          </button>
        </div>
        <div className="card p-30  relative flex items-center justify-center w-full rounded-xl h-full bg-[#212121]">
          <img
            className="w-32"
            src="https://ochi.design/wp-content/uploads/2022/04/logo003.png"
          />
          <button className="absolute text-white px-5 py-1 rounded-full text-[10px] border-2 left-10 bottom-10">
            BUSINESS BOOTCAMP ALLUMNI
          </button>
        </div>
      </div>
    </div>
  );
};

export default Cards;
