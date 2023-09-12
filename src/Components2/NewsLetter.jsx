import React from 'react'

const NewsLetter = () => {
  return (
    <>
            <div className="relative xl:flex 2xl:flex lg:flex hidden w-[90vw] h-[366px] m-auto mt-6  bg-sky-100 rounded-[75px]  justify-between">
          <div className="flex flex-col m-auto ml-12 ">
            <p className="font-bold text-4xl leading-[60px]">
              Subscribe Newsletter
            </p>
            <p className="text-slate-500">
              I will update good news and promotion service not spam
            </p>
            <img
              src="./Rectangle 32.png"
              alt=""
              className="absolute left-[-38px] bottom-[-40px] -z-40 hidden xl:block 2xl:block lg:block"
            />
          </div>

          <div className="flex flex-col mr-12 ">
            <div className=" h-[366px] relative flex justify-center items-center ">
              <img
                src="./Rectangle 31.png"
                alt=""
                className=" absolute right-[-52px] h-[366px] "
              />
              <img
                src="./Group 73.svg"
                alt=""
                className=" absolute -top-6 -right-20 -z-10 hidden xl:block 2xl:block lg:block"
              />

              <input
                type="text"
                placeholder="Enter your Email-Address.."
                className="border-2 placeholder:text-slate-500 placeholder:px-5 w-[571.86px] h-[80px] rounded-full z-10"
              />

              <button className=" absolute right-[10px] text-[16px] z-10  bg-blue-600 text-white w-[250px] font-bold h-[64px] rounded-full flex justify-center items-center">
                Contact Now
              </button>
            </div>
          </div>
        </div>

        {/* for responsive below */}
        <div className="sm:block hidden xl:hidden 2xl:hidden lg:hidden relative sm:w-[100vw] sm:h-[300px] m-auto mt-6  bg-sky-100 rounded-[75px]  justify-between">
          <div className="flex flex-col m-auto justify-center items-center ml-12 ">
            <p className="font-bold mt-6 text-4xl leading-[60px]">
              Subscribe Newsletter
            </p>
            <p className="text-slate-500">
              I will update good news and promotion service not spam
            </p>
            <img
              src="./Rectangle 32.png"
              alt=""
              className="absolute left-[-38px] bottom-[-40px] -z-40 hidden xl:block 2xl:block lg:block"
            />
          </div>

          <div className="flex flex-col  ">
            <div className=" h-[200px] relative flex justify-center items-center ">
              <input
                type="text"
                placeholder="Enter your Email-Address.."
                className="border-2 placeholder:text-slate-500 placeholder:px-5 w-[501.86px] h-[80px] rounded-full"
              />
              <button className="   bg-blue-600 text-white w-[150px] font-bold h-[80px] rounded-full flex justify-center items-center">
                Contact Now
              </button>

              {/* <button className="   bg-blue-600 text-white w-[200px] font-bold h-[64px] rounded-full flex justify-center items-center">
              Contact Now
            </button> */}
            </div>
          </div>
        </div>
        <div className=" sm:hidden flex flex-col justify-evenly relative h-[300px]  mt-8  bg-sky-100 rounded-[75px]">
          <div className="flex flex-col  justify-center items-center  ">
            <p className="font-bold mt-6 text-2xl leading-[60px]">
              Subscribe Newsletter
            </p>
            <p className="text-slate-500 text-[12px]">
              I will update good news and promotion service not spam
            </p>
          </div>
          <div className="">
            <div className="flex flex-col justify-center items-center  h-32">
              <input
                type="text"
                placeholder="Enter your Email-Address.."
                className="border-2 placeholder:text-slate-500 placeholder:px-5 sm:w-[400.86px] w-[300px] h-[50px] rounded-full"
              />
              <button className=" bg-blue-600 mt-3  text-white sm:w-[150px]  sm:font-bold rounded-full h-12 ">
                Contact Now
              </button>

              {/* <button className="   bg-blue-600 text-white w-[200px] font-bold h-[64px] rounded-full flex justify-center items-center">
              Contact Now
            </button> */}
            </div>
          </div>
        </div>
    </>
  )
}

export default NewsLetter