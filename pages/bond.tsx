import React from "react";
import Link from "next/link";
import Image from "next/image";
import clock from "../public/clock.svg";
import coin from "../public/coin.svg";
import Navbar from "../components/navbar/Navbar";

const Bond = () => {
  return (
    <main>
      <Navbar />
      <div className="bg-[#902784] rounded-[15px] mt-4 w-[90%] lg:w-[60%] shadow-[0px 4px 35px rgba(82, 93, 107, 0.03)] my-8 px-5 py-8 lg:px-8 mx-auto ">
        <div>
          <p className="text-[#ffffff] font-semibold text-[21px] leading-[32px] text-center my-4">
            Weth Bond
          </p>
        </div>
        <div className="flex justify-between">
          <div>
            <p className="text-[#ffffff] font-normal text-[21px] leading-[32px] text-center my-2">
              {" "}
              Bond Price
            </p>
            <p className="text-[#00A3DE] font-semibold text-[14px] leading-[21px] text-center my-4 opacity-[0.8]">
              {" "}
              $3.560M
            </p>
          </div>
          <div>
            <p className="text-[#ffffff] font-normal text-[21px] leading-[32px] text-center my-2">
              {" "}
              Market Price
            </p>
            <p className="text-[#00A3DE] font-semibold text-[14px] leading-[21px] text-center my-4 opacity-[0.8]">
              $3.560M
            </p>
          </div>
        </div>
        <div className="flex justify-between my-8">
          <div className="text-center">
            <Image src={coin} alt="Nahmii Logo" />
            <p className="text-[#ffffff] font-normal text-[21px] leading-[32px] text-center my-2">
              {" "}
              You Give
            </p>
          </div>
          <div className="text-center">
            <Image src={clock} alt="Nahmii Logo" />
            <p className="text-[#ffffff] font-normal text-[21px] leading-[32px] text-center my-2">
              {" "}
              Vested For
            </p>
          </div>
          <div className="text-center">
            <p className="text-[#00A3DE] font-semibold text-[14px] leading-[21px] text-center my-4 opacity-[0.8]">
              20%
            </p>
            <p className="text-[#ffffff] font-normal text-[21px] leading-[32px] text-center my-2">
              {" "}
              You Get
            </p>
          </div>
        </div>

        <div>
          <button className="border border-[#DB00FF] border-solid w-full p-3 bg-[#902784] text-white">
            Get Weth
          </button>
        </div>

        <div className="mt-6">
          <div className="flex justify-between my-2">
            <p className="text-[#ffffff] font-semibold text-[21px] leading-[32px] text-center my-2">
              {" "}
              Your Balance{" "}
            </p>
            <p className="text-[#ffffff] font-semibold text-[21px] leading-[32px] text-center my-2">
              {" "}
              0.0wETH{" "}
            </p>
          </div>
          <div className="flex justify-between my-2">
            <p className="text-[#ffffff] font-semibold text-[21px] leading-[32px] text-center my-2">
              {" "}
              You Will Get{" "}
            </p>
            <p className="text-[#ffffff] font-semibold text-[21px] leading-[32px] text-center my-2">
              {" "}
              0 IQ{" "}
            </p>
          </div>
          <div className="flex justify-between my-2">
            <p className="text-[#ffffff] font-semibold text-[21px] leading-[32px] text-center my-2">
              {" "}
              Max{" "}
            </p>
            <p className="text-[#ffffff] font-semibold text-[21px] leading-[32px] text-center my-2">
              {" "}
              3.3IQ{" "}
            </p>
          </div>
          <div className="flex justify-between my-2">
            <p className="text-[#ffffff] font-semibold text-[21px] leading-[32px] text-center my-2">
              {" "}
              Vesting Period{" "}
            </p>
            <p className="text-[#ffffff] font-semibold text-[21px] leading-[32px] text-center my-2">
              {" "}
              5days{" "}
            </p>
          </div>
          <div className="flex justify-between my-2">
            <p className="text-[#ffffff] font-semibold text-[21px] leading-[32px] text-center my-2">
              {" "}Bond Contract{" "}
            </p>
            <p className="text-[#ffffff] font-semibold text-[21px] leading-[32px] text-center my-2">
              {" "}
              View{" "}
            </p>
          </div>
        </div>
      </div>
    </main>
  );
};

export default Bond;
