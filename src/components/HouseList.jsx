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

  console.log(houses)
  return <section>
    <div className='container mx-auto'>
      <div className='grid md:grid-cols-2 lg:grid-cols-3'>
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
