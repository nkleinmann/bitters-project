import React from 'react';
import Navbar from 'react-bootstrap/Navbar';
import Nav from 'react-bootstrap/Nav';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import boybitters from '../../_assets/boybitters.jpg';

function Navigation() {
  return (
    <Navbar className='nav' bg='light'>
      <Navbar.Brand href='/'>
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
        Store
      </Nav.Link>

      <Nav.Link
        href='/about'
        style={{ color: 'black' }}
        className='navlink about'
      >
        About
      </Nav.Link>
      <a href='/filter' className='link'>
        <FontAwesomeIcon className=' icons search' icon='search' />
      </a>
      <div>
        <FontAwesomeIcon className=' icons shoppingCart' icon='shopping-cart' />
      </div>
    </Navbar>
  );
}

export default Navigation;
