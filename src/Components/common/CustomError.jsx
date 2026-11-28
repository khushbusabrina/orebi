import React from 'react'
import Container from './Container'
import Primarybtn from '../ui/Primarybtn'
import { Link } from 'react-router'
import { useNavigate } from "react-router";
import Paragraph from '../ui/Paragraph';
import Input from '../ui/Input';
import { FaSearch } from "react-icons/fa";



function CustomError() {
  let navigate = useNavigate();
  const handelRedirect=()=>{
    navigate("/") 

  }
  return (
    <Container>
        <div className='pt-20 pb-[140px]'>
         <span className='text-[#262626] font-bold text-[200px] font-dmSans'>404</span>
         <Paragraph className={"mb-12.5 max-w-[644px]"} text={"The page you were looking for couldn't be found. The page could be removed or you misspelled the word while searching for it. Maybe try a search?"}/>
         <div className='border border-[#F0F0F0] p-5 mt-12.5 mb-15 max-w-[683px] relative'>
           <Input className='outline-0 w-[88%]' type='text' placeholder="Search Here"/>
           <FaSearch  className='absolute bottom-[50%] right-[24px] translate-y-1/2 text-[20px]'/>

         </div>
         <Primarybtn text={"Back to Home"} onClick={handelRedirect}/>
         
        </div>
    </Container>
 
  )
}

export default CustomError