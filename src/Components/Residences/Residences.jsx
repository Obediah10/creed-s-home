import React, { useEffect } from 'react'
import {Swiper, SwiperSlide, useSwiper} from "swiper/react"
import "swiper/css"
import './Residences.css'
import data from '../../utils/slider.json'
import { sliderSettings } from '../../utils/common'
import  Header  from '../Header/Header'
import { Footer } from '../Footer/Footer'
import Lands from '../Lands/Lands'
import Aos from 'aos'
import 'aos/dist/aos.css'

const Residences = () => {

 useEffect(() =>{
         Aos.init({duration: 2000})
     
        }, [])
 

  return (
   <section className="r-wrapper"  id='Residences'>
    <Header/>
    <div data-aos="fade-up"className="paddings innerWidth r-container">
       <div  className="r-head flexColStart">
         <span className='orangeText'>Best Choices</span>
         <span className='primaryText'>Popular Residencies</span>
       </div>
       <Swiper {...sliderSettings}>
           <SliderButtons/>
        {
          data.map((card,i)=> (
             <SwiperSlide key={i}>
               <div className="flexColStart r-card">
                  <img src={card.image} alt="home" />
                   
                   <span>
                   <span >&#8358;{}</span><span>{card.price}</span>
                   </span>
                   <span className='primaryText'>{card.name}</span>
                   <span className='secondaryText'>{card.detail}</span>
               </div>
             </SwiperSlide>
          
          ))
        }
       </Swiper>
    </div>
     <Lands/>
     <Footer/>
   </section>
  )
}

export default Residences

const SliderButtons = () => {
  const swiper = useSwiper();
  return (
    <div className="flexCenter r-buttons">
     <button onClick={()=> swiper.slidePrev()}>&lt;</button>
     <button onClick={()=> swiper.slideNext()}>&gt;</button>
    </div>
  )
}