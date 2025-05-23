import React, { useState, useEffect, createContext } from "react";
import { housesData } from "../data";

export const HouseContext = createContext();

const HouseContextProvider = ({ children }) => {
  const [houses, setHouses] = useState(housesData);
  const [country, setCountry] = useState("Localização ");
  const [countries, setCountries] = useState([]);
  const [property, setProperty] = useState("Tipo de propriedade ");
  const [properties, setProperties] = useState([]);
  const [price, setPrice] = useState("Faixa de preço ");
  const [loading, setLoading] = useState(false);

  //  return all countries
  useEffect(() => {
    const AllCountries = houses.map((house) => {
      return house.country;
    });
    // remove duplicates
    const uniqueCountries = ["Localização ", ... new Set(AllCountries)];
    
    

    //set countries state
    setCountries(uniqueCountries)
    
  },[]);


  //  return all properties
  useEffect(() => {
    const AllProperties = houses.map((house) => {
      return house.type;
    });
    // remove duplicates
    const uniqueProperties = [" Localização ", ... new Set(AllProperties)];
    
    
    //set Properties state
    setProperties(uniqueProperties)
    
  },[]);

  const handleClick = ()=> {
    // setLoading
    setLoading(true)
  
    // create a function that checks if the string includes (any)

    const isDefault = (str) => {
      return str.split (' ').includes('')
    }

    // get first value of price and parse it to number

    const minPrice= parseInt(price.split(' ')[0])
    // get second value of price which is the maximum price & parse it to number 

    const maxPrice = parseInt(price.split(' ') [2])

    const newHouses = housesData.filter((house) => {
    const housePrice = parseInt(house.price)
      
      // if all values are selected
      if (house.country === country && house.type === property && housePrice >= minPrice && housePrice <= maxPrice) {

        return house 
      }

      // if all values are default
      
      if (isDefault(country) && isDefault(property) && isDefault(price)) {
        return house
      }
      // if country is not default
      if (!isDefault(country) && isDefault(property) && isDefault(price)){
        return house.country === country;
      }

      // if property is not default 
      if (!isDefault(property) && isDefault(country) && isDefault(price)) {
        return house.type === property
      }

      // if price is default

      if (!isDefault(price) && isDefault(country) && isDefault(property)){
        if (housePrice >= minPrice && housePrice <= maxPrice) {
          return house
        }
      }

      //if country & property is not default 
      if (!isDefault(country) && !isDefault(property) && isDefault(price)){
        return house.country === country && house.type === property

      }
      // if country and  price is not default

     if (!isDefault(country) && isDefault(property) && !isDefault(price)){
      if (housePrice >= minPrice &&  housePrice <= maxPrice){
        return house.country === country;
      }
     }

     //  property and  price is not default

      if (isDefault(country) && !isDefault(property) && !isDefault(price)){
      if(housePrice >= minPrice && housePrice <= maxPrice){
        return house.type === property
      }
    }
    })

    setTimeout(()=> {
    return newHouses.length < 1 ? setHouses([]) : 
    setHouses(newHouses),
    setLoading(false)
   },1000)
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
