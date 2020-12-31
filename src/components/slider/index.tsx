import React, { Component } from "react";
import Slider from "react-slick";
import './slider.scss';
import slider1 from '../../assets/slider2.png';


function SliderComponent(){
    const options={
        dots: true,
        infinite: true,
        speed: 1000,
        slidesToShow: 1,
        slidesToScroll: 1,
        autoplay:true
    }
    return (
        <Slider {...options}>
             <div style={{ width: 100 }}>
                <div className='slider__item'>
                    <div className="slider__item-description">
                        <p className="slider__item-name">Men New-Season</p>
                        <p className="slider__item-category">{`Jackets & coats`}</p>
                        <button className='slider__item-button'>
                            <a href="/#">Shop now</a>
                        </button>
                    </div>

                    <div className="slider__item-image">
                        <img src={slider1} alt=""/>
                    </div>
                </div>
            </div>
            <div>
            <div className='slider__item'>
                <div className="slider__item-description">
                    <p className="slider__item-name">Men New-Season</p>
                    <p className="slider__item-category">{`Jackets & coats`}</p>
                    <button className='slider__item-button'>
                        <a href="/#">Shop now</a>
                    </button>
                </div>

                <div className="slider__item-image">
                    <img src={slider1} alt=""/>
                </div>
            </div>
            </div>
            <div>
                <div className='slider__item'>
                    <div className="slider__item-description">
                        <p className="slider__item-name">Men New-Season</p>
                        <p className="slider__item-category">{`Jackets & coats`}</p>
                        <button className='slider__item-button'>
                            <a href="/#">Shop now</a>
                        </button>
                    </div>

                    <div className="slider__item-image">
                        <img src={slider1} alt=""/>
                    </div>
                </div>
            </div>
        </Slider>
       
    );
}

export default SliderComponent;