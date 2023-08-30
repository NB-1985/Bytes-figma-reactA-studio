import React from "react";
const Main = () => {
  return (
    <div className=" h-screen  bg-white font-">
      {/* navbar starts here */}

      <nav className=" h-10 flex justify-between w-[90vw] m-auto items-center mt-4">
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

      <div className="flex justify-end mt-6">
        <div className="h-[615px]  w-[95vw] flex justify-between">
          <div className="h-[272.3px] w-[552.57px]  m-auto mx-0 flex flex-col justify-between">
            <div className="font-normal text-4xl ">
              A Digital Product Agency
            </div>
            <div className="text-[16px] text-slate-500">
              Leading digital agency with solid design and development
              expertise. We build readymade websites, mobile applications, and
              elaborate online business services.
            </div>
            <button className="text-[20px] font-normal bg-blue-600 text-white w-[250px] h-[70px] rounded-full flex justify-center items-center">
              Contact Now
            </button>
          </div>
          {/* <img src="../Dot Ornament.png" alt="" /> */}
          <div>
            <img src="./image 8.png" alt="" />
          </div>
        </div>
      </div>

      {/* hero section of homepage ends here */}

      {/* client section starts here */}

      <div className="mt-8 w-[90vw] m-auto h-[124px] flex justify-between">
        <div className="flex flex-col justify-center gap-3">
          <div className="font-bold text-4xl">Our Client</div>
          <p className="w-[354px] text-slate-400">
            Several selected clients, who already believe in our service.
          </p>
        </div>

        <div className="flex gap-16 items-center justify-center ">
          <img src="./Google Logo.svg" alt="" />
          <img src="./airbnb Logo.svg" alt="" />
          <img src="./Uber Eats Logo.svg" alt="" />
          <img src="./Amazon Logo.svg" alt="" className="mt-5" />
        </div>
      </div>
      {/* client section ends here */}

      {/* how can we help starts here */}
      <div className="flex justify-end mt-6">
        <div className="h-[867px] w-[95vw] border-2 border-black ">
          <div className="h-[180px] w-[436.56px] border-2 border-black flex flex-col justify-around">
            <div className="font-bold text-3xl h-[178px] w-[179px] bg-orange-200 rounded-tl-[90px]"></div>
            <p className="text-slate-400">
              We build readymade websites, mobile applications, and elaborate
              online business services.
            </p>
          </div>
          <div></div>
        </div>
      </div>
      {/* how can we help ends here */}
      {/* great since start here */}
      <div className="h-[440px] w-[90vw] m-auto mt-6  flex justify-between items-center">
        <div>
          <img
            src="./unsplash_bzqU01v-G54.png"
            alt=""
            className="h-[369.36px] w-[599.66px]"
          />
        </div>
        <div className="w-[580.03px] h-[260.37px] flex flex-col justify-evenly">
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
      <div className="h-[597px] w-[90vw] m-auto mt-20 border-2 border-black flex justify-between flex-col">
        <div className="flex flex-col items-center gap-3">
          <div className="font-bold text-4xl">What our happy client say</div>
          <p className="text-slate-500">
            Several selected clients, who already believe in our service.
          </p>
        </div>
        <div className="flex ">
          <div>
            <img
              src="./unsplash_MTZTGvDsHFY.png"
              alt=""
              className=" w-[404px] border-2 border-black "
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
          <div>
            <img src="./Group 71.png" alt="" />
          </div>
        </div>
      </div>
      {/* happy client starts here */}

      {/* newsleter starts here */}
      <div className="w-[90vw] h-[366px] m-auto mt-6  bg-sky-100 rounded-[75px] flex justify-between">
        <div className="flex flex-col m-auto ml-12">
          <p className="font-bold text-4xl leading-[60px]">
            Subscribe Newsletter
          </p>
          <p className="text-slate-500">
            I will update good news and promotion service not spam
          </p>
        </div>
        <div className="flex flex-col mr-12 ">
          <div className=" bg-sky-300 h-[366px] relative flex justify-center items-center rounded-full ">
          <input
            type="text"
            placeholder="Enter your Email-Address.."
            className="border-2 placeholder:text-slate-500 placeholder:px-5 w-[571.86px] h-[80px] rounded-full"
          />
          <button className=" absolute right-[10px] text-[16px]  bg-blue-600 text-white w-[250px] font-bold h-[64px] rounded-full flex justify-center items-center">
            Contact Now
          </button>
          </div>
        </div>
      </div>
      {/* newsleter ends here */}
      {/* footer starts here   */}
      <div className="h-[348px] w-[90vw] m-auto mt-6  flex justify-between items-center">
        <div className="flex flex-col gap-4 ">
          <p className="font-bold text-xl">
            <span className="font-bold text-2xl">A+</span> Studio
          </p>
          <p className="text-[14px] text-slate-500  h-[110px] w-[286.57px] ">
            Leading digital agency with solid design and development expertise.
            We build readymade websites, mobile applications, and elaborate
            online business services.
          </p>
          <div className="flex gap-4">
            <img src="./facebook.svg" alt="" />
            <img src="./twitter.svg" alt="" />
            <img src="./linkedin.svg" alt="" />
          </div>
        </div>
        <div className="flex gap-32 h-[214px]">
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
      {/* footer starts here   */}
    </div>
  );
};

export default Main;
