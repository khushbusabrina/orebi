import React from 'react'
import Container from '../common/Container'
import Img from '../ui/Img'
import logo from "../../assets/Logo.png"
import { Link, useLocation } from 'react-router'
import { menuData } from '../../dummyData/menuData'
function Navbar() {
  const pathname=useLocation()
  return (
    <header>
     <Container>
      <div className='flex justify-between align-center mt-8'>
        <Link to="/">
        <Img src={logo} alt='notfound'/>
        </Link>
       <ul className='flex gap-10 capitalize font-dmSans text-sm ' >
        {
         menuData.map((item,index)=>(
           <li key={index}>
            <Link  to={item.url} className={`${item.url===pathname.pathname ?'text-[#262626] font-bold':'font-normal text-[#767676]'}`}>
                {item.label}
            </Link>
           </li>
         ))
        }

       </ul>
       </div>
       
     </Container>

    </header>
  )
}

export default Navbar