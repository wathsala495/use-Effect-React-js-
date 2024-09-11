import React, { useState } from 'react'
import './../App.css'
import closeMenu from './../images/close.svg'
import menu from './../images/menu.svg'
 

export default function Header() {
    const [menuClick,setMenuClick]=useState(false)
  return (
    <header className='header_container'>
       <h1>AUK<span>DEV</span></h1> 

       <nav>
        <ol>
            <li>Home</li>
            <li>About</li>
            <li>Contact</li>
            <li>Project</li>
        </ol>
        <img className='header_menuClick' src={menu} alt="menu" style={{
            width:"30px",
            cursor:'pointer'

        }} onClick={()=>{setMenuClick(true)}}/>
       <ul
          style={{
            right:`${menuClick ?"-20px":"-300px"}`
          }}
       >


        <div className='header_menuClose'>
            <img src={closeMenu} alt='close menu' onClick={()=>{setMenuClick(false)}}/>
        </div>
        <div className='header_menu'>
        <li>Home</li>
            <li>About</li>
            <li> Contact</li>
            <li>Projects</li>
        </div>
        
           
        </ul>
       </nav>
    </header>
  )
}
