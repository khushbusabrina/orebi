import React from 'react'

function Paragraph({className,text,title}) {
  return (
    <p className={`text-[#767676] font-dmSans text-base font-normal leading-[30px] ${className}`} title={title}>{text}</p>
  )
}

export default Paragraph