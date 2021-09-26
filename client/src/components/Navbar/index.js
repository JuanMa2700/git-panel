import React from 'react';
import { Navbar, Nav, Container } from 'react-bootstrap';
import { localStorageKeys } from '../../utils/Consts';
import { ImGithub } from 'react-icons/im';

export default function NavbarComponent() {
  const signOut = () => {
    localStorage.removeItem(localStorageKeys.auth);
    localStorage.removeItem(localStorageKeys.gitAuth);
    window.location = '/';
  };

  return (
    <Navbar
      bg='dark'
      variant='dark'
      expand='lg'
      style={{ height: '75px', fontSize: '18px' }}
    >
      <Container className='px-5'>
        <Navbar.Brand
          className='custom-nav-brand'
          style={{ fontSize: '25px', height: '60px' }}
        >
          <ImGithub /> My Git Repos!
        </Navbar.Brand>
        <Nav>
          <Nav.Link onClick={() => signOut()}>Sign Out</Nav.Link>
        </Nav>
      </Container>
    </Navbar>
  );
}
