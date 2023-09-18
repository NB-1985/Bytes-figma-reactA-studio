import React from "react";

const Client = () => {
  return (
    <>
      <div className="pt-[33px] pb-[94px]  ">
        <div
          className="  flex  w-[90vw]  mx-auto 
            flex-col
            xl:flex-row
            xl:flex 
            xl:justify-between"
        >
          <div className="flex flex-col justify-center items-center xl:items-start gap-3">
            <p className="font-bold xl:text-4xl text-3xl ">Our Client</p>
            <p className="xl:w-[354px] text-slate-400 text-center xl:text-start">
              Several selected clients, who already believe in our service.
            </p>
          </div>
          <div className="flex flex-wrap xl:flex-nowrap xl:gap-16 gap-10 items-center justify-center   ">
            <img src="./Google Logo.svg" alt="" className="h-6   lg:h-auto" />
            <img src="./airbnb Logo.svg" alt="" className="h-6 lg:h-auto" />
            <img src="./Uber Eats Logo.svg" alt="" className="h-6 lg:h-auto" />
            <img
              src="./Amazon Logo.svg"
              alt=""
              className="h-6 mt-5 lg:h-auto"
            />
          </div>
        </div>
      </div>
 
    </>
  );
};

export default Client;
