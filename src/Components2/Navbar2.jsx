import React, { useEffect, useRef, useState } from 'react'
import { BsList } from "react-icons/bs";
import { BsXSquare } from "react-icons/bs";
const Navbar2 = () => {


    const[nav,setnav]=useState(false)

const handlenav=()=>{
  setnav(!nav)


}

const menu=useRef(); 

useEffect(()=>{
const handle=(e)=>{
  if(!menu.current.contains(e.target)){
    setnav(false);
  }
}
document.addEventListener("mousedown",handle)
return ()=>{
document.removeEventListener("mousedown",handle)
}
})
  return (
  
    <>
        <nav className='flex justify-center sticky top-1 z-50'>
      {/* <Main/> */}

      <div className='flex justify-between w-[90vw] h-10 items-center mt-4' ref={menu}>
      <div>
            <a href={"#home"}><span className="font-bold text-xl"> A+</span> Studio</a>
            </div>
            <div className="flex justify-center items-center">
              <ul className=" lg:flex gap-10 hidden">
               <a href={"#home"} ><li>Home</li></a>  
              <a href={"#service"}><li>Service</li></a>  
              <a href={"#project"}><li>Project</li></a>  
              <a href={"#blog"}><li>Blog</li></a>  
              <a href={"#contact"}><li>Contact</li></a>  
              </ul>

               <div onClick={handlenav} className="lg:hidden 2x:hidden xl:hidden">

               {nav? <BsXSquare size={30}/> : <BsList size={30}/>}

               </div>

              <ul className={nav ? "lg:hidden 2x:hidden xl:hidden  flex  absolute left-0 w-[40%] ease-in-out duration-300 flex-col top-24  bg-black text-gray-200 text-2xl  border-2 border-black  ":"hidden" }>
               <a href={"#home"} ><li>Home</li></a>  
              <a href={"#service"}><li>Service</li></a>  
              <a href={"#project"}><li>Project</li></a>  
              <a href={"#blog"}><li>Blog</li></a>  
              <a href={"#contact"}><li>Contact</li></a>  
              </ul>
            {/* <div onClick={handlenav}   className="xl:hidden 2xl:hidden lg:hidden cursor-pointer">

                {!nav? <BsXSquare size={30}/> : <BsList size={30}/>}
                <div className={!nav ? "fixed flex items-center  justify-center gap-10 w-80 h-80  left-52 bg-red-700 font-bold text-2xl " :" fixed hidden"}>

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
  )
}

export default Navbar2