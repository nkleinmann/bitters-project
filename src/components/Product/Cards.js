import React from 'react';
import bitters from '../../utils/cardInfo';
import Product from './ProductCards';

function Cards() {
  return (
    <div className='justify-content-center p-3 row'>
      {bitters.map((productInfo) => {
        // console.log(productInfo)
        return <Product key={productInfo.title} productInfo={productInfo} />;
      })}
      <p>
        <a href='https://www.instagram.com/boybitters/' className='link'>
          #staythirsty
        </a>
      </p>
    </div>
  );
}

export default Cards;
