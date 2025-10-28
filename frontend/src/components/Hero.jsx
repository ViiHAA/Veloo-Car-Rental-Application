import React, { useState } from 'react'
import { assets, cityList } from '../assets/assets'

const Hero = () => {

    const [pickupLocation, setPickupLocation] = useState('')

  return (
    <div className='h-screen flex flex-col items-center justify-center gap-14 bg-light text-center'>
        <h1 className='text-3xl md:text-4xl font-semibold'>Go Places, Go <span className='text-primary'>
            Veloo</span>.<span className='text-primary'>.</span>.</h1>

        <form className='flex flex-col md:flex-row items-start md:items-center justify-between
        p-6 rounded-lg md:rounded-full w-full max-w-80 md:max-w-200 bg-white shadow-[0px_8px_20px_rgba(0,0,0,0.1)]'>
            
            <div className='flex flex-col md:flex-row items-start
             md:items-center gap-10 min-md:ml-8'>
                <div className='flex flex-col items-start gap-2'>
                    <select required value={pickupLocation} onChange={(e)=>setPickupLocation(e.target.value)}>
                        
                        <option value="">Pickup Location</option>
                        {cityList.map((city, index) => (
                            <option key={index} value={city}>{city}</option>))}
                    </select>
                    <p className='px-1 text-sm text-gray-500'>{pickupLocation ? pickupLocation : 'Select your pickup location'}</p>
                </div>
            </div>
                <div className='flex flex-col items-start gap-2'>
                   <label htmlFor="pickup-date">Pickup Date</label>
                   <input type="date" id="pickup-date" min={new Date().toISOString().split("T")[0]}
                   className='text-sm text-gray-500' required/>
                </div>
                <div className='flex flex-col items-start gap-2'>
                   <label htmlFor="return-date">Return Date</label>
                   <input type="date" id="return-date" required className='text-sm text-gray-500'/> 
                </div>
                <button className='flex items-center justify-center gap-2 px-9 py-3 max-sm:mt-4 bg-primary hover:bg-accent text-white hover:text-black rounded-full cursor-pointer group'>
                    <img src={assets.search_icon} alt="search" className='brightness-300 group-hover:brightness-0'/>
                    Search
                </button>
        </form>

        <img src={assets.main_car} alt="car" className='max-h-74'/>

    </div>
  )
}

export default Hero
