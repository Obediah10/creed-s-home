import React, { useEffect} from 'react'
import './Contacts.css'
import {MdCall} from 'react-icons/md'
import {BsFillChatDotsFill} from 'react-icons/bs'
import { HiChatBubbleBottomCenter } from 'react-icons/hi2'
import Header from '../Header/Header'
import { Footer } from '../Footer/Footer'
import Aos from 'aos'
import 'aos/dist/aos.css'
function Contacts() {
  useEffect(() =>{
    Aos.init({duration: 2000})
   }, [])
  
  return (
    <div>
      <Header />
   <section className="c-wrapper" id='Contacts'>
     <div className="paddings innerWidth flexCenter c-container">
       {/* left side */}
        <div data-aos="fade-up" className="flexColStart c-left">
          <span className='orangeText'>0ur Contacts</span>
          <span className='primaryText'>Easy to Contact us</span>
          <span className='secondaryText'> We always ready to help by providijng the best services for you.<br/> We
          beleive a good place to live can make your life better</span>

  <div className="flexColStart contactModes">
   {/* first row */}
   <div data-aos="fade-up" className="flexStart row">
     <div className="flexColCenter mode">
       <div className="flexStart">
         <div className="flexCenter icon">
            <MdCall size={25} />
         </div>
          <div className="flexColStart detail">
            <span className='primaryText'>Call</span>
            <span className='secondaryText'><a href='tel:08170791155'>08170791155</a></span>
          </div>
       </div>
       <div className="flexCenter button">Call Now</div>
     </div>

     {/* second mode */}
     <div className="flexColCenter mode">
       <div className="flexStart">
         <div className="flexCenter icon">
            <BsFillChatDotsFill size={25} />
         </div>
          <div className="flexColStart detail">
            <span className='primaryText'>Chat</span>
            <span className='secondaryText'>08170791155</span>
          </div>
       </div>
       <div className="flexCenter button"> <a href='HTTPS://wa.me/08170791155' target='blank'>Chat Now</a></div>
     </div>
   </div>

    {/* second row */}
    <div data-aos="fade-up" className="flexStart row">
     <div className="flexColCenter mode">
       <div className="flexStart">
         <div className="flexCenter icon">
            <BsFillChatDotsFill size={25} />
         </div>
          <div className="flexColStart detail">
            <span className='primaryText'>Video Call</span>
            <span className='secondaryText'>08170791155</span>
          </div>
       </div>
       <div className="flexCenter button">Video Call Now</div>
     </div>

     {/* fourth mode */}
     <div  className="flexColCenter mode">
       <div className="flexStart">
         <div className="flexCenter icon">
            <HiChatBubbleBottomCenter size={25} />
         </div>
          <div className="flexColStart detail">
            <span className='primaryText'>Message</span>
            <span className='secondaryText'>08170791155</span>
          </div>
       </div>
       <div className="flexCenter button"><a href='sms:08170791155'>Message Now</a></div>
     </div>
   </div>
  </div>
</div>


        {/* right side */}
        <div className="c-right">
           <div className="image-container">
            <img src="banner4.jpg" alt="" />
           </div>
        </div>
      </div>
    <Footer/>
   </section>
 </div>

  )
}

export default Contacts