import React from 'react';
import { Navbar, Nav, Container, Button } from 'react-bootstrap';
import { localStorageKeys } from '../../utils/Consts';
import { ImGithub } from 'react-icons/im';
import { Link } from 'react-router-dom';

export default function NavbarComponent() {
  const signOut = () => {
    localStorage.removeItem(localStorageKeys.prefixedAuth);
    localStorage.removeItem(localStorageKeys.prefixedGitAuth);
    window.location = '/';
  };

  return (
    <Navbar
      bg='dark'
      variant='dark'
      style={{ height: '75px', fontSize: '18px' }}
    >
      <Container className='px-5'>
        <Navbar.Brand
          as={Link}
          to='/'
          className='custom-nav-brand'
          style={{ fontSize: '25px', height: '60px' }}
        >
          <ImGithub /> My Git Repos!
        </Navbar.Brand>
        <Nav>
          <Nav.Link as={Link} to='/profile' style={{ marginRight: '15px' }}>
            Profile
          </Nav.Link>
          <Button
            variant='outline-light'
            onClick={() => signOut()}
            style={{ fontSize: '18px' }}
          >
            Sign Out
          </Button>
        </Nav>
      </Container>
    </Navbar>
  );
}
