import React from "react";

const NewsLetter = () => {
  return (
    <>
      <div className="pt-[113px] pb-[107px] ">
        <div className="relative xl:flex lg:flex  w-[90vw] h-[292px] m-auto    bg-sky-100 rounded-[75px]  justify-between">
          <div className="flex flex-col m-auto lg:ml-12  lg:items-start items-center pt-6 pb-3 ">
            <p className="font-bold sm:text-4xl text-2xl leading-[60px]">
              Subscribe Newsletter
            </p>
            <p className="text-slate-500 leading-8 text-center lg:text-start px-5 lg:px-0">
              I will update good news and promotion service not spam
            </p>
            <img
              src="./Rectangle 32.png"
              alt=""
              className="absolute left-[-38px] bottom-[-40px] -z-40 hidden  xl:block lg:block"
            />
          </div>

          <div className="flex lg:flex-col lg:mr-12  justify-center ">
            <div
              className=" lg:h-[366px] sm:h-[150px] h-[120px] relative flex justify-center items-center lg:justify-center 
            lg:items-center "
            >
              <img
                src="./Rectangle 31.png"
                alt=""
                className=" absolute right-[-52px] hidden lg:block  "
              />
              <img
                src="./Group 73.svg"
                alt=""
                className=" absolute -top-6 -right-20 -z-10 hidden xl:block  lg:block"
              />
              <input
                type="text"
                placeholder="Enter your Email-Address.."
                className="border-2 placeholder:text-slate-500 placeholder:px-5 
                  w-[70vw] sm:h-[70px] h-[50px]
                lg:w-[571.86px] lg:h-[80px]  rounded-full z-10"
              />

              <button
                className=" absolute right-[10px] sm:text-[16px] z-10  bg-blue-600 text-white 
              w-[80px] sm:w-[150px] h-[39px] sm:h-[54px]
              lg:w-[250px]
               sm:font-bold text-[10px]  lg:h-[64px] rounded-full "
              >
                Contact Now
              </button>
            </div>
          </div>
        </div>
      </div>

    </>
  );
};

export default NewsLetter;
