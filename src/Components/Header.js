import React from 'react'
import "./Header.css"
export default function Header() {
  return (
    <section className='h-wrapper'>
        <div className=' flexCenter padding innerWidth h-container'>
            
            <img src='./favicon.ico'alt='Logo' width={70}></img>

            <div className='flexCenter h-menu'>

            <a href=''>
                Residencies
            </a>
            <a href=''>Our values</a>
            <a href=''>Contact us</a>
            <a href=''>Get Started</a>
            <button className='button'>
            <a href=''>Contact</a>
            </button>
            </div>
        </div> 
        
    </section>
  )
}
