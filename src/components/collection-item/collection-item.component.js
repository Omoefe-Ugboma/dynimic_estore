import React from 'react';
import { connect } from 'react-redux';

import CustomButton from '../custom-button/custom-buttom.component';
import { addItem } from '../../redux/Cart/Cart.actions'; 

import './collection-item.styles.css';

const CollectItem = ({ item, addItem}) => {
  const { name, price, imageUrl } = item;
  return(
    <div className='collection-item'>
        <div
          className='image'
          style={{
            backgroundImage:`url(${imageUrl})`
          }}
        />
        <div className='collection-footer'>
           <span className='name'>{name}</span>
           <span className='price'>{price}</span>
        </div> 
        <CustomButton onClick={() => addItem(item)} inverted>
          Add to Cart
        </CustomButton>     
    </div>
  );
};

const mapDispatchToProps = dispatch =>({
  addItem: item => dispatch(addItem(item))
});

export default connect(
  null,
  mapDispatchToProps
)
(CollectItem);