import React, { useState, useEffect, useContext } from "react";
import { RiMapPinLine, RiArrowDownLine, RiArrowUpLine } from "react-icons/ri";
import { Menu } from "@headlessui/react";
import { HouseContext } from "./HouseContext";

const CountryDropdown = () => {
  const { country, setCountry, countries } = useContext(HouseContext);
  

  const [isOpen, setIsOpen] = useState(false);

  return (
    <Menu as="div" className="dropdown relative">
      <Menu.Button
        onClick={() => setIsOpen(!isOpen)}
        className="dropdown-btn w-full text-left"
      >
        <RiMapPinLine className="dropdown-icon-primary" />
        <div className="px-1 text-[16px] text-white  font-medium leading-tight whitespace-nowrap">
          {country}
        </div>
        <div className=" px-5 text-[16px] text-white font-bold gap-20">
          {" "}
          Selecione seu Lugar
        </div>

        {isOpen ? (
          
          <RiArrowUpLine className="dropdown-icon-secondary" />
        ) : (
          <RiArrowDownLine className="dropdown-icon-secondary" />
        )}
      </Menu.Button>

      <Menu.Items className="dropdown-menu">
        {countries.map((country, App) => {
          return (
            <Menu.Item
              onClick={() => setCountry(country)}
              className=" cursor-pointer hover:text-orange-500 transition"
              as="li"
              key={App}
            >
              {country}
            </Menu.Item>
          );
        })}
      </Menu.Items>
    </Menu>
  );
};

export default CountryDropdown;
