import { useState } from "react";

import wtmLogo from "../../assets/logos/wtm-algiers.png"; 
function Navbar(){ //set links here 
    let navLinks =[
        {title:"Home",id:"/"},
        {title:"About",id:"/"},
        {title:"Previous",id:"/"},
        {title:"Agenda",id:"/"},
        {title:"Mentors & Judges",id:"/"},
        {title:"Workshops",id:"/"},
        {title:"Sponsors",id:"/"},
      ];
      

      const [active, setActive] = useState("Home");
      const [toggle, setToggle] = useState(false);
    
      return (
        <div className="bg-iwd-white w-screen z-20 fixed">
  
        <div className="container flex py-6 justify-between align-center items-center">
         <img src={wtmLogo} alt="WTM Logo" className="w-[9rem]" />
   
   <ul className="list-none sm:flex hidden justify-center gap-x-8 items-center">
     {navLinks.map((nav, index) => (
       <li
         key={nav.id}
         className={`cursor-pointer text-[16px] ${
           active === nav.title ? "text-white" : "text-dimWhite"
         }`}
         onClick={() => setActive(nav.title)}
       >
         <a href={`#${nav.id}`}>{nav.title}</a>
         
       </li>
     ))}
     <button className="bg-iwd-dark px-4 py-1 text-iwd-white rounded-full">Register</button>
   </ul>

   <div className="sm:hidden flex flex-1 justify-end items-center">
    
<div className="flex flex-col gap-2">
<div className="h-[2px] w-9 bg-iwd-black"></div>  <div className="h-[2px] w-9 bg-iwd-black"></div>  
<div className="h-[2px] w-9 bg-iwd-black"></div>
   </div>
     
     <div
       className={`${
         !toggle ? "hidden" : "flex"
       } p-6 bg-black-gradient absolute top-20 right-0 mx-4 my-2 min-w-[140px] rounded-xl sidebar`}
     >


       <ul className="list-none flex justify-end items-start flex-1 flex-col">
         {navLinks.map((nav, index) => (
           <li
             key={nav.id}
             className={`cursor-pointer text-[16px] ${
               active === nav.title ? "text-white" : "text-dimWhite"
             } ${index === navLinks.length - 1 ? "mb-0" : "mb-4"}`}
             onClick={() => setActive(nav.title)}
           >
             <a href={`#${nav.id}`}>{nav.title}</a>
           </li>
         ))}
       </ul>
       </div>
     </div>
   </div>
   </div>
     )};

export default Navbar;