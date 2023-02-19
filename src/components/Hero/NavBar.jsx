
import {FaTimes, FaBars } from  "react-icons/fa"
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
        <nav className="w-full flex py-6 justify-between items-center navbar">
          <img src={wtmLogo} alt="WTM Logo" className="w-[165px] h-[32px] ml-10" />
    
          <ul className="list-none sm:flex hidden justify-end items-center flex-1 mr-10">
            {navLinks.map((nav, index) => (
              <li
                key={nav.id}
                className={`cursor-pointer text-[16px] ${
                  active === nav.title ? "text-white" : "text-dimWhite"
                } ${index === navLinks.length - 1 ? "mr-0" : "mr-10"}`}
                onClick={() => setActive(nav.title)}
              >
                <a href={`#${nav.id}`}>{nav.title}</a>
              </li>
            ))}
            <button className="btn btn-black bg-color-black ml-10"> Register</button>
          </ul>
    
          <div className="sm:hidden flex flex-1 justify-end items-center">
           
    <FaBars className="w-[16px] h-[24px] object-contain mr-10"
              onClick={() => setToggle(!toggle)}></FaBars>
            
            <div
              className={`${
                !toggle ? "hidden" : "flex"
              } p-6 bg-black-gradient absolute top-20 right-0 mx-4 my-2 min-w-[140px] rounded-xl sidebar`}
            >

            <nav>
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
              </nav>
            </div>
          </div>
        </nav>
      );
    };

export default Navbar;