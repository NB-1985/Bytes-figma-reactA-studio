// import React from "react";
// // import { useState,useRef } from "react";
// // import { BsList } from "react-icons/bs";
// // import { BsXSquare } from "react-icons/bs";
// import Navbar from "./Navbar";
// const Main = () => {


//   return (
//     <div className=" h-screen bg-white scroll-smooth snap-mandatory snap-y   " >
//       <div className="sm:overflow-hidden top-0  " id="container">
//         {/* navbar starts here */}
//        <Navbar/>

//         {/* navbar ends here */}

//         {/* hero section of homepage starts here */}

//         <div className="xl:flex 2xl:flex hidden lg:justify-end mt-6 ">
//           <div className="h-[615px]  w-[95vw] flex justify-between ">
//             <div className="flex items-center h-[615px]">
//               <div className="relative h-[272.3px] w-[552.57px] flex flex-col justify-between">
//                 <div className="font-normal text-4xl ">
//                   A Digital Product Agency
//                 </div>
//                 <div className="text-[16px] text-slate-500">
//                   Leading digital agency with solid design and development
//                   expertise. We build readymade websites, mobile applications,
//                   and elaborate online business services.
//                 </div>
//                 <button className="z-10 text-[20px] font-normal bg-blue-600 text-white w-[250px] h-[70px] rounded-full flex justify-center items-center">
//                   Contact Now
//                 </button>
//                 <img
//                   src="./Dot Ornament.png"
//                   alt=""
//                   className="absolute -bottom-28 hidden xl:block 2xl:block"
//                 />
//               </div>
//             </div>
//             <div className="relative">
//               <img src="./image 8.png" alt="" className=" relative z-10" />
//               <img
//                 src="./Ellipse 85.png"
//                 alt=""
//                 className="absolute top-1 -left-16 hidden xl:block 2xl:block "
//               />
//               <img
//                 src="./Rectangle 23.png"
//                 alt=""
//                 className="absolute right-32 bottom-0 hidden xl:block 2xl:block"
//               />
//             </div>
//           </div>
//         </div>

//         {/* for responsive below*/}
//         <div className="sm:flex xl:hidden 2xl:hidden mt-6  ">
//           <div className=" lg:w-[100vw] md:w-[100vw] sm:flex-col-reverse   ">
//             <div className="flex items-center w-full h-[400px] justify-center">
//               <div className="relative h-[372.3px] w-[552.57px] flex flex-col items-center  justify-evenly ">
//                 <div className="font-bold sm:text-[40px] text-[25px]">
//                   A Digital Product Agency
//                 </div>
//                 <div className="sm:text-[20px] text-[20px] text-slate-500 leading-8 text-center ">
//                   Leading digital agency with solid design and development
//                   expertise. We build readymade websites, mobile applications,
//                   and elaborate online business services.
//                 </div>
//                 <button className="z-10 sm:text-[20px] font-normal bg-blue-600 text-white sm:w-[250px] sm:h-[70px] w-[160px] h-[60px] rounded-full flex justify-center items-center">
//                   Contact Now
//                 </button>
//                 <img
//                   src="./Dot Ornament.png"
//                   alt=""
//                   className="absolute -bottom-28  xl:block 2xl:block hidden"
//                 />
//               </div>
//             </div>
//             <div className="relative">
//               <img
//                 src="./image 8.png"
//                 alt=""
//                 className=" relative z-10 w-full "
//               />
//               <img
//                 src="./Ellipse 85.png"
//                 alt=""
//                 className="absolute top-1 -left-16 hidden xl:block 2xl:block "
//               />
//               {/* <div className="bg-stone-800 w-[128.44px] h-[130.49px] absolute top-0 -left-16 rounded-full "></div> */}

//               {/* <div className="bg-[#DAE9FF] w-[128.44px] h-[130.49] a"></div> */}
//               <img
//                 src="./Rectangle 23.png"
//                 alt=""
//                 className="absolute right-32 bottom-0 hidden xl:block 2xl:block"
//               />
//             </div>
//           </div>
//         </div>

//         {/* hero section of homepage ends here */}

//         {/* client section starts here */}

//         <div className="hidden  xl:flex 2xl:flex mt-8 w-[90vw] m-auto h-[124px]  justify-between">
//           <div className="flex flex-col justify-center gap-3">
//             <div className="font-bold text-4xl">Our Client</div>
//             <p className="w-[354px] text-slate-400">
//               Several selected clients, who already believe in our service.
//             </p>
//           </div>

//           <div className="flex gap-16 items-center justify-center  ">
//             <img src="./Google Logo.svg" alt="" />
//             <img src="./airbnb Logo.svg" alt="" />
//             <img src="./Uber Eats Logo.svg" alt="" />
//             <img src="./Amazon Logo.svg" alt="" className="mt-5" />
//           </div>
//         </div>

//         {/* for responsive below... */}

//         <div className="xl:hidden 2xl:hidden mt-24 w-[90vw] m-auto  h-[124px] sm:flex-wrap">
//           <div className="flex justify-center items-center">
//             <div className="flex flex-col items-center justify-center gap-3">
//               <div className="font-bold text-4xl">Our Client</div>
//               <p className="w-[354px] text-slate-400 text-center">
//                 Several selected clients, who already believe in our service.
//               </p>
//             </div>
//           </div>

//           <div className="flex sm:gap-16 gap-4 flex-wrap items-center justify-center  my-8 ">
//             <img src="./Google Logo.svg" alt="" className="hidden sm:block"/>
//             <img src="./airbnb Logo.svg" alt="" className="hidden sm:block"/> 
//             <img src="./Uber Eats Logo.svg" alt="" className="hidden sm:block"/>
//             <img src="./Amazon Logo.svg" alt="" className="mt-5 hidden sm:block" />
//             <img src="./Google Logo.svg" alt="" className="h-6 sm:hidden"/>
//             <img src="./airbnb Logo.svg" alt=""className="h-6 sm:hidden" />
//             <img src="./Uber Eats Logo.svg" alt="" className="h-6 sm:hidden"/>
//             <img src="./Amazon Logo.svg" alt="" className="mt-5 h-6 sm:hidden"  />
//           </div>
//         </div>
//         {/* client section ends here */}

//         {/* how can we help starts here */}
//         <div className="hidden justify-end my-20  relative  xl:flex 2xl:flex " id="service">
//           <div className="h-[867px] w-[95vw]  flex">
//             <div className="flex items-center w-[30vw]">
//               <div className=" flex flex-col relative ">
//                 <div className="font-[400]  leading-[60px] text-[40px] w-[394.66px] h-[120px] relative z-10">
//                   How can we help your Business ?
//                 </div>
//                 <p className="text-slate-400 relative w-[436.56px]">
//                   We build readymade websites, mobile applications, and
//                   elaborate online business services.
//                 </p>
//                 <img
//                   src="./Rectangle 25.png"
//                   alt=""
//                   className="absolute -top-16 hidden xl:block 2xl:block"
//                 />
//               </div>
//             </div>
//             <div className=" flex justify-end w-[70vw] mr-20 " >
//               <div className=" h-full flex items-center ">
//                 <img
//                   src="./Rectangle 24.png"
//                   alt=""
//                   className="w-[1053.17px]
//             absolute right-1 -z-20"
//                 />
//                 <img
//                   src="./Group 70.png"
//                   alt=""
//                   className="absolute bottom-20 left-28 2xl:hidden -z-30"
//                 />
//                 <div className="flex gap-7 mx-14 relative">
//                   <div className="flex mt-14 flex-col gap-7 ">
//                     <div className="w-[309.81px] h-[379px] bg-[#FFFFFF] rounded-2xl flex justify-evenly flex-col items-center sm:shadow-2xl shadow-[#0000000D;]">
//                       <div className="bg-[#F1F7FF]  h-[121px] w-[121.71px] rounded-2xl flex justify-center items-center">
//                         <img src="./box-search 1.svg" alt="" />
//                       </div>
//                       <p className="font-bold text-2xl text-center">
//                         Business Idea <br></br>Planning
//                       </p>
//                       <p className="text-[16px] text-slate-500 text-center">
//                         We present you a proposal and discuss niffty-gritty like
//                       </p>
//                     </div>

//                     <div className="w-[309.81px] h-[379px] bg-[#FFFFFF] rounded-2xl flex justify-evenly flex-col items-center sm:shadow-2xl shadow-[#0000000D;]">
//                       <div className="bg-[#FFF2F8]  h-[121px] w-[121.71px] rounded-2xl flex justify-center items-center">
//                         <img src="./code-1 1.svg" alt="" />
//                       </div>
//                       <p className="font-bold text-2xl text-center">
//                         Development <br /> Website and App
//                       </p>
//                       <p className="text-[16px] text-slate-500 text-center">
//                         Communication protocols apart <br /> from engagement
//                         models
//                       </p>
//                     </div>
//                   </div>
//                   <div className="gap-7 flex flex-col mb-20">
//                     <div className=" w-[309.81px] h-[379px] bg-[#FFFFFF] rounded-2xl flex justify-evenly flex-col items-center sm:shadow-2xl shadow-[#0000000D;] ">
//                       <div className="bg-[#FFF7E3]  h-[121px] w-[121.71px] rounded-2xl flex justify-center items-center">
//                         <img src="./empty-wallet 1.svg" alt="" />
//                       </div>
//                       <p className="font-bold text-2xl text-center">
//                         Financial Planning <br></br>System
//                       </p>
//                       <p className="text-[16px] text-slate-500 text-center">
//                         Protocols apart from aengage <br /> models, pricing
//                         billing
//                       </p>
//                     </div>
//                     <div className="w-[309.81px] h-[379px] bg-[#FFFFFF] rounded-2xl flex justify-evenly flex-col items-center sm:shadow-2xl shadow-[#0000000D;]">
//                       <div className="bg-[#DEFFEE]  h-[121px] w-[121.71px] rounded-2xl flex justify-center items-center">
//                         <img src="./chart-square 1.svg" alt="" />
//                       </div>
//                       <p className="font-bold text-2xl text-center">
//                         Market Analysis
//                         <br /> Project
//                       </p>
//                       <p className="text-[16px] text-slate-500 text-center">
//                         Protocols apart from aengage <br /> models, pricing
//                         billing{" "}
//                       </p>
//                     </div>
//                   </div>
//                   <img
//                     src="./Ellipse 87.png"
//                     alt=""
//                     className="absolute bottom-8 -right-14 -z-30"
//                   />
//                 </div>
//               </div>
//             </div>
//           </div>
//         </div>
//         {/* for responsive below */}
//         <div className="mt-40 relative flex  xl:hidden 2xl:hidden sm:flex-col">
//           <div className="sm:h-[867px] w-[100vw] justify-center  ">
//             <div className="flex items-center justify-center">
//               <div className=" flex flex-col relative justify-center items-center">
//                 <div className="font-[400] leading-[60px] sm:text-[40px] text-base relative z-10 text-center sm:my-6">
//                   How can we help your Business ?
//                 </div>
//                 <p className="text-slate-400 relative smw-[436.56px] sm:text-base text-[15px] text-center p-4">
//                   We build readymade websites, mobile applications, and
//                   elaborate online business services.
//                 </p>
//                 <img
//                   src="./Rectangle 25.png"
//                   alt=""
//                   className="absolute -top-16 hidden xl:block 2xl:block"
//                 />
//               </div>
//             </div>
//             <div>
//               <div className="hidden h-full sm:flex items-center ">
//                 <div className="flex gap-7 justify-center items-center sm:mx-auto mt-10 relative">
//                   <div className="flex mt-14 flex-col gap-7 ">
//                     <div className="sm:w-[309.81px] sm:h-[379px] h-[250px] w-[180px] bg-[#FFFFFF] rounded-2xl flex justify-evenly flex-col items-center sm:shadow-2xl shadow-[#0000000D;]">
//                       <div className="bg-[#F1F7FF]  h-[121px] w-[121.71px] rounded-2xl flex justify-center items-center">
//                         <img src="./box-search 1.svg" alt="" />
//                       </div>
//                       <p className="font-bold text-2xl text-center">
//                         Business Idea <br></br>Planning
//                       </p>
//                       <p className="text-[16px] text-slate-500 text-center">
//                         We present you a proposal and discuss niffty-gritty like
//                       </p>
//                     </div>

//                     <div className="w-[309.81px] h-[379px] bg-[#FFFFFF] rounded-2xl flex justify-evenly flex-col items-center sm:shadow-2xl shadow-[#0000000D;]">
//                       <div className="bg-[#FFF2F8]  h-[121px] w-[121.71px] rounded-2xl flex justify-center items-center">
//                         <img src="./code-1 1.svg" alt="" />
//                       </div>
//                       <p className="font-bold text-2xl text-center">
//                         Development <br /> Website and App
//                       </p>
//                       <p className="text-[16px] text-slate-500 text-center">
//                         Communication protocols apart <br /> from engagement
//                         models
//                       </p>
//                     </div>
//                   </div>
//                   <div className="gap-7 flex flex-col mb-20">
//                     <div className=" w-[309.81px] h-[379px] bg-[#FFFFFF] rounded-2xl flex justify-evenly flex-col items-center sm:shadow-2xl shadow-[#0000000D;] ">
//                       <div className="bg-[#FFF7E3]  h-[121px] w-[121.71px] rounded-2xl flex justify-center items-center">
//                         <img src="./empty-wallet 1.svg" alt="" />
//                       </div>
//                       <p className="font-bold text-2xl text-center">
//                         Financial Planning <br></br>System
//                       </p>
//                       <p className="text-[16px] text-slate-500 text-center">
//                         Protocols apart from aengage <br /> models, pricing
//                         billing
//                       </p>
//                     </div>
//                     <div className="w-[309.81px] h-[379px] bg-[#FFFFFF] rounded-2xl flex justify-evenly flex-col items-center sm:shadow-2xl shadow-[#0000000D;]">
//                       <div className="bg-[#DEFFEE]  h-[121px] w-[121.71px] rounded-2xl flex justify-center items-center">
//                         <img src="./chart-square 1.svg" alt="" />
//                       </div>
//                       <p className="font-bold text-2xl text-center">
//                         Market Analysis
//                         <br /> Project
//                       </p>
//                       <p className="text-[16px] text-slate-500 text-center">
//                         Protocols apart from aengage <br /> models, pricing
//                         billing{" "}
//                       </p>
//                     </div>
//                   </div>
//                 </div>
//               </div>

//               {/* for mobile 425px below */}
//               <div className="sm:hidden  flex justify-evenly mx-4">
//                 <div className=" rounded-3xl h-56 w-40 flex shadow-lg shadow-black  " >
//                     <div className="flex justify-evenly  items-center flex-col">
//                       <div className="rounded-xl bg-[#F1F7FF]">
//                         <img src="./box-search 1.svg" alt="" className="h-10 "/>
//                       </div>
//                       <p className="text-base text-center ">
//                         Business Idea <br></br>Planning
//                       </p>
//                       <p className=" text-slate-500 text-center text-[12px]">
//                         We present you a proposal and discuss niffty-gritty like
//                       </p>
//                     </div>
//                     </div>
//                 <div className=" rounded-3xl h-56 w-40 flex shadow-lg shadow-black   " >
//                     <div className="flex justify-evenly items-center flex-col">
//                       <div className="bg-[#FFF7E3] rounded-xl">
//                         <img src="./empty-wallet 1.svg" alt="" className="h-10   "/>
//                       </div>
//                       <p className="text-base text-center ">
//                         {/* Business Idea <br></br>Planning */}
//                         Financial Planning System
//                       </p>
//                       <p className=" text-slate-500 text-center text-[12px]">
//                       Protocols apart from aengage models, pricing billing                      </p>
//                     </div>
//                     </div>
//                     </div>
//               <div className="sm:hidden my-4  flex shadow-lg shadow-[#0000000D;] justify-evenly mx-4">
//                 <div className="  rounded-3xl h-56 w-40 flex shadow-lg shadow-black " >
//                     <div className="flex justify-evenly items-center flex-col">
//                       <div className="bg-[#FFF2F8] round">
//                         <img src="./code-1 1.svg" alt="" className="h-10"/>
//                       </div>
//                       <p className="text-base text-center ">
//                       Development Website and App                      </p>
//                       <p className=" text-slate-500 text-center text-[12px]">
//                       Communication protocols apart from engagement models                      </p>
//                     </div>
//                     </div>
//                 <div className="bg-[#FFFFFF] rounded-3xl h-56 w-40 flex  shadow-lg  shadow-black " >
//                     <div className="flex justify-evenly items-center flex-col">
//                       <div className=" bg-[#DEFFEE] rounded-xl ">
//                         <img src="./chart-square 1.svg" alt="" className="h-10   "/>
//                       </div>
//                       <p className="text-base text-center ">
//                         Market Analysis Project
//                       </p>
//                       <p className=" text-slate-500 text-center text-[12px]">
//                         We present you a proposal and discuss niffty-gritty like
//                       </p>
//                     </div>
//                     </div>
//                     </div>
//             </div>
//           </div>
//         </div>

//         {/* how can we help ends here */}
//         {/* great since start here */}
//         <div className=" h-[440px] w-[90vw] m-auto sm:mt-56 xl:mt-10 2xl:mt-10 sm:gap-8 xl:gap-0 2xl:gap-0 hidden  sm:flex justify-between items-center" id="project">
//           <div className="relative">
//             <img
//               src="./unsplash_bzqU01v-G54.png"
//               alt=""
//               className="h-[369.36px] w-[599.66px] xl:block 2xl:block hidden "
//             />
//             <img
//               src="./unsplash_bzqU01v-G54.png"
//               alt=""
//               className="sm:block xl:hidden 2xl:hidden"
//             />
//             <img
//               src="./Group.png"
//               alt=""
//               className=" absolute top-36 right-64 hidden xl:block 2xl:block"
//             />
//             <img
//               src="./Ellipse 86.png"
//               alt=""
//               className="absolute
//           -right-16 top-72 -z-10 hidden xl:block 2xl:block"
//             />
//           </div>
//           <div className="w-[580.03px] h-[260.37px] flex flex-col justify-evenly relative">
//             <img
//               src="./Rectangle 26.png"
//               alt=""
//               className="absolute -z-10 top-2 -left-5 hidden xl:block 2xl:block"
//             />
//             <div className="sm:font-bold sm:text-4xl ">
//               Great Digital Product Agency{" "}
//               <br className="hidden xl:block 2xl:block" /> since 2016{" "}
//             </div>
//             <div className="text-slate-500 ">
//               Our Business Plan is a written document describing a company's
//               core business activites, Objectives, and how it plans to achieve
//               its goals. Our goal is to provide our client high quality Product
//               with modern idea accordingly their budgets and according thir
//               reuirements.
//             </div>
//           </div>
//         </div>

//         {/* for responsive below */}
//         <div className="sm:hidden h-[440px] w-[90vw] m-auto sm:mt-56 my-14 xl:mt-10 2xl:mt-10 sm:gap-8 xl:gap-0 2xl:gap-0 flex-col justify-between items-center">
//           <div className="relative">
//             <img
//               src="./unsplash_bzqU01v-G54.png"
//               alt=""
//               className="block xl:hidden 2xl:hidden"
//             />
//           </div>
//           <div className=" h-[260.37px] flex flex-col justify-evenly relative">
            
//             <div className="font-bold sm:text-4xl ">
//               Great Digital Product Agency since 2016{" "}
//             </div>
//             <div className="text-slate-500 ">
//               Our Business Plan is a written document describing a company's
//               core business activites, Objectives, and how it plans to achieve
//               its goals. Our goal is to provide our client high quality Product
//               with modern idea accordingly their budgets and according thir
//               reuirements.
//             </div>
//           </div>
//         </div>
//         {/* great since ends here */}
//         {/* happy client starts here */}
//         <div className="hidden relative h-[597px] w-[90vw]  m-auto mt-8 sm:mt-0 sm:flex justify-evenly  flex-col" id="blog">
//           <div className="flex flex-col items-center gap-3 ">
//             <div className="font-bold text-4xl ">What our happy client say</div>
//             <p className="text-slate-500">
//               Several selected clients, who already believe in our service.
//             </p>
//           </div>
//           <div className="flex  ">
//             <div className="relative">
//               <img
//                 src="./Group 73.svg"
//                 alt=""
//                 className="absolute -z-10 right-1 hidden lg:block xl:block 2xl:block"
//               />
//               <img
//                 src="./Ellipse 94.png"
//                 alt=""
//                 className="absolute bottom-[60px] left-[8px] -z-10 hidden lg:block xl:block 2xl:block"
//               />
//               <img
//                 src="./unsplash_MTZTGvDsHFY.png"
//                 alt=""
//                 className=" w-[404px]  "
//               />
//             </div>
//             <div className="h-[185px] w-[421.27px] m-auto">
//               <div className="font-bold text-2xl mb-3">Matthew Paul</div>
//               <div className="text-slate-500">
//                 Perfect, very good job! Thank you for the amazing design and
//                 work. Really impressed with the high quality and quick
//                 turnaround time. Highly recommend.
//               </div>
//             </div>
//             <div className="relative">
//               <img src="./Group 71.png" alt="" />
//               <img
//                 src="./Ellipse 93.png"
//                 alt=""
//                 className="absolute -z-10 left-[20px] bottom-24 hidden lg:block xl:block 2xl:block "
//               />
//             </div>
//           </div>
//         </div>
//         {/* for responsive below */}
//         <div className=" sm:hidden  w-[90vw] mt-16 m-auto  sm:mt-0 flex justify-evenly  flex-col">
//           <div className="flex flex-col items-center gap-3 ">
//             <div className="font-bold text-[20px]">What our happy client say</div>
//             <p className="text-slate-500 text-center">
//               Several selected clients, who already believe in our service.
//             </p>
//           </div>
//           <div className="flex-col ">
//             <div className="grid place-content-center">
//               <img
//                 src="./unsplash_MTZTGvDsHFY.png"
//                 alt=""
//                 className=" w-[200px]  "
//               />
//             </div>
//             <div className="h-[185px] text-center m-auto">
//               <div className="font-bold text-2xl mb-3">Matthew Paul</div>
//               <div className="text-slate-500 text-[14px]">
//                 Perfect, very good job! Thank you for the amazing design and
//                 work. Really impressed with the high quality and quick
//                 turnaround time. Highly recommend.
//               </div>
//             </div>
//             <div className="relative grid place-content-center">
//               <img src="./Group 71.png" alt=""  className="w-[200px]  "/>
//             </div>
//           </div>
//         </div>
//         {/* happy client ends here */}

//         {/* newsleter starts here */}
//         <div className="relative xl:flex 2xl:flex lg:flex hidden w-[90vw] h-[366px] m-auto mt-6  bg-sky-100 rounded-[75px]  justify-between">
//           <div className="flex flex-col m-auto ml-12 ">
//             <p className="font-bold text-4xl leading-[60px]">
//               Subscribe Newsletter
//             </p>
//             <p className="text-slate-500">
//               I will update good news and promotion service not spam
//             </p>
//             <img
//               src="./Rectangle 32.png"
//               alt=""
//               className="absolute left-[-38px] bottom-[-40px] -z-40 hidden xl:block 2xl:block lg:block"
//             />
//           </div>

//           <div className="flex flex-col mr-12 ">
//             <div className=" h-[366px] relative flex justify-center items-center ">
//               <img
//                 src="./Rectangle 31.png"
//                 alt=""
//                 className=" absolute right-[-52px] h-[366px] "
//               />
//               <img
//                 src="./Group 73.svg"
//                 alt=""
//                 className=" absolute -top-6 -right-20 -z-10 hidden xl:block 2xl:block lg:block"
//               />

//               <input
//                 type="text"
//                 placeholder="Enter your Email-Address.."
//                 className="border-2 placeholder:text-slate-500 placeholder:px-5 w-[571.86px] h-[80px] rounded-full z-10"
//               />

//               <button className=" absolute right-[10px] text-[16px] z-10  bg-blue-600 text-white w-[250px] font-bold h-[64px] rounded-full flex justify-center items-center">
//                 Contact Now
//               </button>
//             </div>
//           </div>
//         </div>

//         {/* for responsive below */}
//         <div className="sm:block hidden xl:hidden 2xl:hidden lg:hidden relative sm:w-[100vw] sm:h-[300px] m-auto mt-6  bg-sky-100 rounded-[75px]  justify-between">
//           <div className="flex flex-col m-auto justify-center items-center ml-12 ">
//             <p className="font-bold mt-6 text-4xl leading-[60px]">
//               Subscribe Newsletter
//             </p>
//             <p className="text-slate-500">
//               I will update good news and promotion service not spam
//             </p>
//             <img
//               src="./Rectangle 32.png"
//               alt=""
//               className="absolute left-[-38px] bottom-[-40px] -z-40 hidden xl:block 2xl:block lg:block"
//             />
//           </div>

//           <div className="flex flex-col  ">
//             <div className=" h-[200px] relative flex justify-center items-center ">
//               <input
//                 type="text"
//                 placeholder="Enter your Email-Address.."
//                 className="border-2 placeholder:text-slate-500 placeholder:px-5 w-[501.86px] h-[80px] rounded-full"
//               />
//               <button className="   bg-blue-600 text-white w-[150px] font-bold h-[80px] rounded-full flex justify-center items-center">
//                 Contact Now
//               </button>

//               {/* <button className="   bg-blue-600 text-white w-[200px] font-bold h-[64px] rounded-full flex justify-center items-center">
//               Contact Now
//             </button> */}
//             </div>
//           </div>
//         </div>
//         <div className=" sm:hidden flex flex-col justify-evenly relative h-[300px]  mt-8  bg-sky-100 rounded-[75px]">
//           <div className="flex flex-col  justify-center items-center  ">
//             <p className="font-bold mt-6 text-2xl leading-[60px]">
//               Subscribe Newsletter
//             </p>
//             <p className="text-slate-500 text-[12px]">
//               I will update good news and promotion service not spam
//             </p>
//           </div>
//           <div className="">
//             <div className="flex flex-col justify-center items-center  h-32">
//               <input
//                 type="text"
//                 placeholder="Enter your Email-Address.."
//                 className="border-2 placeholder:text-slate-500 placeholder:px-5 sm:w-[400.86px] w-[300px] h-[50px] rounded-full"
//               />
//               <button className=" bg-blue-600 mt-3  text-white sm:w-[150px]  sm:font-bold rounded-full h-12 ">
//                 Contact Now
//               </button>

//               {/* <button className="   bg-blue-600 text-white w-[200px] font-bold h-[64px] rounded-full flex justify-center items-center">
//               Contact Now
//             </button> */}
//             </div>
//           </div>
//         </div>
//         {/* newsleter ends here */}
//         {/* footer starts here   */}
//         <div className="  w-[90vw] mx-auto my-10 sm:flex-col sm:gap-36 xl:flex-row  lg:my-16 sm:mt-2 lg:flex  justify-center
//           lg:justify-evenly xl:justify-between  sm:justify-center items-center">
//           <div className="flex flex-col gap-4    ">
//             <p className="font-bold text-xl">
//               <span className="font-bold text-2xl " id="contact">A+</span> Studio
//             </p>
//             <p className="text-[14px] text-slate-500  h-[110px] w-[286.57px] ">
//               Leading digital agency with solid design and development
//               expertise. We build readymade websites, mobile applications, and
//               elaborate online business services.
//             </p>
//             <div className="flex gap-4 relative">
//             <a href="https://twitter.com"><img src="./facebook.svg" alt="" /></a>  
//              <a href="https://www.facebook.com"><img src="./twitter.svg" alt="" /></a>
//              <a href="https://www.linkedin.com"> <img src="./linkedin.svg" alt="" /></a>
//               {/* <div className="bg-stone-800 h-20 w-20 absolute -z-10"></div> */}
//             </div>
//           </div>
//           <div className=" hidden sm:flex xl:flex 2xl:flex  md:mt-10 lg:mt-0  lg:flex gap-24 lg:h-[214px]">
//             <div className="flex flex-col gap-4">
//               <p className="font-bold text-[20px]">What We Do</p>
//               <ul className="text-[14px]  text-slate-500">
//                 <p>Web Design</p>
//                 <p>App Design</p>
//                 <p>Social Media Managea</p>
//                 <>Market Analysis Project</>
//               </ul>
//             </div>
//             <div className="flex flex-col gap-4">
//               <p className="font-bold text-[20px]">Company</p>
//               <ul className=" text-[14px] text-slate-500">
//                 <li>About Us</li>
//                 <li>Career</li>
//                 <li>Become Investor</li>
//               </ul>
//             </div>
//             <div className="flex flex-col gap-4">
//               <p className="font-bold text-[20px]">Support</p>
//               <ul className=" text-[14px] text-slate-500">
//                 <li>FAQ</li>
//                 <li>Policy Design</li>
//                 <li>Business</li>
//               </ul>
//             </div>
//             <div className="flex flex-col gap-4">
//               <p className="font-bold text-[20px]">Contact</p>
//               <ul className=" text-[14px] text-slate-500">
//                 <li>WhatsApp</li>
//                 <li>Support 24</li>
//               </ul>
//             </div>
//           </div>

//           {/* for mobile 425px below */}
//           <div className=" sm:hidden">

//             <div className="flex justify-between my-6 ">
//             <div className="flex flex-col gap-4">
//               <p className="font-bold text-[20px]">What We Do</p>
//               <ul className="text-[14px]  text-slate-500">
//                 <p>Web Design</p>
//                 <p>App Design</p>
//                 <p>Social Media Managea</p>
//                 <>Market Analysis Project</>
//               </ul>
//             </div>
//             <div className="flex flex-col gap-4">
//               <p className="font-bold text-[20px]">Company</p>
//               <ul className=" text-[14px] text-slate-500">
//                 <li>About Us</li>
//                 <li>Career</li>
//                 <li>Become Investor</li>
//               </ul>
//             </div>
//             </div>
//             <div className="flex justify-between my-6">
//             <div className="flex flex-col gap-4">
//               <p className="font-bold text-[20px]">Support</p>
//               <ul className=" text-[14px] text-slate-500">
//                 <li>FAQ</li>
//                 <li>Policy Design</li>
//                 <li>Business</li>
//               </ul>
//             </div>
//             <div className="flex flex-col gap-4 relative right-8">
//               <p className="font-bold text-[20px]">Contact</p>
//               <ul className=" text-[14px] text-slate-500">
//                 <li>WhatsApp</li>
//                 <li>Support 24</li>
//               </ul>
//             </div>
//             </div>
//           </div>
//         </div>
//         {/* footer ends here   */}
//       </div>
//     </div>
//   );
// };

// export default Main;






