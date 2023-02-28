import { useState } from "react";
import wtmLogo from "../../assets/logos/wtm-algiers.png";
import navLinks from "./navLinks.json";
function Navbar() {
  const [active, setActive] = useState("Home");
  const [toggle, setToggle] = useState(false);

  return (
    <header className="bg-iwd-white top-0 w-screen z-20 fixed border-b-[1px] border-b-iwd-gray">
      <div className="container flex py-[38px] md:py-[2.5vw] justify-between align-center items-center">
        <img src={wtmLogo} alt="WTM Logo" className="w-[9rem]" />
        <ul className="list-none lg:flex hidden justify-center gap-x-10 items-center 2xl:gap-x-12">
          {navLinks.map((nav, index) => (
            <li
              key={index}
              className={`cursor-pointer text-[16px] ${
                active === nav.title ? "text-white" : "text-dimWhite"
              }`}
              onClick={() => setActive(nav.title)}
            >
              <div className="relative">
                <a
                  href={`${nav.redirect}`}
                  className="hover:text-iwd-green text-[15px] transform-all duration-500 2xl:text-[22px]"
                >
                  {nav.title}
                </a>
                <div
                  className={`h-[1px] w-[${
                    nav.title.length / 3
                  }px] absolute bottom-0 left-0 bg-iwd-dark`}
                ></div>
              </div>
            </li>
          ))}
        </ul>
        <div>
          <a
            href="https://tripetto.app/run/ZTAK3F5C4V"
            target="__blank"
            className="hidden lg:block bg-iwd-dark px-6 py-2 text-iwd-white rounded-full hover:text-bold transform-all duration-500 hover:bg-iwd-blue"
          >
            Register
          </a>
        </div>

        <div
          className="flex flex-col gap-2 cursor-pointer lg:hidden"
          onClick={() => setToggle(!toggle)}
        >
          <div className="h-[2px] w-9 bg-iwd-dark"></div>
          <div className="h-[2px] w-9 bg-iwd-dark"></div>
          <div className="h-[2px] w-9 bg-iwd-dark"></div>
        </div>
      </div>

      <div
        className={`${
          toggle ? "h-[60vh] pt-4" : "h-0"
        } transform-all duration-700 overflow-hidden`}
      >
        <ul className="flex flex-col items-center gap-12">
          {navLinks.map((navLink, idx) => (
            <a
              key={idx}
              href={navLink.redirect}
              onClick={() => setToggle(false)}
              className="text-lg"
            >
              {navLink.title}
            </a>
          ))}
        </ul>
      </div>
    </header>
  );
}

export default Navbar;
