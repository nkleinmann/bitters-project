import React from 'react';
import bitters from '../../utils/cardInfo';
import Product from './ProductCards';
import Row from 'react-bootstrap/Row'

function Cards() {
  return (
        <Row className='justify-content-center p-3'>
            {bitters.map((productInfo) => {
                // console.log(productInfo)
                return <Product key={productInfo.title} productInfo={productInfo} />;
            })}
            <p>
                <a href='https://www.instagram.com/boybitters/' className='link'>
                #staythirsty
                </a>
            </p>
        </Row>
  );
}

export default Cards;
