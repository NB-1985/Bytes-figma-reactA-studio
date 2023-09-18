import React from 'react'

const Footer = () => {
  return (
    <>
           <div className="  w-[90vw] mx-auto  sm:flex-col  xl:flex-row  pb-[23px]  lg:flex  
          lg:justify-evenly xl:justify-between   items-center">
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
            </div>
          </div>
          <div className="sm:flex  pt-8 xl:pt-0 gap-24 lg:h-[214px] relative">
            <div className="flex  flex-col gap-4 pt-3 sm:pt-0">
              <p className="font-bold text-[20px]">What We Do</p>
              <ul className="text-[14px]  text-slate-500">
                <p>Web Design</p>
                <p>App Design</p>
                <p>Social Media Manage</p>
                <>Market Analysis Project</>
              </ul>
            </div>
            <div className="flex flex-col gap-4 pt-3 sm:pt-0">
              <p className="font-bold text-[20px]">Company</p>
              <ul className=" text-[14px] text-slate-500">
                <li>About Us</li>
                <li>Career</li>
                <li>Become Investor</li>
              </ul>
            </div>
            <div className="flex flex-col gap-4 pt-3  sm:pt-0 absolute top-[31px] right-3 md:static">
              <p className="font-bold text-[20px]">Support</p>
              <ul className=" text-[14px] text-slate-500">
                <li>FAQ</li>
                <li>Policy Design</li>
                <li>Business</li>
              </ul>
            </div>
            <div className="flex flex-col gap-4 pt-3 sm:pt-0 absolute bottom-[22px] right-3  md:static">
              <p className="font-bold text-[20px]">Contact</p>
              <ul className=" text-[14px] text-slate-500">
                <li>WhatsApp</li>
                <li>Support 24</li>
              </ul>
            </div>
          </div>
        </div>
    </>
  )
}

export default Footer