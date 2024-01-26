/* eslint-disable react-hooks/exhaustive-deps */
import React, { useEffect, useState } from 'react';
import { SliderContainer } from './SliderContainer';
import { IoArrowBackCircleOutline , IoArrowForwardCircleOutline } from "react-icons/io5";
import { SLIDERDATE } from './sliderDate';

const Slider = () => {

    const [currentSlide, setCurrentSlide] = useState(0);
    const slideLength = SLIDERDATE.length;
    
  
    const autoScroll = true;
    let slideInterval;
    let intervalTime = 5000;
  
    const nextSlide = () => {
      setCurrentSlide(currentSlide === slideLength - 1 ? 0 : currentSlide + 1);
    };
  
    const prevSlide = () => {
      setCurrentSlide(currentSlide === 0 ? slideLength - 1 : currentSlide - 1);
    };
  
    useEffect(() => {
      setCurrentSlide(0);
    }, []);
  
    useEffect(() => {
        if (autoScroll) {
          const auto = () => {
            slideInterval = setInterval(nextSlide, intervalTime);
          };
          auto();
        }
        return () => clearInterval(slideInterval);
      }, [currentSlide, slideInterval, autoScroll]);

    return (
        <SliderContainer className='slider'>
        
              <IoArrowBackCircleOutline className='arrow prev' size={50} onClick={prevSlide}/>
              <IoArrowForwardCircleOutline className='arrow next' size={40}  onClick={nextSlide}/>

              {
                SLIDERDATE.map((slide , index )=>(
                    <div 
                        key={index}
                        className={index === currentSlide ? 'slide current ':'slide'}
                    >
                       {index === currentSlide && (
                        <>
                          <img src={slide.image} alt={slide.heading}/>  
                          <div className='content'>
                             <h2>{slide.heading}</h2>
                             <p>{slide.desc}</p>
                             <a href="#product" className="btn btn-primary">
                                Comprar ahora
                             </a>
                          </div>
                        </>
                       )} 
                    </div>
                ))
              }
            
        </SliderContainer>
    );
}

export default Slider;
