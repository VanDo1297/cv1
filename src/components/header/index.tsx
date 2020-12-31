import React, { useState } from 'react';
import './header.scss';

function Header (){

    const [linkActive, setLinkActive]= useState(1)

    const handleClickLink=(idx: number)=>{
        setLinkActive(idx);
    }

    return(
        <header className='l-header' id='header'>
            <nav className="nav d-flex flex-row align-items-center">
                <a href="/" data-scroll className="nav__logo"><span>Do Ngo</span> Store</a>

                <div className="nav__menu" id="nav-menu">
                    <ul className="nav__list d-flex flex-row">
                        <li className="nav__item"><a onClick={()=>handleClickLink(1)} data-scroll href="/" className={`nav__link ${linkActive === 1 ? 'nav__link_active' : ''}`}>Home</a></li>
                        <li className="nav__item"><a onClick={()=>handleClickLink(2)} data-scroll href="/#shop" className={`nav__link ${linkActive === 2 ? 'nav__link_active' : ''}`}>Shop</a></li>
                        <li className="nav__item"><a onClick={()=>handleClickLink(3)} data-scroll href="/#checkout" className={`nav__link ${linkActive === 3 ? 'nav__link_active' : ''}`}>Checkout</a></li>
                        <li className="nav__item"><a onClick={()=>handleClickLink(4)} data-scroll href="/#bog" className={`nav__link ${linkActive === 4 ? 'nav__link_active' : ''}`}>Blog</a></li>
                        <li className="nav__item"><a onClick={()=>handleClickLink(5)} data-scroll href="/#about" className={`nav__link ${linkActive === 5 ? 'nav__link_active' : ''}`}>About</a></li>
                        <li className="nav__item"><a onClick={()=>handleClickLink(6)} data-scroll href="/#contact" className={`nav__link ${linkActive === 6 ? 'nav__link_active' : ''}`}>Contact</a></li>
                    </ul>
                </div>
                <div className="nav__control">
                    <div className="nav__control">
                        <i className='bx bx-search'></i>
                    </div>
                    <div className="nav__control">
                        <i className='bx bxs-cart' ></i>
                        <div className='nav__control-bagde'>2</div>
                    </div>
                    <div className="nav__control">
                        <i className='bx bx-heart'></i>
                        <div className='nav__control-bagde'>0</div>
                    </div>
                </div>
                <div className="nav__toggle" id="nav-toggle">
                    <i className='bx bx-menu'></i>
                </div>
            </nav>
        </header>
    )
}
export default Header;