import React from 'react'
import {Swiper,SwiperSlide,useSwiper} from "swiper/react"
import "swiper/css"
import data from "../utilis/slider.json"
import "./Residencies.css"
import { sliderSettings } from '../utilis/common'

const Residencies = () => {
  return (
    <section className="r-wrapper">
        <div className="paddings innerWidth r-container">

            <div className="r-head flexColStart">
                <span className='OrangeText'>Best choices</span>
                <span className='primaryText'>Popular Residencies</span>
            </div>

            <Swiper {...sliderSettings}>
                <SliderButtons />
                {
                    data.map((card,i)=>(
                        <SwiperSlide key={i} className='r-image'>
                            <div className="r-image">


                                <img src={card.image} alt="Price"  />

                                <div className="secondaryText flexColStart r-price">
                                <span>{card.price}</span>
                                <span className='primaryText'>{card.name}</span>
                                <span className='secondaryText'>{card.details}</span>

                                </div>
                            </div>
                        </SwiperSlide>



                    ))
                }
            </Swiper>
        </div>
    </section>
  )
}

export default Residencies

const SliderButtons = () => {
    const swiper = useSwiper();
  
    return (
      <div className="slider-button">
        <button onClick={() => swiper.slidePrev()}>&lt;</button>
        <button onClick={() => swiper.slideNext()}>&gt;</button>
      </div>
    );
  };