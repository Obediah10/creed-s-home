import React from 'react'
import './Footer.css'
export const Footer = () => {
  return (
    <section className="f-wrapper">
      <div className="paddings innerWidth flexCenter f-container">

        {/* left side */}
        <div className="flexColStart f-left">
          <h1 className='lg'>cr<span className='orangeText'>EE</span>d's home</h1>
          <span className="">
          Our vision is to make all people <br />
          the best place to live for them.
          </span>
        </div>
        {/* right side */}
        <div className="flexColStart f-right">
          <span className='lg'>Information</span>
          <span className=''>1 Adetayo-Shode, Surulere, Lagos.</span>

          <div className="flexCenter f-menu">
            <span>Property</span>
            <span>Services</span>
            <span>Product</span>
            <span>About Us</span>
          </div>
        </div>
      </div>
    </section>
  )
}
