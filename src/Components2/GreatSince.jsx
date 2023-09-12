import React from 'react'

const GreatSince = () => {
  return (
    <>
           <div className=" h-[440px] w-[90vw] m-auto sm:mt-56 xl:mt-10 2xl:mt-10 sm:gap-8 xl:gap-0 2xl:gap-0 hidden  sm:flex justify-between items-center" id="project">
          <div className="relative">
            <img
              src="./unsplash_bzqU01v-G54.png"
              alt=""
              className="h-[369.36px] w-[599.66px] xl:block 2xl:block hidden "
            />
            <img
              src="./unsplash_bzqU01v-G54.png"
              alt=""
              className="sm:block xl:hidden 2xl:hidden"
            />
            <img
              src="./Group.png"
              alt=""
              className=" absolute top-36 right-64 hidden xl:block 2xl:block"
            />
            <img
              src="./Ellipse 86.png"
              alt=""
              className="absolute
          -right-16 top-72 -z-10 hidden xl:block 2xl:block"
            />
          </div>
          <div className="w-[580.03px] h-[260.37px] flex flex-col justify-evenly relative">
            <img
              src="./Rectangle 26.png"
              alt=""
              className="absolute -z-10 top-2 -left-5 hidden xl:block 2xl:block"
            />
            <div className="sm:font-bold sm:text-4xl ">
              Great Digital Product Agency{" "}
              <br className="hidden xl:block 2xl:block" /> since 2016{" "}
            </div>
            <div className="text-slate-500 ">
              Our Business Plan is a written document describing a company's
              core business activites, Objectives, and how it plans to achieve
              its goals. Our goal is to provide our client high quality Product
              with modern idea accordingly their budgets and according thir
              reuirements.
            </div>
          </div>
        </div>

        {/* for responsive below */}
        <div className="sm:hidden h-[440px] w-[90vw] m-auto sm:mt-56 my-14 xl:mt-10 2xl:mt-10 sm:gap-8 xl:gap-0 2xl:gap-0 flex-col justify-between items-center">
          <div className="relative">
            <img
              src="./unsplash_bzqU01v-G54.png"
              alt=""
              className="block xl:hidden 2xl:hidden"
            />
          </div>
          <div className=" h-[260.37px] flex flex-col justify-evenly relative">
            
            <div className="font-bold sm:text-4xl ">
              Great Digital Product Agency since 2016{" "}
            </div>
            <div className="text-slate-500 ">
              Our Business Plan is a written document describing a company's
              core business activites, Objectives, and how it plans to achieve
              its goals. Our goal is to provide our client high quality Product
              with modern idea accordingly their budgets and according thir
              reuirements.
            </div>
          </div>
        </div>
    </>
  )
}

export default GreatSince