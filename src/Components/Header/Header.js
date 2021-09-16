import React from 'react';
import { Link, NavLink } from 'react-router-dom'
import './Header.css';

const Header = () => {
    return (
        <nav className="header">
            <div className="header-container">
            <Link to='/'> 
            <p className="app-title">Astro-Fit of the Day</p>
            </Link>
            </div>
            
        </nav>
    );
};


export default Header;