import React from 'react'

function Container({className,children}) {
  return (
<div className={`max-w-[1604px] mx-auto ${className}`}>
    {children}
</div>
  )
}

export default Container