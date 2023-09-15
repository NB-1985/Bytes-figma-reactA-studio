import React from "react";

const GreatSince = () => {
  return (
    <>
      <div
        className="lg:pt-[146px] lg:pb-[113px]
    pt-[60px] pb-[70px]"
      >
        <div
          className=" xl:h-[440px] h-[700px]   w-[90vw] flex justify-between  items-center  mx-auto 
              gap-6 flex-col  
              xl:gap-0 xl:flex-row "
          id="project"
        >
          <div className="relative">
            <div className=" xl:h-[440px]">
              <img
                src="./unsplash_bzqU01v-G54.png"
                alt=""
                className="h-[369.36px]  w-[599.66px] xl:block 2xl:block hidden "
              />
            </div>
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
          <div className="pt-[58.53px]  pb-[121.1px]">
            <div className="lg:w-[580.03px] text-center lg:text-start h-[260.37px] flex flex-col justify-evenly relative">
              <img
                src="./Rectangle 26.png"
                alt=""
                className="absolute -z-10 top-2 -left-5 hidden xl:block 2xl:block"
              />
              <p className="sm:font-bold sm:text-4xl text-2xl ">
                Great Digital Product Agency
                <br className="hidden xl:block 2xl:block" /> since 2016
              </p>
              <p className="text-slate-500 ">
                Our Business Plan is a written document describing a company's
                core business activites, Objectives, and how it plans to achieve
                its goals. Our goal is to provide our client high quality
                Product with modern idea accordingly their budgets and according
                thir reuirements.
              </p>
            </div>
          </div>
        </div>
      </div>


    </>
  );
};

export default GreatSince;
