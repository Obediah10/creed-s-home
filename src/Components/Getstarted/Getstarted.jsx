import React from 'react'
import './Getstarted.css'
import Header from '../Header/Header'
import { Footer } from '../Footer/Footer'
export const Getstarted = () => {
  return (
    <section className="g-wrapper" id='Getstarted'>
      <Header/>
      <div className="paddings innerWidth g-container">
        <div className="flexColCenter inner-container">
          <span className='primaryText'>Get Started With Creed's Home</span>
          <span className='secondaryText'>Subscribe and find super attractive price qoutes from us.
            <br/>
            Find your residence soon
          </span>
          <button className="button">
            <a href='mailto:pascalobed10@gmail.com'>Get Started</a>
          </button>
        </div>
      </div>
      <Footer/>
    </section>
  )
}
