import React,{ useEffect } from 'react'
import './Companies.css'
import { eventWrapper } from '@testing-library/user-event/dist/utils'
import Aos from 'aos'
import 'aos/dist/aos.css'
function Companies() {
   useEffect(() =>{
      Aos.init({duration: 2000})
     }, [])
    
  return (
    <section data-aos="fade-up" className='c-wrapper' >
      <div className="paddings innerWidth flexCenter c-container">
        <img src="./comlogo1.jpg" alt="" />
        <img src="./dan.jpg" alt="" />
        <img src="./comlogo6.jpg" alt="" />
        <img src="./comlogo7.jpg" alt="" />

      </div>
       
    </section>
  )
}

export default Companies ; 