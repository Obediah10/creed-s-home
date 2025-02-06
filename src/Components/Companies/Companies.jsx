import React from 'react'
import './Companies.css'
import { eventWrapper } from '@testing-library/user-event/dist/utils'
function Companies() {
  return (
    <section className='c-wrapper' >
      <div className="paddings innerWidth flexCenter c-container">
        <img src="./comlogo1.jpg" alt="" />
        <img src="./comlogo4.jpg" alt="" />
        <img src="./comlogo6.jpg" alt="" />
        <img src="./comlogo7.jpg" alt="" />

      </div>
       
    </section>
  )
}

export default Companies ; 