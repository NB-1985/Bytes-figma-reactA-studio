import React from 'react'

const Hero = () => {
  return (
    <>

        {/* hero section of homepage starts here */}

        <div className="xl:flex 2xl:flex hidden lg:justify-end mt-6 " id='home'>
          <div className="h-[615px]  w-[95vw] flex justify-between ">
            <div className="flex items-center h-[615px]">
              <div className="relative h-[272.3px] w-[552.57px] flex flex-col justify-between">
                <div className="font-normal text-4xl ">
                  A Digital Product Agency
                </div>
                <div className="text-[16px] text-slate-500">
                  Leading digital agency with solid design and development
                  expertise. We build readymade websites, mobile applications,
                  and elaborate online business services.
                </div>
                <button className="z-10 text-[20px] font-normal bg-blue-600 text-white w-[250px] h-[70px] rounded-full flex justify-center items-center">
                  Contact Now
                </button>
                <img
                  src="./Dot Ornament.png"
                  alt=""
                  className="absolute -bottom-28 hidden xl:block 2xl:block"
                />
              </div>
            </div>
            <div className="relative">
              <img src="./image 8.png" alt="" className=" relative z-10" />
              <img
                src="./Ellipse 85.png"
                alt=""
                className="absolute top-1 -left-16 hidden xl:block 2xl:block "
              />
              <img
                src="./Rectangle 23.png"
                alt=""
                className="absolute right-32 bottom-0 hidden xl:block 2xl:block"
              />
            </div>
          </div>
        </div>

        {/* for responsive below*/}
        <div className="sm:flex xl:hidden 2xl:hidden mt-6  ">
          <div className=" lg:w-[100vw] md:w-[100vw]    ">
            <div className="flex items-center w-full h-[400px] justify-center">
              <div className="relative h-[372.3px] w-[552.57px] flex flex-col items-center  justify-evenly ">
                <div className="font-bold sm:text-[40px] text-[25px]">
                  A Digital Product Agency
                </div>
                <div className="sm:text-[20px] text-[20px] text-slate-500 w-[90vw] leading-8 text-center ">
                  Leading digital agency with solid design and development
                  expertise. We build readymade websites, mobile applications,
                  and elaborate online business services.
                </div>
                <button className="z-10 sm:text-[20px] font-normal bg-blue-600 text-white sm:w-[250px] sm:h-[70px] w-[160px] h-[60px] rounded-full flex justify-center items-center">
                  Contact Now
                </button>
                <img
                  src="./Dot Ornament.png"
                  alt=""
                  className="absolute -bottom-28  xl:block 2xl:block hidden"
                />
              </div>
            </div>
            <div className="relative">
              <img
                src="./image 8.png"
                alt=""
                className=" relative z-10 w-[90vw] m-auto "
              />
              <img
                src="./Ellipse 85.png"
                alt=""
                className="absolute top-1 -left-16 hidden xl:block 2xl:block "
              />
              {/* <div className="bg-stone-800 w-[128.44px] h-[130.49px] absolute top-0 -left-16 rounded-full "></div> */}

              {/* <div className="bg-[#DAE9FF] w-[128.44px] h-[130.49] a"></div> */}
              <img
                src="./Rectangle 23.png"
                alt=""
                className="absolute right-32 bottom-0 hidden xl:block 2xl:block"
              />
            </div>
          </div>
        </div>


    </>
  )
}

export default Hero