
import React from 'react'
import './Cards.css'

export default function Cards() {
  return (
   <section className="c-wrapper">
    <div className="paddings innerWidth flexCenter c-container">
    
          <div className="c-body">
            <h2 className='primaryText'>Our Vision</h2>
            <p className='secondaryText'>Creed's Home aims to be the biggest real estate construction company in Africa, guided by the grace of God. We aspire to achieve this by providing excellent real estate services.</p>
          </div>

          <div className="c-body">
            <h2 className='primaryText'>Our Mission</h2>
            <p className='secondaryText'>To actualize dream houses that may have seemed impossible for our clients by transforming virgin land into modern living communities for comfortable, stylish, and secure living experiences.</p>
          </div>

          <div className="c-body">
            <h2 className='primaryText'>Our Experience</h2>
            <p className='secondaryText'>The Creed's Home team has been in the real estate industry for over about 5 years and counting, handling property development, management, valuation, and consultancy services in Nigeria</p>

          </div>
  
       </div>
   </section>

  )
}
