import React from 'react'

const HappyClient = () => {
  return (
    <>
    <div className=''>
            <div className=" relative lg:h-[597px] w-[90vw]  mx-auto   flex justify-between  flex-col" id="blog">
          <div className="flex flex-col items-center gap-3 ">
            <div className="font-bold lg:text-4xl text-2xl">What our happy client say</div>
            <p className="text-slate-500">
              Several selected clients, who already believe in our service.
            </p>
          </div>
          <div className="flex pt-8 lg:pt-0
          flex-col 
          lg:flex-row
         
          ">
            <div className="relative  flex justify-center " >
              <img
                src="./Group 73.svg"
                alt=""
                className="absolute -z-10 right-1 hidden lg:block xl:block "
              />
              <img
                src="./Ellipse 94.png"
                alt=""
                className="absolute bottom-[60px] left-[8px] -z-10 hidden lg:block xl:block "
              />
              <img
                src="./unsplash_MTZTGvDsHFY.png"
                alt=""
                className=" lg:w-[404px]  w-[300px] "
              />
            </div>
            <div className="lg:h-[185px] sm:h-[150px]  lg:w-[421.27px] m-auto ">
              <div className="font-bold text-2xl  text-center lg:text-start ">Matthew Paul</div>
              <p className="text-slate-500 text-center lg:text-start pt-3 pb-3 ">
                Perfect, very good job! Thank you for the amazing design and
                work. Really impressed with the high quality and quick
                turnaround time. Highly recommend.
              </p>
            </div>
            <div className="relative  grid place-content-center"  >
              <img src="./Group 71.png " alt="" className='w-[250px] lg:w-auto'/>
              <img
                src="./Ellipse 93.png"
                alt=""
                className="absolute -z-10 left-[20px]  bottom-24 hidden lg:block xl:block 2xl:block "
              />
            </div>
          </div>
        </div>
        </div>
       
    </>
  )
}

export default HappyClient