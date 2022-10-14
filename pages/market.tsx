import React from "react";
import Link from "next/link";
import Image from "next/image";
import logo1 from "../public/icon1.svg";
import logo2 from "../public/icon2.svg";
import logo3 from "../public/icon3.svg";
import logo4 from "../public/icon4.svg";
import logo5 from "../public/icon5.svg";
import logo6 from "../public/coin.svg";
import Navbar from "../components/navbar/Navbar";

const Market = () => {
  return (
    <main>
      <Navbar />
      <div className="bg-[#902784] rounded-[15px] mt-4 w-[90%] lg:w-[80%] shadow-[0px 4px 35px rgba(82, 93, 107, 0.03)] mt-10 mb-8 px-[2px] py-8 lg:px-8 mx-auto ">
        <div>
          <p className="text-[#ffffff] font-bold text-[21px] leading-[32px]  text-center my-2">
            Total Liquidity Bonded
          </p>
          <p className="text-[#ffffff] font-semibold text-[14px] leading-[21px] text-center my-2">
            $5,245,30
          </p>
        </div>

        <div className="">
          <table className="border-collapse w-[98%] mx-auto text-center">
            <tr>
              <th className=" text-[#ffffff] font-semibold text-[14px] leading-[21px] text-center  px-[2px] py-1 lg:px-8 lg:py-4"></th>
              <th className=" text-[#ffffff] font-semibold text-[14px] leading-[21px] text-center  px-[2px] py-1 lg:px-8 lg:py-4">
                Payout Asset
              </th>
              <th className="text-[#ffffff] font-semibold text-[14px] leading-[21px] text-center px-[2px] py-1 lg:px-8 lg:py-4">
                Contact
              </th>
              <th className="text-[#ffffff] font-semibold text-[14px] leading-[21px] text-center  px-[2px] py-1 lg:px-8 lg:py-4">
                Country
              </th>

              <th className=" text-[#ffffff] font-semibold text-[14px] leading-[21px] text-center  px-[2px] py-1 lg:px-8 lg:py-4"></th>
            </tr>
            <tr className="my-4">
              <td className="flex w-full justify-left text-center items-center">
                <Image src={logo1} alt="Nahmii Logo" layout="fixed" />
                <span className="ml-2 text-[#ffffff] font-medium tracking-[0.8] text-[12px] leading-[18px] lg:text-[14px] lg:leading-[21px] text-center">
                  Pendle-Eth
                </span>
              </td>
              <td className="ml-2 text-[#ffffff] font-medium tracking-[0.8] text-[12px] leading-[18px] lg:text-[14px] lg:leading-[21px] text-center">
                $3.560M
              </td>
              <td className="ml-2 text-[#ffffff] font-medium tracking-[0.8] text-[12px] leading-[18px] lg:text-[14px] lg:leading-[21px] text-center">
                {" "}
                9.6%
              </td>
              <td className="ml-2 text-[#ffffff] font-medium tracking-[0.8] text-[12px] leading-[18px] lg:text-[14px] lg:leading-[21px] text-center">
                $65.20M
              </td>
              <td className="border border-white text-[#ffffff]  border-solid opacity-[0.6] font-bold text-[12px] leading-[18px] lg:text-[14px] lg:leading-[21px] rounded-[5px] text-center my-4">
                <Link href="/bond">Bond</Link>
              </td>
            </tr>
            <tr className="my-4">
              <td className="flex w-full justify-left text-center items-center">
                <Image src={logo2} alt="Nahmii Logo" layout="fixed" />
                <span className="ml-2 text-[#ffffff] font-medium tracking-[0.8] text-[12px] leading-[18px] lg:text-[14px] lg:leading-[21px] text-center">
                  Bitcoin
                </span>
              </td>
              <td className="ml-2 text-[#ffffff] font-medium tracking-[0.8] text-[12px] leading-[18px] lg:text-[14px] lg:leading-[21px] text-center">
                $3.560M
              </td>
              <td className="ml-2 text-[#ffffff] font-medium tracking-[0.8] text-[12px] leading-[18px] lg:text-[14px] lg:leading-[21px] text-center">
                {" "}
                9.6%
              </td>
              <td className="ml-2 text-[#ffffff] font-medium tracking-[0.8] text-[12px] leading-[18px] lg:text-[14px] lg:leading-[21px]text-center">
                $65.20M
              </td>
              <td className="border border-white text-[#ffffff]  border-solid opacity-[0.6] font-bold text-[12px] leading-[18px] lg:text-[14px] lg:leading-[21px] rounded-[5px] text-center my-4">
                <Link href="/bond">Bond</Link>
              </td>
            </tr>
            <tr className="my-4">
              <td className="flex w-full justify-left text-center items-center">
                <Image src={logo3} alt="Nahmii Logo" layout="fixed" />
                <span className="ml-2 text-[#ffffff] font-medium tracking-[0.8] text-[12px] leading-[18px] lg:text-[14px] lg:leading-[21px] text-center">
                  Bitcoin
                </span>
              </td>
              <td className="ml-2 text-[#ffffff] font-medium tracking-[0.8] text-[12px] leading-[18px] lg:text-[14px] lg:leading-[21px] text-center">
                $3.560M
              </td>
              <td className="ml-2 text-[#ffffff] font-medium tracking-[0.8] text-[12px] leading-[18px] lg:text-[14px] lg:leading-[21px] text-center">
                {" "}
                9.6%
              </td>
              <td className="ml-2 text-[#ffffff] font-medium tracking-[0.8] text-[12px] leading-[18px] lg:text-[14px] lg:leading-[21px] text-center">
                $65.20M
              </td>
              <td className="border border-white text-[#ffffff]  border-solid opacity-[0.6] font-bold text-[12px] leading-[18px] lg:text-[14px] lg:leading-[21px] rounded-[5px] text-center my-4">
                <Link href="/bond">Bond</Link>
              </td>
            </tr>
            <tr className="my-4">
              <td className="flex w-full justify-left text-center items-center">
                <Image src={logo4} alt="Nahmii Logo" layout="fixed" />
                <span className="ml-2 text-[#ffffff] font-medium tracking-[0.8] text-[12px] leading-[18px] lg:text-[14px] lg:leading-[21px] text-center">
                  Sol
                </span>
              </td>
              <td className="ml-2 text-[#ffffff] font-medium tracking-[0.8] text-[12px] leading-[18px] lg:text-[14px] lg:leading-[21px] text-center">
                $3.560M
              </td>
              <td className="ml-2 text-[#ffffff] font-medium tracking-[0.8] text-[12px] leading-[18px] lg:text-[14px] lg:leading-[21px] text-center">
                {" "}
                9.6%
              </td>
              <td className="ml-2 text-[#ffffff] font-medium tracking-[0.8] text-[12px] leading-[18px] lg:text-[14px] lg:leading-[21px] text-center">
                $65.20M
              </td>
              <td className="border border-white text-[#ffffff]  border-solid opacity-[0.6] font-bold text-[12px] leading-[18px] lg:text-[14px] lg:leading-[21px] rounded-[5px] text-center my-4">
                <Link href="/bond">Bond</Link>
              </td>
            </tr>
            <tr className="my-4">
              <td className="flex w-full justify-left text-center items-center">
                <Image src={logo5} alt="Nahmii Logo" layout="fixed" />
                <span className="ml-2 text-[#ffffff] font-medium tracking-[0.8] text-[12px] leading-[18px] lg:text-[14px] lg:leading-[21px] text-center">
                  Bitcoin
                </span>
              </td>
              <td className="ml-2 text-[#ffffff] font-medium tracking-[0.8] text-[12px] leading-[18px] lg:text-[14px] lg:leading-[21px] text-center">
                $3.560M
              </td>
              <td className="ml-2 text-[#ffffff] font-medium tracking-[0.8] text-[12px] leading-[18px] lg:text-[14px] lg:leading-[21px] text-center">
                {" "}
                9.6%
              </td>
              <td className="ml-2 text-[#ffffff] font-medium tracking-[0.8] text-[12px] leading-[18px] lg:text-[14px] lg:leading-[21px] text-center">
                $65.20M
              </td>
              <td className="border border-white text-[#ffffff]  border-solid opacity-[0.6] font-bold text-[12px] leading-[18px] lg:text-[14px] lg:leading-[21px] rounded-[5px] text-center my-4">
                <Link href="/bond">Bond</Link>
              </td>
            </tr>
            <tr className="my-4">
              <td className="flex w-full justify-left text-center items-center">
                <Image src={logo6} alt="Nahmii Logo" layout="fixed" />
                <span className="ml-2 text-[#ffffff] font-medium tracking-[0.8] text-[12px] leading-[18px] lg:text-[14px] lg:leading-[21px] text-center">
                  XRU
                </span>
              </td>
              <td className="ml-2 text-[#ffffff] font-medium tracking-[0.8] text-[12px] leading-[18px] lg:text-[14px] lg:leading-[21px] text-center">
                $3.560M
              </td>
              <td className="ml-2 text-[#ffffff] font-medium tracking-[0.8] text-[12px] leading-[18px] lg:text-[14px] lg:leading-[21px] text-center">
                {" "}
                9.6%
              </td>
              <td className="ml-2 text-[#ffffff] font-medium tracking-[0.8] text-[12px] leading-[18px] lg:text-[14px] lg:leading-[21px] text-center">
                $65.20M
              </td>
              <td className="border border-white text-[#ffffff]  border-solid opacity-[0.6] font-bold text-[12px] leading-[18px] lg:text-[14px] lg:leading-[21px] rounded-[5px] text-center my-4">
                <Link href="/bond">Bond</Link>
              </td>
            </tr>
          </table>
        </div>
      </div>
    </main>
  );
};

export default Market;
