
import React, { useEffect } from 'react'
import './About.css'
import Header from '../Header/Header'
import { Footer } from '../Footer/Footer'
import Aos from 'aos'
import 'aos/dist/aos.css'
import Cards from '../Cards/Cards'

function About() {
  useEffect(() =>{
      Aos.init({duration: 2000})
     }, [])
    
  return (
   <div>
    <Header/>
     <section className='a-wrapper' id='about'>
     <div data-aos="fade-up" className="paddings innerWidth flexCenter a-container">
      <div className='flexColStart a-left'>
          <span className='primaryText'>About Creed's home</span>
          <span className='secondaryText'>Creed's home is a premium real estate company based in Lagos,<br/>  Nigeria .With over 5 years of experience, our team specializes in <br /> property development, management, valuation,<br /> and consultancy services.</span>

      </div>
      <div className="a-right">
           <div className="image-container">
            <img src="banner3.jpg" alt="" />
           </div>
        </div>
        
        
    
     </div>
     <Cards/>
    <Footer/>
     </section>
   </div>
  )
}

export default About