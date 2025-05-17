import React, { useState, useEffect, createContext } from "react";
import { housesData } from "../data";

export const HouseContext = createContext();

const HouseContextProvider = ({ children }) => {
  const [houses, setHouses] = useState(housesData);
  const [country, setCountry] = useState("Localização ");
  const [countries, setCountries] = useState([]);
  const [property, setProperty] = useState("Tipo de propriedade ");
  const [properties, setProperties] = useState([]);
  const [price, setPrice] = useState("Faixa de preço");
  const [loading, setLoading] = useState(false);

  //  return all countries
  useEffect(() => {
    const AllCountries = houses.map((house) => {
      return house.country;
    });
    // remove duplicates
    const uniqueCountries = [" Localização", ... new Set(AllCountries)];
    
    

    //set countries state
    setCountries(uniqueCountries)
    
  },[]);


  //  return all properties
  useEffect(() => {
    const AllProperties = houses.map((house) => {
      return house.type;
    });
    // remove duplicates
    const uniqueProperties = [" Localização", ... new Set(AllProperties)];
    
    
    //set Properties state
    setProperties(uniqueProperties)
    
  },[]);

  const handleClick = ()=> {
    console.log ("cliquei")
  }
  
  return (
    <HouseContext.Provider
      value={{
        country,
        setCountry,
        countries,
        property,
        setProperty,
        properties,
        price,
        setPrice,
        houses,
        loading,
        handleClick,
      }}
    >
      {children}
    </HouseContext.Provider>
  );
};

export default HouseContextProvider;
