import React, { useState } from 'react';
import { Link, useHistory } from 'react-router-dom';
import { useAppState } from '../../contexts/AppStateContext';
import useLocalStorage from '../../hooks/UseLocalStorage';
import { post } from '../../utils/Api';
import { toast } from 'react-toastify';
import { localStorageKeys } from '../../utils/Consts';

export default function SignUpPage() {
  const [name, setName] = useState('');
  const [lastname, setLastname] = useState('');
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const { mode, authModes } = useAppState();
  const [users, setUsers] = useLocalStorage(localStorageKeys.users, []);
  const history = useHistory();

  const onSubmit = async (e) => {
    e.preventDefault();
    if (mode === authModes.LOCAL) {
      await setUsers([...users, { name, lastname, email, password }]);
      toast('Signed up successfully!', { type: 'success' });
      history.push('/');
    } else if (mode === authModes.API) {
      const response = await post(
        `${process.env.REACT_APP_AUTH_API_URL}/users`,
        { name, lastname, email, password }
      );
      if (response.error) return;
      toast('Signed up successfully!', { type: 'success' });
      history.push('/');
    }
  };

  return (
    <div
      className='bg-animation d-flex flex-row
       justify-content-center align-items-center'
    >
      <form
        className='card p-5 col-md-4 col-sm-12'
        onSubmit={(e) => onSubmit(e)}
        style={{ maxWidth: '500px', color: 'black' }}
      >
        <h1>Sign Up</h1>
        <div className='form-group'>
          <label>Name</label>
          <input
            className='form-control'
            type='text'
            name='name'
            value={name}
            onChange={(e) => setName(e.target.value)}
            required
          />
        </div>
        <div className='form-group'>
          <label>Last Name</label>
          <input
            className='form-control'
            type='text'
            name='lastname'
            value={lastname}
            onChange={(e) => setLastname(e.target.value)}
            required
          />
        </div>
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
        <button type='submit' className='btn btn-success'>
          Sign Up
        </button>
        <Link to='/' className='card-link mt-3 align-self-center'>
          Login
        </Link>
      </form>
    </div>
  );
}
