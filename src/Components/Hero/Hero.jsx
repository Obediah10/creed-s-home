import React, { useEffect } from 'react'
import "./Hero.css"
import { HiLocationMarker } from 'react-icons/hi'
import CountUp from "react-countup"
import { motion } from 'framer-motion' 
import Aos from 'aos'
import 'aos/dist/aos.css'
import { Footer } from '../Footer/Footer'
import Value from '../Value/Value'
import Header from '../Header/Header'
import Companies from '../Companies/Companies'
const Hero = () => {

  useEffect(() =>{
    Aos.init({duration: 2000})

   }, [])

  return (
    <>
    <Header/>
    <div className="App">
      
      
       {/* <div className='white-gradient'/> */}
   <section className="hero-wrapper">
     <div className="paddings innerWidth flexCenter hero-container ">
       
      

          {/* left side */}
          <div className="flexColStart hero-left">
            <div className="hero-title">
              <div className="orange-circle"/>

              <motion.h1
              initial={{ y: "2rem", opacity: 0 }}
              animate={{ y: 0, opacity: 1 }}
              transition={{
                duration: 2,
                type: "ease-in",
              }}
              >Discover <br />
               Most Suitable <br />
                Property
              </motion.h1>
            </div>
             
            
            <div className="flexColStart hero-des">
              <span data-aos="fade-up" className='secondaryText'>Find a variety of properties that suit you very easily</span>
              <span data-aos="fade-up" className='secondaryText'>Forget all difficuties in finding a residence for you</span>
            </div>


            <div className="flexCenter search-bar">
            <HiLocationMarker color= "var{--blue}" size={25}/>
            <input type="text" />
            <button className='button'>Search</button>

            </div>

            <div className="flexCenter stats">
              <div className="flexColCenter stat">
                <span>
                  <CountUp start={8800} end={9000} duration={25}/>
                  <span>+</span>
                </span>
                <span className='secondaryText'>Premium Products</span>
              </div>

              <div className="flexColCenter stat">
                <span>
                  <CountUp start={1950} end={2000} duration={25}/>
                  <span>+</span>
                </span>
                <span className='secondaryText'> Happy Customers</span>
              </div>
              
              <div className="flexColCenter stat">
                <span>
                  <CountUp  end={28}/>
                  <span>+</span>
                </span>
                <span className='secondaryText'>  Awards </span>
              </div>
            </div>
         </div>

         {/* right side  */}
          <div className="flexCenter hero-right">
           <motion.div
            initial={{x: "7rem", opacity: 0}}
            animate={{x: 0, opacity: 1}}
            transition={{
              duration: 2,
              type: "spring",
 
            }}
           className="image-container">
    
              <img src="./banner2.jpg" alt="" />
           </motion.div>
         
          </div>

     </div> 
     <Companies/> 
       <Value/> 
      <Footer/> 
   </section>
   </div>
   </>
  )
}

export default Hero