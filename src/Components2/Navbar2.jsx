import React, { useEffect, useRef, useState } from "react";
import { BsList } from "react-icons/bs";
import { BsXSquare } from "react-icons/bs";

const Navbar2 = (props) => {
  const [nav, setnav] = useState(false);

  // var [toggle, settoggle] = React.useState(0.5);

  // function makeBlur1() {
  //   if (toggle == 1) {
  //     settoggle(3);
  //   } else {
  //     settoggle(4);
  //   }
  //   document.body.style.opacity = toggle;
  // }
  const handlenav = () => {
    setnav(!nav);
    // makeBlur1();
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

  return (
    <>
      <h1>{props.children}</h1>
      <nav className="flex justify-center sticky top-0   bg-white/30 backdrop-blur-md	  z-50">
        {/* <Main/> */}

        <div
          className="flex justify-between w-[90vw] h-10 items-center mt-4"
          ref={menu}
        >
          <div>
            <a href={"#home"}>
              <span className="font-bold text-xl"> A+</span> Studio
            </a>
          </div>
          <div className="flex justify-center items-center">
            <ul className=" lg:flex gap-10 hidden ">
              <a href={"#home"}>
                <li>Home</li>
              </a>
              <a href={"#service"}>
                <li>Service</li>
              </a>
              <a href={"#project"}>
                <li>Project</li>
              </a>
              <a href={"#blog"}>
                <li>Blog</li>
              </a>
              <a href={"#contact"}>
                <li>Contact</li>
              </a>
            </ul>

            <div
              onClick={handlenav}
              className="lg:hidden 2x:hidden xl:hidden  block cursor-pointer  "
            >
              {nav ? <BsXSquare size={30} /> : <BsList size={30} />}
            </div>

            {/* <ul
              id="transition"
              className={
                
                `transition-all scroll-smooth duration-700
                 ${ nav
                  ?
                   `lg:hidden  2x:hidden xl:hidden  backdrop-blur-md	   flex justify-around fixed left-0  font-bold  w-full  h-[53vh] flex-col top-14 bg-white/30 text-black text-xl  border-black  `
                  
                  : `top-[-100%] transition-all duration-200 `}`
              }
            > */}
            <ul
              className={
                nav
                  ? "lg:hidden    2x:hidden xl:hidden transition-all scroll-smooth ease-in-out duration-700  bg-white/30 backdrop-blur-md	   flex justify-around fixed left-0  font-bold  w-full  h-[53vh] flex-col top-14  text-black text-xl  border-black "
                  : " top-[-100%]   fixed "
              }
            >
              <a href={"#home"} className="ml-9 ">
                <li>Home</li>
              </a>
              <a href={"#service"} className="ml-9   ">
                <li>Service</li>
              </a>
              <a href={"#project"} className="ml-9 ">
                <li>Project</li>
              </a>
              <a href={"#blog"} className="ml-9 ">
                {" "}
                <li>Blog</li>
              </a>
              <a href={"#contact"} className="ml-9 ">
                <li>Contact</li>
              </a>
            </ul>
            {/* <div onClick={handlenav}   className="xl:hidden 2xl:hidden lg:hidden cursor-pointer">

                {!nav? <BsXSquare size={30}/> : <BsList size={30}/>}
                <div className={!nav ? "fixed flex items-center  justify-center gap-10 w-90 h-90  left-52 bg-red-700 font-bold text-2xl " :" fixed hidden"}>

                <ul>
               <a href={"#home"} ><li>Home</li></a>  
              <a href={"#service"}><li>Service</li></a>  
              <a href={"#project"}><li>Project</li></a>  
              <a href={"#blog"}><li>Blog</li></a>  
              <a href={"#contact"}><li>Contact</li></a>  
              </ul>
                </div>
                </div> */}
          </div>
        </div>
      </nav>
    </>
  );
};

export default Navbar2;
