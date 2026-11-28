import React from 'react'

function Primarybtn({ children, className, onClick }) {
  return (
    <button
      className={`text-sm font-bold text-[#FFFFFF] bg-[#2B2B2B] px-[55px] py-[16px] ${className || ''}`}
      onClick={onClick}
    >
      {children}
    </button>
  )
}

export default Primarybtn