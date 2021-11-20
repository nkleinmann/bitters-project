import React from 'react';
import Navbar from 'react-bootstrap/Navbar';
import Nav from 'react-bootstrap/Nav';
import boybitters from '../../_assets/boybitters.jpg';

function Navigation() {
  return (
    <Navbar className='nav' bg='light'>
      <Navbar.Brand href='#home'>
        <img
          src={boybitters}
          width='50'
          height='50'
          className='d-inline-block align-top logo'
          alt='React Bootstrap logo'
        />
      </Navbar.Brand>
      <span className='brand'>Boy Bitters</span>

      <Nav.Link href='/' style={{ color: 'black' }} className='navlink home'>
        Home
      </Nav.Link>

      <Nav.Link
        href='#about'
        style={{ color: 'black' }}
        className='navlink about'
      >
        About
      </Nav.Link>
    </Navbar>
  );
}

export default Navigation;
