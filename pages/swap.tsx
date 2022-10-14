import React from 'react'
import Link from 'next/link'
import Image from 'next/image'
import setting from "../public/setting.svg";
import Navbar from '../components/navbar/Navbar'

import  SelectComponent from "../components/swap/SelectComponent";
import  SelectBtnComponent from "../components/swap/SelectBtnComponent";




const Home = () => {
     return (
      <main>
        <Navbar/>
        <div className='border border-[#902784] rounded-3xl border-solid w-[90%] mt-4 lg:w-[60%] shadow-[0px 4px 35px rgba(82, 93, 107, 0.03)] my-8 px-5 py-8 lg:px-8 mx-auto filter drop-shadow-new backdrop-blur-new'>
          <div className='flex justify-between'>
            <div>
              <p className='text-[#782475] font-medium text-[20px] leading-[26px] mb-2'>Swap/Liquidty</p>
              <p className='text-[#9CA3AF] text-[16px] leading-[18px] font-medium '>Easy way to swap your tokens & provide Liquidity</p>
            </div>
            <Image src={setting} alt="Nahmii Logo" />
          </div>
          <div className='flex flex-col my-8 bg-[#F9FAFB] p-3 lg:p-8 border-[0.6px] border-[#EBE5EB] rounded-[12px] border-solid filter drop-shadow-new backdrop-blur-new'>
            <label className='mb-3 text-[#4B5563] text-[14px] leading-[18px] font-medium' htmlFor="">From</label>
            <div className='flex justify-between'>
            <input className='font-bold text-[#D1D5DB] text-[18px] leading-[23px] bg-[#F9FAFB] focus:outline-none w-full' type="number" name="from" id="from" placeholder='0.00'/>
            <SelectComponent />
            
            </div>
          </div>
          <p className='flex justify-center item-center'>Icon</p>
          <div className='flex flex-col my-8 bg-[#F9FAFB] p-3 lg:p-8 border-[0.6px] border-[#EBE5EB] rounded-[12px] border-solid filter drop-shadow-new backdrop-blur-new'>
            <label className='mb-3 text-[#4B5563] text-[14px] leading-[18px] font-medium' htmlFor="">To</label>
            <div className='flex justify-between'>
            <input className='font-bold text-[#D1D5DB] text-[18px] leading-[23px] bg-[#F9FAFB] focus:outline-none w-full' type="number" name="from" id="from" placeholder='0.00'/>
            <SelectBtnComponent />
            
            </div>
          </div>

          <button className="bg-gradient-to-r from-[#902784] to-[#68299A] rounded-lg text-[#ffffff] w-full h-[60px] font-medium text-[18px] leading-[23px] filter drop-shadow-new backdrop-blur-new">Approve</button>
        </div>
      </main>
     )
}

export default Home
