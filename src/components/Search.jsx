import React, { useContext } from 'react';
import PropertyDropdown from './PropertyDropdown';
import PriceRangeDropdown from './PriceRangeDropdown';
import {RiSearch2Line} from "react-icons/ri"
import CountryDropdown from "./CountryDropdown"
import { HouseContext } from './HouseContext';


const Search = () => {
const {handleClick} = useContext(HouseContext)
 return (

    <div className='px-[30px] mt-5 py-6 max-w-[1500px] max-auto flex flex-col lg:flex-row justify-between gap-4 lg:gap-x-3 relative lg:-top-4 lg:shadow-1 bg-orange-300  lg:backdrop-blur rounded-xl'>
      <CountryDropdown/>
      <PropertyDropdown/>
      <PriceRangeDropdown/>
      <button onClick={()=> handleClick()} className='bg-orange-400 hover:bg-orange-200 transition w-full rounded-lg lg:max-w-[110px] h-6 flex justify-center items-center text-white text-lg mt-4' >
        <RiSearch2Line/>
      </button>
    </div>
  )
};

export default Search;
