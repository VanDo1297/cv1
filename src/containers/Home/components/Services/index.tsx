import React from 'react';
import './services.scss';
import img from '../../../../assets/slider2.png'

function Services(){
    return(
        <div className="l-services">
            <div className="service__container">

                <div className="service__item">
                    <div className="service__item-info">
                        <p className="service__item-category">Women</p>
                        <p className="service__item-season">Spring 2018</p>
                    </div>
                    <div className="service__item-image">
                        <img src={img} alt=""/>
                    </div>
                    <div className="service__item-btn">
                        <a href="/#">Shop now</a>
                        <span className='service__item-line' />
                    </div>
                </div>

                <div className="service__item">
                    <div className="service__item-info">
                        <p className="service__item-category">Men</p>
                        <p className="service__item-season">Spring 2018</p>
                    </div>
                    <div className="service__item-image">
                        <img src={img} alt=""/>
                    </div>
                    <div className="service__item-btn">
                        <a href="/#">Shop now</a>
                        <span className='service__item-line' />
                    </div>
                </div>

                <div className="service__item">
                    <div className="service__item-info">
                        <p className="service__item-category">Accessories</p>
                        <p className="service__item-season">New Trend</p>
                    </div>
                    <div className="service__item-image">
                        <img src={img} alt=""/>
                    </div>
                    <div className="service__item-btn">
                        <a href="/#">Shop now</a>
                        <span className='service__item-line' />
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Services;