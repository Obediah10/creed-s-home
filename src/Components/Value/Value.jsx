import React, { useEffect } from 'react'
import {
  Accordion,
  AccordionItem,
  AccordionItemHeading,
  AccordionItemButton,
  AccordionItemPanel,
  AccordionItemState
} from 'react-accessible-accordion'
import "react-accessible-accordion/dist/fancy-example.css"
import { MdOutlineArrowDropDown } from 'react-icons/md'
import './Value.css'
import data from "../../utils/Accordion"
import Aos from 'aos'
import 'aos/dist/aos.css'
function Value()  {
    useEffect(() =>{
        Aos.init({duration: 2000})
    
       }, [])


  return (
    <section className="v-wrapper" id='Values'>
       <div className="paddings innerWidth flexCenter v-container">
           {/* left side */}
           <div data-aos="fade-up" className="v-left">
            <div className="image-container">
              <img src="./h2.jpg" alt="" />
            </div>
           </div>

           {/* right side */}
           <div data-aos="fade-up" className="flexColStart v-right">
            <span className='orangeText'>Our Value</span>
            <span className='primaryText'>Value We Offer To You</span>
            <span className='secondaryText'> We always ready to help by providing the best services for you.
            <br />
            We beleive a good place to live can make your life better</span>


            <Accordion 
               className='accordion'
              allowMultipleExpanded={false}
              preExpanded={[0]}
            >
              
                { data.map((item,i) => {
                  return (
                      <AccordionItem
                      className='accordionItem' key={i} uuid={i}>
                        <AccordionItemHeading>
                          <AccordionItemButton className='flexCenter accordionbutton'>


                            
                            <div className="flexCenter icon">{item.icon}</div>
                            <span>
                              {item.heading}
                            </span>
                            <div className="flexCenter icon">
                            <MdOutlineArrowDropDown size={20} />
                            </div>
                          </AccordionItemButton>

                        </AccordionItemHeading>
                        <AccordionItemPanel>
                          <p className="secondaryText">{item.detail}</p>
                        </AccordionItemPanel>
                      </AccordionItem>
                  )
               
                })

                }
              
             
            </Accordion>
           </div>
       </div>
    </section>
  )
}

export default Value