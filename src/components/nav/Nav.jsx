import React from 'react'
import './nav.css'
import {AiOutlineHome,AiOutlineUser, AiFillCode} from 'react-icons/ai'
import {BiBook,BiMessageDetail} from 'react-icons/bi'
import {useState} from 'react'

const Nav = () => {
  // This is to change the active state in the nav bar
  const [activeNav, setActiveNav] = useState('#')
  return (
   
    <nav>
      <a href="#" onClick={() => setActiveNav('#')} className={activeNav=== '#' ? 'active': ''} ><AiOutlineHome /></a>
      <a href="#about" onClick={() => setActiveNav('#about')} className={activeNav=== '#about' ? 'active': ''}><AiOutlineUser/></a>
      <a href="#experience" onClick={() => setActiveNav('#experience')} className={activeNav=== '#experience' ? 'active': ''}><BiBook /></a>
      <a href="#service" onClick={() => setActiveNav('#service')} className={activeNav=== '#service' ? 'active': ''}><AiFillCode/></a>
      <a href="#contact" onClick={() => setActiveNav('#contact')} className={activeNav=== '#about' ? 'active': ''}><BiMessageDetail /></a>
    </nav>
  )
}

export default Nav