// import React from "react";
// const Main = () => {
//   return (
//     <div className=" h-screen  bg-white font-">
//       {/* navbar starts here */}

//       <nav className=" h-10 flex justify-betwee px-5 items-center mt-4">
//         <div className="w-full text-center  text-2xl">
//           <span className="font-bold text-3xl">A+</span> Studio
//         </div>
//         <div className="flex sm:justify-center items-center">
//           <ul className="hidden  md:block gap-10 ">
//             <li>Home</li>
//             <li>What We Do</li>
//             <li>Service</li>
//             <li>Project</li>
//             <li>Blog</li>
//             <li>Contact</li>
//           </ul>
//         </div>
//       </nav>
//       {/* <nav className=" h-10 flex justify-between w-[90vw] m-auto items-center mt-4">
//         <div>
//           <span className="font-bold text-xl">A+</span> Studio
//         </div>
//         <div className="flex justify-center items-center">
//           <ul className="flex gap-10 ">
//             <li>Home</li>
//             <li>What We Do</li>
//             <li>Service</li>
//             <li>Project</li>
//             <li>Blog</li>
//             <li>Contact</li>
//           </ul>
//         </div>
//       </nav> */}

//       {/* navbar ends here */}

//       {/* hero section of homepage starts here */}

//       <div className="flex justify-end md:mt-6 px-5 ">
//         <div className="overflow-hidden flex-col">
//           <div className="h-[272.3px] md:w-[552.57px]  m-auto mx-0 flex flex-col justify-evenly md:justify-between">
//             <div className="font-normal text-2xl ">
//               A Digital Product <br className="md:hidden sm:hidden" /> Agency
//             </div>
//             <div className="text-[13px] text-slate-500 text-left h-auto w-auto leading-5 ">
//               Leading digital agency with solid design and development
//               expertise. We build readymade websites, mobile applications, and
//               elaborate online business services.
//             </div>
//             <button className="md:text-[20px]  font-normal bg-blue-600 text-white md:w-[250px] md:h-[70px] w-36 h-10 rounded-full flex justify-center items-center">
//               Contact Now
//             </button>
//           </div>
//           <div>
//             <img src="./image 8.png" alt="" />
//           </div>
//         </div>
//       </div>

//       {/* hero section of homepage ends here */}

//       {/* client section starts here */}

//       <div className=" overflow-hidden mt-8 md:w-[90vw] px-5 md:m-auto md:h-[124px] md:flex md:justify-between">
//         <div className="flex flex-col justify-center gap-3">
//           <div className="font-bold text-2xl md:text-4xl">Our Client</div>
//           <p className="md:w-[354px] max-w- text-slate-400 text-[13px]">
//             Several selected clients, who already believe in our service.
//           </p>
//         </div>

//         <div className="flex md:gap-16 gap-5 overflow-hidden flex-wrap my-4 items-center justify-center ">
//           <img src="./Google Logo.svg" alt="" className="h-5" />
//           <img src="./airbnb Logo.svg" alt="" className="h-5" />
//           <img src="./Uber Eats Logo.svg" alt="" className="h-5" />
//           <img src="./Amazon Logo.svg" alt="" className="md:mt-5 mt-3 h-5" />
//         </div>
//       </div>
//       {/* client section ends here */}

//       {/* how can we help starts here */}
//       {/* <div className=" flex justify-end mt-6">
//         <div className=" h-[867px]  md:w-[95vw] border-2 border-black ">
//           <div className="h-[180px] w-[436.56px] border-2 border-black flex flex-col justify-around">
//             <div className="font-bold text-3xl h-[178px] w-[179px] bg-orange-200 rounded-tl-[90px]"></div>
//             <p className="text-slate-400">
//               We build readymade websites, mobile applications, and elaborate
//               online business services.
//             </p>
//           </div>
//           <div></div>
//         </div>
//       </div> */}
//       {/* how can we help ends here */}
//       {/* great since start here */}
//       <div className="overflow-hidden md:h-[440px] md:w-[90vw] px-5 m-auto mt-6  flex justify-between flex-col items-center">
//         <div>
//           <img
//             src="./unsplash_bzqU01v-G54.png"
//             alt=""
//             className="md:h-[369.36px] md:w-[599.66px]"
//           />
//         </div>
//         <div className="md:w-[580.03px] md:h-[260.37px] flex flex-col justify-evenly">
//           <div className="font-bold md:text-4xl text-[15px] my-7">
//             Great Digital Product Agency <br /> since 2016
//           </div>
//           <div className="text-slate-500 text-[12px]">
//             Our Business Plan is a written document describing a company's core
//             business activites, Objectives, and how it plans to achieve its
//             goals. Our goal is to provide our client high quality Product with
//             modern idea accordingly their budgets and according thir
//             reuirements.
//           </div>
//         </div>
//       </div>
//       {/* great since ends here */}
//       {/* happy client starts here */}
//       <div className= "px-5 overflow-hidden md:h-[597px] md:w-[90vw] md:m-auto  md:mt-20 my-8 border-2 border-black flex justify-between flex-col">
//         <div className="flex flex-col items-center gap-3">
//           <div className="font-bold md:text-4xl text-[18px]">What our happy client say</div>
//           <p className="text-slate-500 text-[12px]">
//             Several selected clients, who already believe in our service.
//           </p>
//         </div>
//         <div className="flex md:flex-row flex-col ">
//           <div>
//             <img
//               src="./unsplash_MTZTGvDsHFY.png"
//               alt=""
//               className=" w-[404px] border-2 border-black my-3"
//             />
//           </div>
//           <div className="md:h-[185px] md:w-[421.27px] m-auto my-3">
//             <div className="font-bold md:text-2xl mb-3 text-[15px]">Matthew Paul</div>
//             <div className="text-slate-500 text-[12px]">
//               Perfect, very good job! Thank you for the amazing design and work.
//               Really impressed with the high quality and quick turnaround time.
//               Highly recommend.
//             </div>
//           </div>
//           <div>
//             <img src="./Group 71.png" alt="" className="my-5" />
//           </div>
//         </div>
//       </div>
//       {/* happy client starts here */}

//       {/* newsleter starts here */}
//       <div className="px-5 overflow-hidden md:w-[90vw] md:h-[366px] m-auto mt-6  bg-sky-100 rounded-[75px] flex flex-col justify-between">
//         <div className="flex flex-col md:m-auto md:ml-12 ml-8 mb-5" >
//           <p className="font-bold md:text-4xl text-[18px] md:leading-[60px] leading-9">
//             Subscribe Newsletter
//           </p>
//           <p className="text-slate-500 text-[12px] flex items-center ">
//             I will update good news and promotion service not spam
//           </p>
//         </div>
//         <div className="flex flex-col md:mr-12  ">
//           <div className=" bg-sky-300 h-[366px] relative flex justify-center items-center rounded-full ">
//             <input
//               type="text"
//               placeholder="Enter your Email-Address.."
//               className="border-2  placeholder:text-slate-500 placeholder:px-5 placeholder:text-[12px]
//                md:w-[571.86px] md:h-[80px] rounded-full h-1/6"
//             />
//             <button className=" absolute  md:right-[10px] right-[-5px] text-[10px]  bg-blue-600
//              text-white md:w-[250px] md:font-bold md:h-[64px]
//              rounded-full flex justify-center items-center h-[40px] w-[80px]">
//               Contact <br className="md:hidden"/> Now
//             </button>
//           </div>
//         </div>
//       </div>
//       {/* newsleter ends here */}
//       {/* footer starts here   */}
//       <div className=" overflow-hidden px-5 md:h-[348px] md:w-[90vw] m-auto mt-6  flex md:justify-between md:flex-row flex-col items-center">
//         <div className="flex flex-col gap-4  ">
//           <p className="font-bold text-xl">
//             <span className="font-bold text-2xl">A+</span> Studio
//           </p>
//           <p className="md:text-[14px] text-[12px] text-slate-500  md:h-[110px] w-[286.57px] ">
//             Leading digital agency with solid design and development expertise.
//             We build readymade websites, mobile applications, and elaborate
//             online business services.
//           </p>
//           <div className="flex gap-4">
//             <img src="./facebook.svg" alt="" />
//             <img src="./twitter.svg" alt="" />
//             <img src="./linkedin.svg" alt="" />
//           </div>
//         </div>
//         <div className="flex md:gap-32 gap-8 flex-wrap   md:h-[214px] mt-7 py-3">
//           <div className="flex flex-col md:gap-4  ">
//             <p className="font-bold text-[20px] ">What We Do</p>
//             <ul className="md:text-[14px]  text-slate-500 text-[12px]">
//               <p>Web Design</p>
//               <p>App Design</p>
//               <p>Social Media Managea</p>
//               <>Market Analysis Project</>
//             </ul>
//           </div>
//           <div className="flex flex-col md:gap-4 ">
//             <p className="font-bold text-[20px]">Company</p>
//             <ul className=" md:text-[14px] text-[12px] text-slate-500">
//               <li>About Us</li>
//               <li>Career</li>
//               <li>Become Investor</li>
//             </ul>
//           </div>
//           <div className="flex flex-col md:gap-4">
//             <p className="font-bold text-[20px]">Support</p>
//             <ul className=" md:text-[14px] text-[12px] text-slate-500">
//               <li>FAQ</li>
//               <li>Policy Design</li>
//               <li>Business</li>
//             </ul>
//           </div>
//           <div className="flex flex-col md:gap-4">
//             <p className="font-bold text-[20px] ">Contact</p>
//             <ul className=" md:text-[14px] text-[12px] text-slate-500">
//               <li>WhatsApp</li>
//               <li>Support 24</li>
//             </ul>
//           </div>
//         </div>
//       </div>
//       {/* footer starts here   */}
//     </div>
//   );
// };

// export default Main;

import React from "react";
const Main = () => {
  return (
    <div className=" h-screen  bg-white font-">
      {/* navbar starts here */}

      <nav className=" h-10 flex justify-between w-[90vw]  m-auto items-center mt-4">
        <div>
          <span className="font-bold text-xl">A+</span> Studio
        </div>
        <div className="flex justify-center items-center">
          <ul className="flex gap-10 ">
            <li>Home</li>
            <li>What We Do</li>
            <li>Service</li>
            <li>Project</li>
            <li>Blog</li>
            <li>Contact</li>
          </ul>
        </div>
      </nav>

      {/* navbar ends here */}

      {/* hero section of homepage starts here */}

      <div className="flex justify-end mt-6 ">
        <div className="h-[615px]  w-[95vw] flex justify-between ">
          <div className="flex items-center h-[615px]">
            <div className="relative h-[272.3px] w-[552.57px] flex flex-col justify-between">
              <div className="font-normal text-4xl ">
                A Digital Product Agency
              </div>
              <div className="text-[16px] text-slate-500">
                Leading digital agency with solid design and development
                expertise. We build readymade websites, mobile applications, and
                elaborate online business services.
              </div>
              <button className="z-10 text-[20px] font-normal bg-blue-600 text-white w-[250px] h-[70px] rounded-full flex justify-center items-center">
                Contact Now
              </button>
              <img
                src="./Dot Ornament.png"
                alt=""
                className="absolute -bottom-28 "
              />
            </div>
          </div>
          <div className="relative">
            <img src="./image 8.png" alt="" className=" relative z-10" />
            <img
              src="./Ellipse 85.png"
              alt=""
              className="absolute top-1 -left-16  "
            />
            {/* <div className="bg-stone-800 w-[128.44px] h-[130.49px] absolute top-0 -left-16 rounded-full "></div> */}

            {/* <div className="bg-[#DAE9FF] w-[128.44px] h-[130.49] a"></div> */}
            <img
              src="./Rectangle 23.png"
              alt=""
              className="absolute right-32 bottom-0"
            />
          </div>
        </div>
      </div>

      {/* hero section of homepage ends here */}

      {/* client section starts here */}

      <div className=" mt-8 w-[90vw] m-auto h-[124px] flex justify-between">
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
      {/* client section ends here */}

      {/* how can we help starts here */}
      <div className="flex justify-end my-20 relative">
        <div className="h-[867px] w-[95vw] flex ">
          <div className="flex items-center">
            <div className=" flex flex-col relative ">
              <div className="font-[400] leading-[60px] text-[40px] w-[394.66px] h-[120px] relative z-10">
                How can we help your Business ?
              </div>
              <p className="text-slate-400 relative w-[436.56px]">
                We build readymade websites, mobile applications, and elaborate
                online business services.
              </p>
              <img
                src="./Rectangle 25.png"
                alt=""
                className="absolute -top-16 "
              />
            </div>
          </div>
          <div>
            <div className=" h-full flex items-center ">
              <img
                src="./Rectangle 24.png"
                alt=""
                className="w-[1053.17px]
            absolute right-1 -z-20"
              />
              <img
                src="./Group 70.png"
                alt=""
                className="absolute bottom-20 left-28 -z-30"
              />
              <div className="flex gap-7 mx-14 relative">
              <div className="flex mt-14 flex-col gap-7 " >
                <div className="w-[309.81px] h-[379px] bg-[#FFFFFF] rounded-2xl flex justify-evenly flex-col items-center shadow-2xl shadow-[#0000000D;]">
                  <div className="bg-[#F1F7FF]  h-[121px] w-[121.71px] rounded-2xl flex justify-center items-center">
                    <img src="./box-search 1.svg" alt="" />
                  </div>
                  <p className="font-bold text-2xl text-center">
                    Business Idea <br></br>Planning
                  </p>
                  <p className="text-[16px] text-slate-500 text-center">
                    We present you a proposal and discuss niffty-gritty like
                  </p>
                </div> 
               
                <div className="w-[309.81px] h-[379px] bg-[#FFFFFF] rounded-2xl flex justify-evenly flex-col items-center shadow-lg shadow-[#0000000D;]">
                  <div className="bg-[#FFF2F8]  h-[121px] w-[121.71px] rounded-2xl flex justify-center items-center">
                    <img src="./code-1 1.svg" alt="" />
                  </div>
                  <p className="font-bold text-2xl text-center">
                    Development <br /> Website and App
                  </p>
                  <p className="text-[16px] text-slate-500 text-center">
                    Communication protocols apart <br/> from engagement models
                  </p>
                </div>
              </div>
              <div className="gap-7 flex flex-col mb-20">
              <div className=" w-[309.81px] h-[379px] bg-[#FFFFFF] rounded-2xl flex justify-evenly flex-col items-center shadow-lg shadow-[#0000000D;] ">
                  <div className="bg-[#FFF7E3]  h-[121px] w-[121.71px] rounded-2xl flex justify-center items-center">
                    <img src="./empty-wallet 1.svg" alt="" />
                  </div>
                  <p className="font-bold text-2xl text-center">
                    Financial Planning <br></br>System
                  </p>
                  <p className="text-[16px] text-slate-500 text-center">
                    Protocols apart from aengage <br/> models, pricing billing
                  </p>
                </div>
                <div className="w-[309.81px] h-[379px] bg-[#FFFFFF] rounded-2xl flex justify-evenly flex-col items-center shadow-lg shadow-[#0000000D;]">
                  <div className="bg-[#DEFFEE]  h-[121px] w-[121.71px] rounded-2xl flex justify-center items-center">
                    <img src="./chart-square 1.svg" alt="" />
                  </div>
                  <p className="font-bold text-2xl text-center">
                  Market Analysis<br/> Project
                  </p>
                  <p className="text-[16px] text-slate-500 text-center">
                  Protocols apart from aengage <br/> models, pricing billing </p>
                </div>
                </div>
                <img src="./Ellipse 87.png" alt="" className="absolute bottom-8 -right-14 -z-30" />
                </div>
                
            </div>
          </div>
        </div>
      </div>
      {/* how can we help ends here */}
      {/* great since start here */}
      <div className=" h-[440px] w-[90vw] m-auto mt-6  flex justify-between items-center">
        <div className="relative">
          <img
            src="./unsplash_bzqU01v-G54.png"
            alt=""
            className="h-[369.36px] w-[599.66px]"
          />
          <img src="./Group.png" alt="" className=" absolute top-36 right-64" />
          <img
            src="./Ellipse 86.png"
            alt=""
            className="absolute
          -right-16 top-72 -z-10"
          />
        </div>
        <div className="w-[580.03px] h-[260.37px] flex flex-col justify-evenly relative">
          <img
            src="./Rectangle 26.png"
            alt=""
            className="absolute -z-10 top-2 -left-5"
          />
          <div className="font-bold text-4xl">
            Great Digital Product Agency <br /> since 2016{" "}
          </div>
          <div className="text-slate-500 ">
            Our Business Plan is a written document describing a company's core
            business activites, Objectives, and how it plans to achieve its
            goals. Our goal is to provide our client high quality Product with
            modern idea accordingly their budgets and according thir
            reuirements.
          </div>
        </div>
      </div>
      {/* great since ends here */}
      {/* happy client starts here */}
      <div className="relative h-[597px] w-[90vw]  m-auto mt-20  flex justify-between flex-col">
        <div className="flex flex-col items-center gap-3">
          <div className="font-bold text-4xl">What our happy client say</div>
          <p className="text-slate-500">
            Several selected clients, who already believe in our service.
          </p>
        </div>
        <div className="flex ">
          <div className="relative">
            <img
              src="./Group 73.svg"
              alt=""
              className="absolute -z-10 right-1"
            />
            <img
              src="./Ellipse 94.png"
              alt=""
              className="absolute bottom-[60px] left-[8px] -z-10"
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
              Perfect, very good job! Thank you for the amazing design and work.
              Really impressed with the high quality and quick turnaround time.
              Highly recommend.
            </div>
          </div>
          <div className="relative">
            <img src="./Group 71.png" alt="" />
            <img
              src="./Ellipse 93.png"
              alt=""
              className="absolute -z-10 left-[20px] bottom-24 "
            />
          </div>
        </div>
      </div>
      {/* happy client starts here */}

      {/* newsleter starts here */}
      <div className="relative w-[90vw] h-[366px] m-auto mt-6  bg-sky-100 rounded-[75px] flex justify-between">
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
            className="absolute left-[-38px] bottom-[-40px] -z-40 "
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
              className=" absolute -top-6 -right-20 -z-10"
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
      {/* newsleter ends here */}
      {/* footer starts here   */}
      <div className="h-[348px] w-[90vw]  m-auto mt-6  flex justify-between items-center">
        <div className="flex flex-col gap-4 ">
          <p className="font-bold text-xl">
            <span className="font-bold text-2xl">A+</span> Studio
          </p>
          <p className="text-[14px] text-slate-500  h-[110px] w-[286.57px] ">
            Leading digital agency with solid design and development expertise.
            We build readymade websites, mobile applications, and elaborate
            online business services.
          </p>
          <div className="flex gap-4 relative">
            <img src="./facebook.svg" alt="" />
            <img src="./twitter.svg" alt="" />
            <img src="./linkedin.svg" alt="" />
      {/* <div className="bg-stone-800 h-20 w-20 absolute -z-10"></div> */}

          </div>
        </div>
        <div className="flex gap-24 h-[214px]">
          <div className="flex flex-col gap-4">
            <p className="font-bold text-[20px]  ">What We Do</p>
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
      </div>
      {/* footer ends here   */}
    </div>
  );
};

export default Main;
