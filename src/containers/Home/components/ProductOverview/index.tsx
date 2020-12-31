import React,{useEffect} from 'react';
import './ProductOverview.scss';
import slider1 from '../../../../assets/slider1.jpg';
// @ts-ignore
import mixitup from 'mixitup';

function ProductOverview(){
    useEffect(()=>{
        var containerEl = document.querySelector('.product__container');
        var mixer =  mixitup(containerEl, {
            selectors:{
                target: '.product__content'
            },
            animation: {
                duration: 400
            }
        })
        console.log(mixer);
    },[])

    return (
        <div className="l-product">

            <p className="title">Product overview</p>
            <div className="product__control">
                <div className="search__lists">
                    <span className='search__item' data-filter='all'>All Products</span>
                    <span className='search__item' data-filter='.women'>Women</span>
                    <span className='search__item' data-filter='.men'>Men</span>
                    <span className='search__item' data-filter='.bag'>Bag</span>
                    <span className='search__item' data-filter='.shoes'>Shoes</span>
                    <span className='search__item' data-filter='.watches'>Watches</span>
                </div>

                <div className="control">
                    a
                </div>
            </div>

            <div className="product__container">
                <div className="product__content mix all">
                    <a href="/#" className=""><img src={slider1} alt="" className="product__img"/></a>
                    <a href="/#" className="button">Shop now</a>
                </div>

                <div className="product__content mix all">
                    <a href="/#" className=""><img src={slider1} alt="" className="product__img"/></a>
                    <a href="/#" className="button">Shop now</a>
                </div>

                <div className="product__content mix all">
                    <a href="/#" className=""><img src={slider1} alt="" className="product__img"/></a>
                    <a href="/#" className="button">Shop now</a>
                </div>

                <div className="product__content mix men">
                    <a href="/#" className=""><img src={slider1} alt="" className="product__img"/></a>
                    <a href="/#" className="button">Shop now</a>
                </div>

            </div>
        </div>
    )

}

export default ProductOverview;