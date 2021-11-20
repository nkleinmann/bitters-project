import React from 'react';
import Navbar from 'react-bootstrap/Navbar';
import Nav from 'react-bootstrap/Nav';
import bitters from '../../_assets/bitters.jpg';

function Navigation() {
  return (
    <>
      <Navbar className='nav' bg='light'>
        <Navbar.Brand href='#home'>
          <img
            src={bitters}
            width='30'
            height='30'
            className='d-inline-block align-top logo'
            alt='React Bootstrap logo'
          />
        </Navbar.Brand>
        <p className='brand'>Boy Bitters</p>
        <Nav.Link href='#home' className='navlink home'>
          Home
        </Nav.Link>
        <Nav.Link href='#about' className='navlink about'>
          About
        </Nav.Link>
      </Navbar>
    </>
  );
}

export default Navigation;
