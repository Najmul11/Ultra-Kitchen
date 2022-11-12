import React from 'react';
import './Header.css'
import logo from '../../images/logo.png'

const Header = () => {
    return (
         <header>
            <img src={logo} alt="" />
            <h1>Ultra Pro Kithcen</h1>
         </header>
    );
};

export default Header;