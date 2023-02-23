import { useState } from "react";

import wtmLogo from "../../assets/logos/wtm-algiers.png";
function Navbar() {
  //set links here
  let navLinks = [
    { title: "Home", id: "/" },
    { title: "About", id: "/" },
    { title: "Previous", id: "/" },
    { title: "Agenda", id: "/" },
    { title: "Mentors & Judges", id: "/" },
    { title: "Workshops", id: "/" },
    { title: "Sponsors", id: "/" },
  ];

  const [active, setActive] = useState("Home");
  const [toggle, setToggle] = useState(false);

  return (
    <div className="bg-iwd-white  drop-shadow top-0 w-screen z-20 fixed">
      <div className="container flex py-[38px] md:py-[2vw] justify-between align-center items-center">
        <img src={wtmLogo} alt="WTM Logo" className="w-[9rem]" />

        <ul className="list-none md:flex hidden justify-center gap-x-5 items-center">
          {navLinks.map((nav, index) => (
            <li
              key={nav.id}
              className={`cursor-pointer text-[16px] ${
                active === nav.title ? "text-white" : "text-dimWhite"
              }`}
              onClick={() => setActive(nav.title)}
            >
              <div className="relative">
                <a href={`#${nav.id}`}>{nav.title}</a>
                <div
                  className={`h-[1px] w-[${
                    nav.title.length / 3
                  }px] absolute bottom-0 left-0 bg-iwd-dark`}
                ></div>
              </div>
            </li>
          ))}
          <button className="bg-iwd-dark px-4 py-1 text-iwd-white rounded-full">
            Register
          </button>
        </ul>

        <div className="md:hidden flex flex-1 justify-end items-center">
          <div
            className="flex flex-col gap-2 "
            onClick={() => setToggle(!toggle)}
          >
            <div className="h-[2px] w-9 bg-iwd-dark"></div>
            <div className="h-[2px] w-9 bg-iwd-dark"></div>
            <div className="h-[2px] w-9 bg-iwd-dark"></div>
          </div>

          <div
            className={`${
              !toggle ? "hidden" : "flex"
            } p-6 bg-iwd-white absolute top-20 right-0 mx-4 my-2 min-w-[140px] h-[100vh]`}
          >
            <ul className="flex justify-start flex-1 flex-col">
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
  );
}

export default Navbar;
