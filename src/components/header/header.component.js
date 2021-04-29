import React from 'react'
import {Link } from 'react-router-dom';
import CartIcon from '../cart-icon/cart-icon.component';
import CartDropdown from '../cart-dropdown/cart-dropdown.component';

import './header.styles.css';
import { connect } from 'react-redux';

const Header = ({hidden}) => (
    <div className='header'>
       <Link className='logo-container' to="/">
           <div className='logo'>Emarket</div>  
       </Link> 
       <div className='options'>
           <Link className='option' to='/shop'>
               AddToCart
           </Link>
         <CartIcon/>    
       </div>
       {hidden ? null : <CartDropdown/>}
    </div>
);

const mapStateToProps = ({cart: {hidden}}) =>({
   hidden
});
export default connect(mapStateToProps)(Header);