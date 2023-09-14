import React, { useEffect, useRef, useState } from "react";
import { BsList } from "react-icons/bs";
import { BsXSquare } from "react-icons/bs";

const Navbar2 = () => {
  const [nav, setnav] = useState(false);
  const [stick, setstick] = useState(false);
  const handlenav = () => {
    setnav(!nav);
  };

  const menu = useRef();

  useEffect(() => {
    const handle = (e) => {
      if (!menu.current.contains(e.target)) {
        setnav(false);
      }
    };
    document.addEventListener("mousedown", handle);
    return () => {
      document.removeEventListener("mousedown", handle);
    };
  });

  function positionsticky() {
    if (window.scrollY >= 40) {
      setstick(true);
    } else {
      setstick(false);
    }
  }
  window.addEventListener("scroll", positionsticky);

  return (
    <>
      <div
        className={
          stick
            ? "sticky top-[-40px] pt-[40px] z-50 transition-all ease-in duration-300"
            : " relative"
        } 
      >
        <nav className=" flex justify-center   bg-white/30 pt-[42px] backdrop-blur-md ">
          {/* Navbar container */}
          <div
            className="flex justify-between w-[90vw]  h-[34px] items-center  relative"
            ref={menu}
          >
            {/* left Navbar */}

            <div>
              <a href={"#home"}>
                <span className="font-bold text-xl"> A+</span> Studio
              </a>
            </div>
            {/* right navbar */}
            {/* lg container (Web view) */}
            <div className="flex justify-center items-center">
              <ul className=" lg:flex gap-10 hidden ">
                <a className="hover:text-rose-600 " href={"#home"}>
                  <li>Home</li>
                </a>
                <a className="hover:text-rose-600" href={"#service"}>
                  <li>Service</li>
                </a>
                <a className="hover:text-rose-600" href={"#project"}>
                  <li>Project</li>
                </a>
                <a className="hover:text-rose-600" href={"#blog"}>
                  <li>Blog</li>
                </a>
                <a className="hover:text-rose-600" href={"#contact"}>
                  <li>Contact</li>
                </a>
              </ul>

              {/* Responsive view */}
              <div
                onClick={handlenav}
                className="lg:hidden xl:hidden block cursor-pointer  absolute top-0 right-0 z-10"
              >
                {nav ? <BsXSquare size={30} /> : <BsList size={30} />}
              </div>
              <div className="w-full  absolute left-0 top-0  lg:hidden">
                <ul
                  className={`transition-all ease-in-out duration-700 xl:hidden lg:hidden relative
              ${
                nav
                  ? " top-8  bg-white/30 backdrop-blur-md  h-[80vh] flex flex-col justify-around "
                  : "-top-[217px]"
              }`}
                >
                  <a className="hover:text-rose-600 " href={"#home"}>
                    <li>Home</li>
                  </a>
                  <a className="hover:text-rose-600  " href={"#service"}>
                    <li>Service</li>
                  </a>
                  <a className="hover:text-rose-600 " href={"#project"}>
                    <li>Project</li>
                  </a>
                  <a className="hover:text-rose-600 " href={"#blog"}>
                    <li>Blog</li>
                  </a>
                  <a className="hover:text-rose-600 " href={"#contact"}>
                    <li>Contact</li>
                  </a>
                  <ul className="flex gap-8 ">
                    <a href="https://www.facebook.com">
                      <img src="./facebook.svg" alt="" />
                    </a>
                    <a href="https://twitter.com">
                      <img src="./twitter.svg" alt="" />
                    </a>
                    <a href="https://www.linkedin.com">
                      <img src="./linkedin.svg" alt="" />
                    </a>
                  </ul>
                </ul>
              </div>
            </div>
          </div>
        </nav>
      </div>
    </>
  );
};

export default Navbar2;
