import React, { useState, useEffect, useContext } from "react";
import { RiWallet3Line, RiArrowDownLine, RiArrowUpLine } from "react-icons/ri";
import { Menu } from "@headlessui/react";
import { HouseContext } from "./HouseContext";

const PriceRangeDropdown = () => {
  const { price, setPrice } = useContext(HouseContext);

  const [isOpen, setIsOpen] = useState(false);

  const prices = [
    {
      value: "Faixa de Preço"
    },
    {
      value: "100000 - 130000"
    },
    {
      value: "130000 - 160000"
    },
    {
      value: "160000 - 190000"
    },
    {
      value: "190000 - 220000"
    },
    {
      value: "10000 - 30000"
    },
    {
      value: "30000 - 40000"
    },
    
  ]

  return (
    <Menu as="div" className="dropdown relative">
      <Menu.Button
        onClick={() => setIsOpen(!isOpen)}
        className="dropdown-btn w-full text-left"
      >
        <RiWallet3Line className="dropdown-icon-primary" />
        <div className=" text-[15px]  text-white  font-bold leading-tight text-center   ">
          {price}
        </div>
        <div className=" px-5 text-[15px] text-white font-bold leading-tight text-center     ">
          {" "}
          Escolha a faixa de preço
        </div>

        {isOpen ? (
          <RiArrowUpLine className="dropdown-icon-secondary" />
        ) : (
          <RiArrowDownLine className="dropdown-icon-secondary" />
        )}
      </Menu.Button>

      <Menu.Items className="dropdown-menu">
        {prices.map((price, App) => {
          return (
            <Menu.Item
              onClick={() => setPrice(price.value)}
              className=" cursor-pointer hover:text-orange-500 transition"
              as="li"
              key={App}
            >
              {price.value}
            </Menu.Item>
          );
        })}
      </Menu.Items>
    </Menu>
  );
};

export default PriceRangeDropdown;
