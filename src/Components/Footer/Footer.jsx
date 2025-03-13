import React from 'react'
import './Footer.css'
export const Footer = () => {
  return (
    <section className="f-wrapper">
      <div className="paddings innerWidth  f-container">

        {/* left side */}
        <div className=" f-left">
          <h1 className='lg'>cr<span className='orangeText'>EE</span>d's home</h1>
          <span className=''>Creed's home is a premium real <br/>estate company based in Lagos,<br/> Nigeria. With over 5 years <br/>of experience, our team specializes<br/> in property development, management,<br/> valuation, and consultancy services.</span>

        </div>
        {/* right side */}
        <div className=" f-right">
          <h1 className='lg'>Information</h1>
          <p className=''>1 Adetayo-Shode, Surulere, Lagos.</p>

          
        </div>
        <div className='f-form'>
          <h1 className='lg'>Get started with Creed's Home</h1>
          <span>Subscribe and find super attractive price qoutes from us.</span>
          <form action="">
            <div className="f-group">
              <label htmlFor="name"></label>
              <input type="text" id="name" name="name" placeholder='Name' required/>
            </div>
            <div className="f-group">
              <label htmlFor="email"></label>
              <input type="email" id="email" name="email" placeholder='E-mail' required/>
            </div>
            <div className="f-group">
              <label htmlFor="phone"></label>
              <input type="tel" id="phone" name="phone" placeholder='Phone' required/>
            </div>
            <button type="submit">Subscribe</button>

          </form>

        </div>
      </div>
    </section>
  )
}
