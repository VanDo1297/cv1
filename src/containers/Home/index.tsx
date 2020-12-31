import React from 'react';
import './home.scss';
import SliderComponent from '../../components/slider';
import Services from './components/Services';
import ProductOverview from './components/ProductOverview';
function Home(){
    return(
        <div id='#' className="l-home">
            <SliderComponent />
            <div id="shop">
                <Services />
                <ProductOverview />
            </div>
        </div>
    )
}

export default Home;