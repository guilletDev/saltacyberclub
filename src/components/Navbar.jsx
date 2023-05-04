import { useState } from "react";

import { navLinks } from "../constants";
import NavbarLinks from "./NavbarLinks";
import NavIcons from "./NavIcons";
import {menu, close} from '../assets/images/index'

const Navbar = () => {
  const [toggle, setToggle] = useState(false);

  return (
    <nav className=" flex justify-between w-full sm:px-6 sm:py-0 pl-2 py-2 z-50 fixed drop-shadow-lg bg-opacity-20 backdrop-filter backdrop-blur-md  ">
      <div className="flex items-center  sm:mt-3">
        <a href="" className="font-Roboto text-white sm:text-xl text-lg ">
          <strong>SCC</strong>
        </a>
        <div className="flex justify-center flex-row sm:ml-8 sm:flex hidden ">
          {navLinks.map((li) => (
            <NavbarLinks key={li.id} {...li} />
          ))}
        </div>
      </div>
      <div className=" sm:ml-[550px] sm:flex hidden">
        <NavIcons />
      </div>
      

      {/*Nav Mobile */}

      <div
        className="sm:hidden flex flex-1 ml-72
       justify-center items-center w-full"
      >
        <img
          src={toggle ? close : menu}
          alt="menu"
          className="w-[28px] h-[28px] object-contain "
          onClick={() => setToggle((prev) => !prev)}
        />
      </div>

      <div
        className={`${toggle ? "flex" : "hidden"} 
      p-6  absolute top-7 right-5
      mx-8 my-2 min-w-[200px] rounded-lg sidebar bg-fuchsia-900 duration-200 `}
      >
        <ul
          className="list-none flex flex-col 
      justify-end items-center flex-1"
        >
          {navLinks.map((nav, index) => (
            <li
              key={nav.id}
              className={`font-Roboto cursor-pointer text-[16px]
           ${index === navLinks.length - 1 ? "mr-0" : "mb-4"} text-white`}
            >
              <a href=''>{nav.title}</a>
            </li>
          ))}
        </ul>
      </div>
    </nav>
  );
};

export default Navbar;
