import React from 'react';
import Navbar from 'react-bootstrap/Navbar';
import bitters from '../../_assets/bitters.jpg';

function Navigation() {
  return (
    <>
      <Navbar bg='light'>
        <Navbar.Brand href='#home'>
          <img
            src={bitters}
            width='30'
            height='30'
            className='d-inline-block align-top logo'
            alt='React Bootstrap logo'
          />
        </Navbar.Brand>
        <p>Boy Bitters</p>
      </Navbar>
    </>
  );
}

export default Navigation;
