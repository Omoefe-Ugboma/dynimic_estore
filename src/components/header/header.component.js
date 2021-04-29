import React from 'react'
import {Link } from 'react-router-dom';
import './header.styles.css';

const Header = () => (
    <div className='header'>
       <Link className='logo-container' to="/">
           <div className='logo'>Emarket</div>  
       </Link> 
       <div className='options'>
           <Link className='option' to='/shop'>
               AddToCart
           </Link>
                  
       </div>
    </div>
)
export default Header;