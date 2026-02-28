import React from 'react'
import { assets } from '../assets/assets';
import { useNavigate } from 'react-router-dom';

const CarCard = ({car}) => {

    const currency = import.meta.env.VITE_CURRENCY
    const navigate = useNavigate()

  return (
    <div onClick={() => navigate(`/car-details/${car._id}`)} className='group rounded-xl overflow-hidden shadow-lg hover:-translate-y-1 cursor-pointer 
    bg-white transition-all duration-300 cursor-pointer'>
    <div className='group rounded-xl overflow-hidden shadow-lg hover:-translate-y-1 cursor-pointer 
    bg-white transition-all duration-300 cursor-pointer'>
      
      <div className='relative h-48 overflow-hidden'>
        <img src={car.image} alt={car.name} className='w-full h-full transition-transform
         duration-300 object-cover group-hover:scale-110' />
         
         {car.isAvailable && <p className='absolute bottom-2 left-2 bg-green-500 text-white
          px-2 py-1 rounded-full'>Available Now</p>}

          <div className='absolute bottom-2 right-2 bg-blue-500
           text-white px-2 py-1 rounded-full'>
           <span className='font-semibold'>{currency}{car.pricePerDay}</span>
            <span className='text-sm text-white/80'> / day</span> 
          </div>

      </div>

      <div className='p-4 sm:p-5'>
        <div className='flex justify-between items-start mb-2'>
          <div>
            <h3 className='text-lg font-semibold text-gray-800'>{car.brand} {car.model}</h3>
            <p className='text-muted-foreground text-sm'>{car.category} . {car.year} </p>
          </div>
        </div>
        <div className='mt-4 grid grid-cols02 gap-y-2 text-gray-600'>
              <div className='flex items-center text-sm text-muted-foreground'>
                <img src={assets.users_icon} alt='' className='h-4 mr-2'/>
                <span>{car.seating_capacity} Seats</span>
              </div>
              <div className='flex items-center text-sm text-muted-foreground'>
                <img src={assets.fuel_icon} alt='' className='h-4 mr-2'/>
                <span>{car.fuel_type}</span>
              </div>
              <div className='flex items-center text-sm text-muted-foreground'>
                <img src={assets.car_icon} alt='' className='h-4 mr-2'/>
                <span>{car.transmission}</span>
              </div>
              <div className='flex items-center text-sm text-muted-foreground'>
                <img src={assets.location_icon} alt='' className='h-4 mr-2'/>
                <span>{car.location}</span>
              </div>
        </div>
      </div>
    </div>
    </div>
  )
}

export default CarCard
