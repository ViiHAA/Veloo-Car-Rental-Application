import React, { useEffect } from 'react'
import { useNavigate, useParams } from 'react-router-dom'
import { assets } from '../assets/assets'
import { dummyCarData } from '../assets/assets';

const CarDetails = () => {

  const {id} = useParams()
  const navigate = useNavigate()
  const [car, setCar] = React.useState(null)

  useEffect(() => {
    const foundCar = dummyCarData.find(car => car._id === id)
    setCar(foundCar)
  }, [id])

  return car? (
    <div className='px-6 md:px-16 lg:px-24 xl:px-32 mt-16'>
      <button onClick={() => navigate(-1)} className='flex items-center gap-2 mb-6 text-gray-500 cursor-pointer' >
        <img src={assets.arrow_icon} alt='' className='rotate-180 opacity-65' />
        Back to all Cars
      </button>
    <div className='grid grid-cols-1 lg:grid-cols-3 gap-8 lg:gap-16'>
      {/*Left : Car Iamges and details*/}
      <div className='lg:col-span-2'>
          <img src={car.image} alt='' className='w-full h-auto md:max-h-100 object-cover
          rounded-xl mb-6 shadow-md'/>
          <div className='space-y-6'>
            <div>
              <h1 className='text-2xl font-semibold'>{car.brand} {car.model}</h1>
              <p className='text-gray-600'>{car.category} {car.year}</p>
            </div>
              <hr className='border-borderColor my-6'/>
              <div className='grid grid-cols-2 sm:grid-cols-4 gap-4'>
                {[
                  {icon : assets.users_icon, text : `${car.seating_capacity} Seats`},
                  {icon : assets.fuel_icon, text : car.fuel_type},
                  {icon : assets.car_icon, text : car.transmission},
                  {icon : assets.location_icon, text : car.location},
                ].map(({icon, text}) => (
                  <div key={text} className='flex flex-col items-center gap-2 bg-light rounded-lg p-4'>
                    <img src={icon} alt='' className='mb-2 h-6'/>
                    <p className='text-sm'>{text}</p>
                  </div>
                ))}
              </div>

              {/*Description*/}
              <div>
                <h1 className='text-xl font-medium mb-3'>Description</h1>
                <p className='text-gray-600'>{car.description}</p>
              </div>

              {/*features*/}
              <div>
                <h1 className='text-xl font-medium mb-3'>Features</h1>
              </div>
          </div>
      </div>
    </div>
    </div>
  ) : <p>Loading...</p>
}
export default CarDetails
