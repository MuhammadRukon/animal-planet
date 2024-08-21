import React from 'react'

const Button = ({btnName, handleClick}) => {
  return (
    <button onClick={handleClick} className='border rounded-full h-fit border-white py-[14px] text-lg px-5'>{btnName}</button>
  )
}

export default Button