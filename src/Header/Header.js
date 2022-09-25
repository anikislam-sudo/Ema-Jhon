import React from 'react';
import  logo from '../../src/images/Logo.svg';
import "./Header.css"
const Header = () => {
    return (
        <div>
            <nav className='header'>
            <img src={logo}  />
            <div>
                <a href="/home">Home</a>
                <a href="/about">About</a>
                <a href="/orders">Order</a>
                <a href="/inventory">Inventory</a>
            </div>
            </nav>
        </div>
    );
};

export default Header;