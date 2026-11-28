import React from 'react'
import Container from './Container'
import Primarybtn from '../ui/Primarybtn'
import { Link } from 'react-router'

function CustomError() {
  return (
    <Container>
        <div className='pt-20 pb-[140px]'>
         <Link to="/">
         <Primarybtn>Back to Home</Primarybtn>
         </Link>
        </div>
    </Container>
 
  )
}

export default CustomError