import React from 'react'

const Footer = () => {
  return (
    <>
           <div className="  w-[90vw] mx-auto pt-[107px] sm:flex-col sm:gap-36 xl:flex-row  pb-[23px] lg:pt-[107px] sm:pt-[107px] lg:flex  justify-center
          lg:justify-evenly xl:justify-between  sm:justify-center items-center">
          <div className="flex flex-col gap-4 lg:w-[738px] xl:w-[290px]   ">
            <p className="font-bold text-xl">
              <span className="font-bold text-2xl " id="contact">A+</span> Studio
            </p>
            <p className="text-[14px] text-slate-500  h-[110px] w-[286.57px] ">
              Leading digital agency with solid design and development
              expertise. We build readymade websites, mobile applications, and
              elaborate online business services.
            </p>
            <div className="flex gap-4 relative">
            <a href="https://twitter.com"><img src="./facebook.svg" alt="" /></a>  
             <a href="https://www.facebook.com"><img src="./twitter.svg" alt="" /></a>
             <a href="https://www.linkedin.com"> <img src="./linkedin.svg" alt="" /></a>
              {/* <div className="bg-stone-800 h-20 w-20 absolute -z-10"></div> */}
            </div>
          </div>
          <div className=" hidden   sm:flex xl:flex 2xl:flex  md:mt-10 lg:mt-0  lg:flex gap-24 lg:h-[214px]">
            <div className="flex flex-col gap-4">
              <p className="font-bold text-[20px]">What We Do</p>
              <ul className="text-[14px]  text-slate-500">
                <p>Web Design</p>
                <p>App Design</p>
                <p>Social Media Managea</p>
                <>Market Analysis Project</>
              </ul>
            </div>
            <div className="flex flex-col gap-4">
              <p className="font-bold text-[20px]">Company</p>
              <ul className=" text-[14px] text-slate-500">
                <li>About Us</li>
                <li>Career</li>
                <li>Become Investor</li>
              </ul>
            </div>
            <div className="flex flex-col gap-4">
              <p className="font-bold text-[20px]">Support</p>
              <ul className=" text-[14px] text-slate-500">
                <li>FAQ</li>
                <li>Policy Design</li>
                <li>Business</li>
              </ul>
            </div>
            <div className="flex flex-col gap-4">
              <p className="font-bold text-[20px]">Contact</p>
              <ul className=" text-[14px] text-slate-500">
                <li>WhatsApp</li>
                <li>Support 24</li>
              </ul>
            </div>
          </div>

          {/* for mobile 425px below */}
          <div className=" sm:hidden">

            <div className="flex justify-between my-6 ">
            <div className="flex flex-col gap-4">
              <p className="font-bold text-[20px]">What We Do</p>
              <ul className="text-[14px]  text-slate-500">
                <p>Web Design</p>
                <p>App Design</p>
                <p>Social Media Managea</p>
                <>Market Analysis Project</>
              </ul>
            </div>
            <div className="flex flex-col gap-4">
              <p className="font-bold text-[20px]">Company</p>
              <ul className=" text-[14px] text-slate-500">
                <li>About Us</li>
                <li>Career</li>
                <li>Become Investor</li>
              </ul>
            </div>
            </div>
            <div className="flex justify-between my-6">
            <div className="flex flex-col gap-4">
              <p className="font-bold text-[20px]">Support</p>
              <ul className=" text-[14px] text-slate-500">
                <li>FAQ</li>
                <li>Policy Design</li>
                <li>Business</li>
              </ul>
            </div>
            <div className="flex flex-col gap-4 relative right-8">
              <p className="font-bold text-[20px]">Contact</p>
              <ul className=" text-[14px] text-slate-500">
                <li>WhatsApp</li>
                <li>Support 24</li>
              </ul>
            </div>
            </div>
          </div>
        </div>
    </>
  )
}

export default Footer