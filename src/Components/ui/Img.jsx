import React from 'react'

function Img({className, src, alt,onClick}) {
  return (
   <img src={src} alt={alt} className={className} onClick={onClick} />
  )
}

export default Img