
import React, { useState } from 'react';
import Select,  { components } from 'react-select';
// import  IconToken1 from "../../public/Subtract.svg";

const options = [
  { value: 'CHR', label: 'CHR', icon: "Subtract.svg" },

  { value: 'USDT', label: 'USDT', icon: "Subtract.svg" },

  { value: 'BUSD', label: 'BUSD', icon: "Subtract.svg" },

  { value: 'ETH', label: 'ETH', icon: "Subtract.svg" }
]

// @ts-ignore
const { Option } = components;
const IconOption = props => (
  <Option {...props}>
    <img
      src={require('../../public/' + props.data.icon)}
      style={{ width: 36 }}
      alt={props.data.label}
    />
    {props.data.label}
  </Option>
);

const SelectComponent = () => {
     return (
      <main>
            {/* < Select
              className="appearance-none w-full py-1 px-2 bg-[#F9FAFB] focus:outline-none text-black"  
              options={ options }
              
              
            /> */}

        <Select
            className="appearance-none w-full py-1 px-2 bg-[#F9FAFB] focus:outline-none border-[0px]" 
            defaultValue={ options [0] }
            // placeholder={ options [0] }
            options={ options }
            /*styles={ selectCustomStyles }*/
            /*onChange={ changeSelectHandler }*/
            components={ { Option: IconOption } }
        />
      </main>
     )
}

export default SelectComponent
