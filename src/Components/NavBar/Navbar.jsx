import React,  {useState} from 'react'
import './Navbar.css'

// Imported Icons
import {BiLogoMediumOld} from 'react-icons/bi'
import { PiDotsNineBold } from 'react-icons/pi'
import { AiFillCloseCircle } from 'react-icons/ai'


const Navbar = () => {

  // State to track and update navbar
  const [navBar, setNavbar] = useState('menu')

  // State to add background to the navbar
  const [navbarBg, setNavbarBg] = useState('')

  // Function to add BgColor
  const addBg = () => {
    if (scrollY >= 10) {
      setNavbarBg('navBarBG')
    }
  }
  window.addEventListener('scroll', addBg)

  // Function to show navbar
  const showNavBar = () => {
    setNavbar('menu showNavbar')
  }
  // Function to remove navbar
  const removeNavBar = () => {
    setNavbar('menu')
  }


  return (
    <div className='navBar'>
      <div className="logoDiv">
        <BiLogoMediumOld className='icon'/><span> Parinde</span>
      </div>
      <div className={navBar}>
         <ul>
          <li className="navList">
           Destination
          </li>
          <li className="navList">
           About Us
          </li>
          <li className="navList">
           Testimonial
          </li>
          <li className="navList">
           Gallery
          </li>
        </ul>
        {/* Icon to remove Navbar */}
      <AiFillCloseCircle className='icon closeIcon' onClick={removeNavBar}/>
        
      </div>
      <button className="siginBtn btn">
        Sign Up
      </button>
      {/* Icon to toggle Navbar */}
      <PiDotsNineBold className='icon menuIcon' onClick={showNavBar}/>
    </div>
  )
}

export default Navbar