import React, {useContext} from 'react';

//import context
import { HouseContext } from './HouseContext';

//import components
import House from './House';

// import Link
import { Link } from 'react-router-dom';

//import icons
import { ImSpinner2 } from "react-icons/im"
 
const HouseList = () => {
  const {houses, loading} = useContext (HouseContext)

  // if loading is true
  if (loading) {
    return (<ImSpinner2 className='mx-auto animate-spin text-orange-500 text-4xl mt-[200px]'/>

    )
  }
  if(houses.length < 1){
    return <div className='text-center text-3xl text-gray-400 mt-48'> Desculpe, nada encontrado </div>
  }

  
  return <section>
    <div className='container mx-auto'>
      <div className='grid md:grid-cols-2 lg:grid-cols-3 gap-4 lg:gap-14'>
        {houses.map((house, App)=>{
          return (
            <Link to={`/property/${house.id}`} key={App}>
              <House house={house}/>
            </Link>
          )
        })}
      </div>

    </div>
  </section>;
};

export default HouseList;
