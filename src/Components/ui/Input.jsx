import React from 'react'

function Input({name,id,value,placeholder,className,type,onchange}) {
  return (
    <input className={`${className}`} type={type} name={name} placeholder={placeholder} id={id} value={value} onchange={onchange}/>
  )
}

export default Input