import React from 'react'

const Title = ({ title, subTitle ,align }) => {
  return (
    <div className={`flex flex-col items-center justify-center text-center ${align === 'left' && 'md:items-start md:text-left'}"}`}>
        <h1 className='text-3xl md:text-4xl font-semibold'>{title}</h1>
        <p className='text-sm md:text-base text-gray-500 mt-2'>{subTitle}</p>
    </div>
  )
}

export default Title
