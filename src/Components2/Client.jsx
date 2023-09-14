import React from 'react'

const Client = () => {
  return (
    <>
            <div className="hidden  xl:flex 2xl:flex sm:pt-[33px] w-[90vw] mx-auto h-[124px]  justify-between">
          <div className="flex flex-col justify-center gap-3">
            <div className="font-bold text-4xl">Our Client</div>
            <p className="w-[354px] text-slate-400">
              Several selected clients, who already believe in our service.
            </p>
          </div>

          <div className="flex gap-16 items-center justify-center  ">
            <img src="./Google Logo.svg" alt="" />
            <img src="./airbnb Logo.svg" alt="" />
            <img src="./Uber Eats Logo.svg" alt="" />
            <img src="./Amazon Logo.svg" alt="" className="mt-5" />
          </div>
        </div>

        {/* for responsive below... */}

        <div className="xl:hidden 2xl:hidden mt-24 w-[90vw] m-auto  h-[124px] sm:flex-wrap">
          <div className="flex justify-center items-center">
            <div className="flex flex-col items-center justify-center gap-3">
              <div className="font-bold text-4xl">Our Client</div>
              <p className="w-[354px] text-slate-400 text-center">
                Several selected clients, who already believe in our service.
              </p>
            </div>
          </div>

          <div className="flex sm:gap-16 gap-4 flex-wrap items-center justify-center  my-8 ">
            <img src="./Google Logo.svg" alt="" className="hidden sm:block"/>
            <img src="./airbnb Logo.svg" alt="" className="hidden sm:block"/> 
            <img src="./Uber Eats Logo.svg" alt="" className="hidden sm:block"/>
            <img src="./Amazon Logo.svg" alt="" className="mt-5 hidden sm:block" />
            <img src="./Google Logo.svg" alt="" className="h-6 sm:hidden"/>
            <img src="./airbnb Logo.svg" alt=""className="h-6 sm:hidden" />
            <img src="./Uber Eats Logo.svg" alt="" className="h-6 sm:hidden"/>
            <img src="./Amazon Logo.svg" alt="" className="mt-5 h-6 sm:hidden"  />
          </div>
        </div>
    </>
  )
}

export default Client