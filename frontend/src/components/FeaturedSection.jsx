import React from 'react'
import Title from './Title'
import { assets } from '../assets/assets';
import {useNavigate} from 'react-router-dom'
import { dummyCarData } from '../assets/assets';
import CarCard from './CarCard';

const FeaturedSection = () => {

    const navigate = useNavigate();

  return (
    <div className='flex flex-col items-center py-24 px-6 md:px-16
    lg:px-24 x1:px-32'>
      
      <div>
        <Title title = "Featured Vehicles" subTitle="Discover our premium selection of vehicles for your next journey." />

        <div className='grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 mt-18'>
            {
                dummyCarData.slice(0,6).map((car) => (
                    <div key={car.id} >
                        <CarCard car={car} />
                    </div>
                ))
            }           
        </div>

         <button onClick={() => { navigate('/cars'); scrollTo(0,0) 
            }} 
            className="flex items-center justify-center gap-2 px-6 py-2 border
            border-borderColor cursor-pointer hover:bg-gray-50 rounded-md mt-18">
            View All Cars <img src={assets.arrow_icon} alt="arrow" />
            </button>
      </div>
    </div>
  )
}

export default FeaturedSection
