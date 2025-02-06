import React, { useState } from 'react'
import "./Header.css"
import { BiMenuAltRight } from 'react-icons/bi'
import OutsideClickHandler from 'react-outside-click-handler'
import { Link } from 'react-router-dom'

const Header = () => {
  const [ fix, setFix ] = useState(false)


  function setFixed(){
    if(window.scrollY > 500){
      setFix(true)
    } else {
      setFix(false)
    }
  }

  window.addEventListener('scroll', setFixed)
  const [menuOpened, setMenuOpened] = useState(false);
  const getMenuStyles = (menuOpened) =>{
    if (document.documentElement.clientWidth <=800)
    {
      return{right: !menuOpened && "-100%"}
    }
  }
  return (
    
    <section className="h-wrapper">
      <div className='flexCenter paddings innerWidth h-container'>
        <h1 className='lg'>cr<span className='orangeText'>EE</span>d's home</h1>

       <OutsideClickHandler
        onOutsideClick={() => setMenuOpened(false)} 
        >



        <div className="flexCenter h-menu" 
        style={getMenuStyles(menuOpened)}>
          <Link to="/">Home</Link>
          <Link to="/residences">Residencies</Link>
          <Link to="/values">About Us</Link>
          {/* <Link to="#Contacts">Contact Us </Link> */}
          <Link to="/getstarted">Get Started</Link>
          <button className='button'>
          <Link to="/contacts">Contact</Link>
          </button>
        </div>
        </OutsideClickHandler>

        <div className="menu-icon"  onClick={() => setMenuOpened((prev) => !prev)}>
        <BiMenuAltRight size={30}/>
      </div>
      </div>
      
    </section>
    
  )
}

export default Header
