import React, { useEffect, useState } from 'react';
import ProfileCard from '../../components/ProfileCard';
import ReposList from '../../components/ReposList';
import FavoritesList from '../../components/FavoritesList';
import useLocalStorage from '../../hooks/UseLocalStorage';
import { localStorageKeys } from '../../utils/Consts';
import queryString from 'query-string';

export default function DashboardPage(props) {
  const [user] = useLocalStorage(localStorageKeys.auth);
  const [gitAccessToken, setGitAccessToken] = useLocalStorage(
    localStorageKeys.gitAuth
  );
  const [favorites, setFavorites] = useState([]);

  useEffect(() => {
    async function getGitAccessToken() {
      const query = queryString.parse(props.location.search);
      if (query.code && !gitAccessToken) {
        const response = await fetch(
          `https://cors-anywhere.herokuapp.com/https://github.com/login/oauth/access_token?client_id=${process.env.REACT_APP_GIT_CLIENT_ID}&client_secret=${process.env.REACT_APP_GIT_CLIENT_SECRET}&code=${query.code}`,
          {
            method: 'POST',
            headers: {
              Accept: 'application/json',
            },
          }
        );
        const data = await response.json();
        setGitAccessToken(data.access_token);
      }
    }
    getGitAccessToken();
  }, [props.location.search, setGitAccessToken, gitAccessToken]);

  return (
    <div className='container d-flex flex-row py-5'>
      <div
        className='col-md-3 col-sm-12 overflow-auto'
        style={{ maxHeight: 'calc(100vh - 180px)' }}
      >
        <ProfileCard user={user} />
        {favorites.length > 0 && <FavoritesList {...{ favorites }} />}
      </div>
      <div
        className='col-md-9 col-sm-12 px-5 overflow-auto'
        style={{
          maxHeight: 'calc(100vh - 180px)',
        }}
      >
        <h4 style={{ marginBottom: '20px' }}>Try my infinite scroll!</h4>
        {gitAccessToken && <ReposList {...{ favorites, setFavorites }} />}
      </div>
    </div>
  );
}
