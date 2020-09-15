import React from 'react';
import banner from '../../images/bannerbackground.png';
import './Header.css';
const Header = () => {
    return (
        <div className="header">
            <img src={banner} alt="" />
        </div>
    );
};

export default Header;