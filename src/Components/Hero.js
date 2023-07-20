import React from 'react'
import "./Hero.css"
import {HiLocationMarker} from 'react-icons/hi'
import CountUp from 'react-countup';

export default function Hero() {
  return (
    <section className='hero-wrapper'>
        <div className='padding innerWidth flexCenter hero-container'>
        
        {/* Left section */}
        
        <div className='flexColStart hero-left'>
            <div className='hero-title'>
                <h1>Discover <br/> Most Suitable <br/>Property</h1>
            </div>
            <div className='flexColStart secondaryText hero-des'>
                <span>A real estate website provides a comprehensive platform for users to explore and engage with properties for sale or rent.<br></br> It offers a user-friendly interface where individuals can search for their ideal homes, apartments, or commercial spaces</span>
            </div>
            <div className='flexCenter search-bar'>
                <HiLocationMarker color='Blue' size={25}></HiLocationMarker>
                <input type='text'/>
                <button className='button'>Search</button>
            </div>

            <div className='flexCenter stats'>
                <div className='flexColStart stat'>
                    <CountUp start={8800} end={9000} duration={7}></CountUp>
                    <spna>+</spna>
                    <span>Premium Products</span>
                    
                </div>
                <div className='flexColStart stat'>
                    <CountUp start={1900} end={2000} duration={7}></CountUp>
                    <spna>+</spna>
                    <span>Customers</span>
                    
                </div>
                <div className='flexColStart stat'>
                    <CountUp end={28}></CountUp>
                    <spna>+</spna>
                    <span>Awards Winnig</span>
                   
                </div>
            </div>
        </div>

        {/* Right secion */}
        <div className='flexCenter hero-right'>
            <div className='image-container'>
                <img src='./hero-image.png' alt='Real state'></img>

            </div>

        </div>
        </div>

    </section>
  )
}
