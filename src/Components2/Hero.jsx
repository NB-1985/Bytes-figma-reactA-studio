import React from "react";

const Hero = () => {
  return (
    <>
      {/* hero section of homepage starts here */}

      <div
        className="flex  xl:justify-end sm:justify-center justify-center   "
        id="home"
      >
        <div
          className="h-[615px]  xl:h-[615px] sm:h-[800px] md:h-[1000px] lg:h-[1100px] lg:w-[95vw] flex justify-between 
           sm:flex-col  sm:w-[90vw] sm:items-center 
           xl:flex-row  xl:items-start flex-col w-[90vw] 
          "
        >
          <div className="flex items-center h-[615px]">
            <div
              className="relative h-[272.3px] w-[552.57px] 
              sm:items-center 
              items-center
              xl:items-start
              flex flex-col xl:justify-between sm:justify-around justify-around"
            >
              <div className="font-normal sm:text-4xl text-2xl  ">
                A Digital Product Agency
              </div>
              <div className="text-[16px] text-slate-500 sm:text-center text-center xl:text-start">
                Leading digital agency with solid design and development
                expertise. We build readymade websites, mobile applications, and
                elaborate online business services.
              </div>
              <button className="z-10  sm:text-[20px] font-normal bg-blue-600 text-white sm:w-[250px] sm:h-[70px] h-[45px] w-[150px] rounded-full flex justify-center items-center">
                Contact Now
              </button>
              <img
                src="./Dot Ornament.png"
                alt=""
                className="absolute -bottom-28 hidden xl:block "
              />
            </div>
          </div>
          <div className="relative">
            <img
              src="./image 8.png"
              alt=""
              className=" relative  z-10 sm:w-[90vw]   xl:w-auto"
            />
            <img
              src="./Ellipse 85.png"
              alt=""
              className="absolute top-1 -left-16 hidden xl:block  "
            />
            <img
              src="./Rectangle 23.png"
              alt=""
              className="absolute right-24 -bottom-24 hidden xl:block "
            /> 
          </div>
        </div>
      </div>

     
    </>
  );
};

export default Hero;
