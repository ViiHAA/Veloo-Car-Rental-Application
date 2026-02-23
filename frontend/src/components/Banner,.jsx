import React from 'react'
import { assets } from '../assets/assets';

const Banner = () => {
  return (
    <div className='flex flex-col md:flex-row md:items-start items-center justify-between px-4 md:px-8
    px-8 md:px-16 min-md:pl-14 pt-10 bg-gradient-to-r from-[#001AD6] to-gray-900 
    max-w-6xl mx-3 md:mx-auto rounded-2xl overflow-hidden'>

        <div className='text-white'>
            <h2 className='text-3xl font-medium'>Do Your Own a Luxury Car?</h2>
            <p className='mt-2'>Monetize your car and earn extra income with <span className='text-accent'>
            Veloo</span>...</p>
            <p className='max-w-130'>We help you make the most of your vehicle by offering a seamless platform to list and rent your car.</p>
            
            <button className='px-6 py-2 text-sm bg-white text-lime-600 font-semibold rounded-lg hover:bg-slate transition-all cursor-pointer text-sm mt-6 flex items-center gap-2'>
                List your own Car
            </button>
        </div>
        <img src={assets.banner_car_image} alt="Banner Car" className='max-h-45 mt-10' />
    </div>
  )
}

export default Banner
