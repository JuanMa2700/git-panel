import React, { useCallback, useRef } from 'react';
import { gql, useQuery } from '@apollo/client';
import useLocalStorage from '../../hooks/UseLocalStorage';
import { localStorageKeys } from '../../utils/Consts';
import './styles.css';

const GET_USER = gql`
  query {
    viewer {
      avatarUrl
      bio
      createdAt
      name
      login
    }
  }
`;

export default function ProfilePage() {
  const { loading, error, data } = useQuery(GET_USER);
  const [authUser] = useLocalStorage(localStorageKeys.auth);

  if (loading) return 'Loading...';
  if (error) return `Error! ${error.message}`;

  const { avatarUrl, bio, createdAt, login, name } = data.viewer;

  return (
    <div className='bg-animation d-flex justify-content-center'>
      <div
        className='card profile-card p-5 col-md-4 col-sm-12'
        style={{
          maxWidth: '400px',
          marginTop: '30px',
          maxHeight: '70%',
          height: '520px',
        }}
      >
        <div className='profile-image'>
          <img src={avatarUrl} />
        </div>
        <div className='profile-login'>{login}</div>
        {name && <div className='profile-name'>{name}</div>}
        {bio && <div className='profile-bio'>{bio}</div>}
        <div className='profile-created-date'>
          Using github since:{' '}
          <strong>{new Date(createdAt).toDateString()}</strong>
        </div>
        <hr />
        <div style={{ fontSize: '15px' }}>
          Loggin info for "My Git Repos!" <strong>{authUser.email}</strong>
          <p>
            {authUser.name} {authUser.lastname}
          </p>
        </div>
      </div>
    </div>
  );
}
