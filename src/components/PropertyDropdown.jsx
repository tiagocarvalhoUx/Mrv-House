import React, { useState, useEffect, useContext } from "react";
import { RiHome5Line, RiArrowDownLine, RiArrowUpLine } from "react-icons/ri";
import { Menu } from "@headlessui/react";
import { HouseContext } from "./HouseContext";

const PropertyDropdown = () => {
  const { property, setProperty, properties } = useContext(HouseContext);

  const [isOpen, setIsOpen] = useState(false);

  return (
    <Menu as="div" className="dropdown relative">
      <Menu.Button
        onClick={() => setIsOpen(!isOpen)}
        className="dropdown-btn w-full text-left"
      >
        <RiHome5Line className="dropdown-icon-primary" />
        <div className=" text-[16px]  text-white  font-medium text-center  ">
          {property}
        </div>
        <div className=" px-5 text-[16px] text-white font-bold     ">
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
        {properties.map((property, App) => {
          return (
            <Menu.Item
              onClick={() => setProperty(property)}
              className=" cursor-pointer hover:text-orange-500 transition"
              as="li"
              key={App}
            >
              {property}
            </Menu.Item>
          );
        })}
      </Menu.Items>
    </Menu>
  );
};

export default PropertyDropdown;
