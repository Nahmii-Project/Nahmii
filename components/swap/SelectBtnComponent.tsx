
import React, { useState } from 'react';

const SelectBtnComponent = () => {
     return (
      <main>

        <select
        className="appearance-none w-[130px] lg:w-[170px] text-center py-2 lg:py-4 px-2 lg:px-3  bg-gradient-to-r from-[#902784] via-[#68299A]  to-[#68299A] rounded-lg text-[#ffffff] focus:outline-none border-[0px]"  name="" 
        id="">
        <option selected>Select a token</option>
        <option value="USDT">USDT</option>
        <option value="CAD">CAD</option>
        <option value="FRM">FRM</option>
        <option value="DEI">DEI</option>
        </select>
      </main>
     )
}

export default SelectBtnComponent
