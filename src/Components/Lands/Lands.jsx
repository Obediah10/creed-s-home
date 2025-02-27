import React from 'react'
import {Swiper, SwiperSlide, useSwiper} from "swiper/react"
import "swiper/css"
import './Lands.css'
import data from '../../utils/slider2.json'
import { sliderSettings } from '../../utils/common'
function Lands() {
  return (
    <section className="r-wrapper"  id='Lands'>
  
    <div className="paddings innerWidth r-container">
       <div className="r-head flexColStart">
         <span className='orangeText'>Best Choices</span>
         <span className='primaryText'>Popular Lands</span>
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
   </section>
  )
}

export default Lands

const SliderButtons = () => {
  const swiper = useSwiper();
  return (
    <div className="flexCenter r-buttons">
     <button onClick={()=> swiper.slidePrev()}>&lt;</button>
     <button onClick={()=> swiper.slideNext()}>&gt;</button>
    </div>
  )
}
  


