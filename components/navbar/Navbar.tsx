import React, { useState } from "react";
import Link from "next/link";
import Image from "next/image";
import logo from '../../assets/logo.svg'
import {
  IoMdNotifications,
  IoMdSettings,
  IoIosArrowDown,
} from "react-icons/io";
import ConnectionButton from "../ConnectionButton";

const Navbar = () => {
  const [active, setActive] = useState(false);

  const handleClick = () => {
    setActive(!active);
  };
  return (
    <>
      <nav className="relative text-[#782475] font-semibold font-[poppins] text-[17px] flex items-center flex-wrap justify-between pt-[20px] pb-[10px] px-[20px]  md:p-[40px] ">
        {/* <ToastContainer /> */}
        <Link href="/">
          <div className="flex justify-start cursor-pointer items-center md:gap-[55px]">
            <Image src={logo} alt="Nahmii Logo" />
          </div>
        </Link>
        <button
          className=" inline-flex p-3 hover:bg-[#9E2F92] rounded lg:hidden text-[#782475;] ml-auto hover:text-white outline-none"
          onClick={handleClick}
        >
          <svg
            className="w-6 h-6"
            fill="none"
            stroke="currentColor"
            viewBox="0 0 24 24"
            xmlns="http://www.w3.org/2000/svg"
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              strokeWidth={2}
              d="M4 6h16M4 12h16M4 18h16"
            />
          </svg>
        </button>
        <div
          className={`${
            active ? "" : "hidden"
          } w-[90%] lg:flex lg:flex-grow lg:justify-between  lg:w-auto`}
        >
          <div className="flex lg:flex-row flex-col justify-evenly lg-pl-[5px] mt-3 lg:mt-0  lg:items-center lg:ml-[20px] lg:gap-[59px] text-base">
            <span className="font-medium  mb-2 lg:mb-0">
              <Link className="text-sm mr-4 cursor-pointer" href="/market">Markets</Link>
            </span>
            
            <Link className="text-sm ml-4 cursor-pointer mt-3" href="/swap">Partners</Link>
          </div>
          <div className="flex flex-col lg:flex-row lg:items-center justify-start lg:pl-[5px] my-0 lg:justify-end lg:gap-[21px]">
            <Link href="/swap">
            <span className="text-sm mt-3 cursor-pointer lg:mt-[0] mr-4">Apply Now</span>
            </Link>
            <Link href="/bond">
            <span className="text-sm my-3 mr-4 cursor-pointer text-[#000000]">Learn</span>
            </Link>
            <button className="bg-gradient-to-r from-[#902784] via-[#68299A]  to-[#68299A] rounded-lg text-[#ffffff] w-[222px] h-[43px] filter drop-shadow-new backdrop-blur-new">CONNECT WALLET</button>
            {/* <ConnectionButton/> */}
          </div>
        </div>
      </nav>
    </>
  );
};

export default Navbar;

// background: linear-gradient(90deg, #902784 27.93%, #68299A 68.66%, #68299A 71.62%);
// border-radius: 10px;
