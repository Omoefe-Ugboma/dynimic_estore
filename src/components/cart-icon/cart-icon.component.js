import React from 'react';
import { connect } from 'react-redux';
import { toggleCartHidden } from '../../redux/Cart/Cart.actions';

import { selectCarItemsCount} from '../../redux/Cart/Cart.selectors';

import { ReactComponent as ShoppingIcon } from '../../assets/shopping-bag.svg';

import './cart-icon.styles.css';

const CartIcon = ({ toggleCartHidden, itemCount }) =>(
  <div className='cart-icon' onClick={toggleCartHidden}>
      <ShoppingIcon className='shopping-icon'/>
      <span className='item-count'>{itemCount}</span>
  </div>
);

const mapDispatchToProps = dispatch =>({
 toggleCartHidden: () => dispatch(toggleCartHidden())
});

const mapStateToProps = state => ({
  itemCount: selectCarItemsCount(state) 
})

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(CartIcon);