import React from 'react'

const HappyClient = () => {
  return (
    <>
    <div className='sm:pt-[113px]'>
            <div className="hidden relative h-[597px] w-[90vw]  m-auto   sm:flex justify-evenly  flex-col" id="blog">
          <div className="flex flex-col items-center gap-3 ">
            <div className="font-bold text-4xl ">What our happy client say</div>
            <p className="text-slate-500">
              Several selected clients, who already believe in our service.
            </p>
          </div>
          <div className="flex  ">
            <div className="relative">
              <img
                src="./Group 73.svg"
                alt=""
                className="absolute -z-10 right-1 hidden lg:block xl:block 2xl:block"
              />
              <img
                src="./Ellipse 94.png"
                alt=""
                className="absolute bottom-[60px] left-[8px] -z-10 hidden lg:block xl:block 2xl:block"
              />
              <img
                src="./unsplash_MTZTGvDsHFY.png"
                alt=""
                className=" w-[404px]  "
              />
            </div>
            <div className="h-[185px] w-[421.27px] m-auto">
              <div className="font-bold text-2xl mb-3">Matthew Paul</div>
              <div className="text-slate-500">
                Perfect, very good job! Thank you for the amazing design and
                work. Really impressed with the high quality and quick
                turnaround time. Highly recommend.
              </div>
            </div>
            <div className="relative">
              <img src="./Group 71.png" alt="" />
              <img
                src="./Ellipse 93.png"
                alt=""
                className="absolute -z-10 left-[20px] bottom-24 hidden lg:block xl:block 2xl:block "
              />
            </div>
          </div>
        </div>
        </div>
        {/* for responsive below */}
        <div className=" sm:hidden  w-[90vw] mt-16 m-auto  sm:mt-0 flex justify-evenly  flex-col">
          <div className="flex flex-col items-center gap-3 ">
            <div className="font-bold text-[20px]">What our happy client say</div>
            <p className="text-slate-500 text-center">
              Several selected clients, who already believe in our service.
            </p>
          </div>
          <div className="flex-col ">
            <div className="grid place-content-center">
              <img
                src="./unsplash_MTZTGvDsHFY.png"
                alt=""
                className=" w-[200px]  "
              />
            </div>
            <div className="h-[185px] text-center m-auto">
              <div className="font-bold text-2xl mb-3">Matthew Paul</div>
              <div className="text-slate-500 text-[14px]">
                Perfect, very good job! Thank you for the amazing design and
                work. Really impressed with the high quality and quick
                turnaround time. Highly recommend.
              </div>
            </div>
            <div className="relative grid place-content-center">
              <img src="./Group 71.png" alt=""  className="w-[200px]  "/>
            </div>
          </div>
        </div>
    </>
  )
}

export default HappyClient