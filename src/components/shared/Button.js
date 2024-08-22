import React from 'react'

const Button = ({btnName, handleClick, type}) => {
  return (
    <button onClick={handleClick} className={`border rounded-full h-fit ${type === 'category'? "text-[#EF0D0D] border-[#EF0D0D]":"border-white"} py-[14px] text-lg px-5`}>{btnName}</button>
  )
}

export default Button