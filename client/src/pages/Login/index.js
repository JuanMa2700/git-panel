import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import { useAppState } from '../../contexts/AppStateContext';
import useLocalStorage from '../../hooks/UseLocalStorage';
import { localStorageKeys } from '../../utils/Consts';

export default function LoginPage() {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const { mode, authModes } = useAppState();
  const [users] = useLocalStorage(localStorageKeys.users, []);
  const [, setAuth] = useLocalStorage(localStorageKeys.auth, null);

  const onSubmit = async (e) => {
    e.preventDefault();
    let user;
    if (mode === authModes.LOCAL) {
      user = users.find((u) => u.email === email && u.password === password);
    } else if (mode === authModes.API) {
      const response = await fetch(
        `${process.env.REACT_APP_AUTH_API_URL}/users/login`,
        {
          method: 'POST',
          headers: {
            'Content-Type': 'application/json',
          },
          body: JSON.stringify({
            email: email,
            password: password,
          }),
        }
      );
      if (response.ok) {
        const data = await response.json();
        user = data;
      } else {
        alert('Server response: ' + response.status);
      }
    }
    if (user) {
      setAuth(user);
      window.location = `https://github.com/login/oauth/authorize?client_id=${process.env.REACT_APP_GIT_CLIENT_ID}`;
    }
  };

  return (
    <div
      className='bg-animation d-flex flex-row
       justify-content-center align-items-center'
    >
      <form
        className='card p-5 col-md-4 col-sm-12'
        style={{ maxWidth: '500px' }}
        onSubmit={(e) => onSubmit(e)}
      >
        <h1>Login</h1>
        <div className='form-group'>
          <label>Email Address</label>
          <input
            type='email'
            name='email'
            value={email}
            onChange={(e) => setEmail(e.target.value)}
            className='form-control'
            aria-describedby='emailHelp'
            required
          />
          <small id='emailHelp' className='form-text text-muted'>
            We'll never share your email with anyone else.
          </small>
        </div>
        <div className='form-group'>
          <label>Password</label>
          <input
            className='form-control'
            type='password'
            name='password'
            value={password}
            onChange={(e) => setPassword(e.target.value)}
            required
            autoComplete='on'
          />
        </div>
        <button type='submit' className='btn btn-success mt-3'>
          Login
        </button>
        <Link to='/sign-up' className='card-link mt-3 align-self-center'>
          Sign Up
        </Link>
      </form>
    </div>
  );
}
