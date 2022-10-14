import React from "react";
import Link from "next/link";
import Image from "next/image";
import logo from "../../assets/logo.svg";
import {
  HomeContainer,
} from "./Home.styles";
import { NavbarButton } from "../navbar/Navbar.style";

const Home = () => {
  return (
    <HomeContainer>
      <main>
        <div className="text-center">
          {/* <Image src={logo} alt="Nahmii Logo" /> */}
          <p className="text-center text-[20px] font-normal leading-[25px] uppercase mt-1 text-[#782475] w-[200px] lg:w-[308px] mx-auto mb-8">
            MarketPlace for protocol owned Liquidity
          </p>
        </div>
        <div className="flex justify-around text-center place-items-center items-center p-4 lg:p-6 mx-auto w-[90%] mt-4 lg:mt-6 lg:w-[80%] bg-gradient-to-b from-[#68299a] to-[#dc398c] rounded-lg filter drop-shadow-new backdrop-blur-new">
          <p className="text-center cursor-pointer text-[14px] font-bold leading-[21px] text-[#ffffff]">
            Bonds
          </p>
          <p className="text-center cursor-pointer text-[14px] font-bold leading-[21px] text-[#ffffff]">
            Payment Assets
          </p>
          <Link href="/market">
          <p className="text-center cursor-pointer text-[14px] font-bold leading-[21px] text-[#ffffff]">
            ROI
          </p>
          </Link>
          <p className="text-center cursor-pointer text-[14px] font-bold leading-[21px] text-[#ffffff]">
            TBV
          </p>
        </div>

        <div className=" text-center place-items-center items-center p-4 lg:p-8 mx-auto w-[90%] mt-8 lg:mt-6 lg:w-[80%] bg-gradient-to-b from-[#68299a] to-[#dc398c] rounded-lg filter drop-shadow-new backdrop-blur-new">
         <div className="flex flex-col lg:flex-row justify-around mt-6">
         <div className="my-3 p-3">
            <p className="text-center text-[16px] font-bold leading-[24px] text-[#ffffff]">
              Exchange Your LP
            </p>
            <p className="text-center text-[20px] font-normal capitalize leading-[25px] text-[#ffffff]">
              Exchange avalilable Lp tokens below market rate
            </p>
          </div>
          <div className="my-3 p-3">
            <p className="text-center text-[16px] font-bold leading-[24px] text-[#ffffff]">
              LInear Vesting
            </p>
            <p className="text-center text-[20px] font-normal capitalize leading-[25px] text-[#ffffff]">
              Receive bond any time withn the vesting period
            </p>
          </div>
          <div className="my-3 p-3">
            <p className="text-center text-[16px] font-bold leading-[24px] text-[#ffffff]">
              Market-rate Discount
            </p>
            <p className="text-center text-[20px] font-normal capitalize leading-[25px] text-[#ffffff]">
              Receive your desired bonds with a positive discounted rate.
            </p>
          </div>
         </div>

          <div className="text-center text-[16px] font-bold capitalize leading-[24px] text-[#ffffff] rounded-[10px] bg-[#6F2265] flex justify-center items-center place-items-center w-[50%] mt-6 p-3 mx-auto mb-3">
            Learn more
          </div>
        </div>
      </main>
    </HomeContainer>
  );
};

export default Home;
