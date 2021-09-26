import React, { useEffect } from 'react';
import ProfileCard from '../../components/ProfileCard';
import ReposList from '../../components/ReposList';
import useLocalStorage from '../../hooks/UseLocalStorage';
import queryString from 'query-string';

export default function Dashboard(props) {
  const [user] = useLocalStorage('auth');
  const [gitAccessToken, setGitAccessToken] = useLocalStorage('git-auth');

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
    <div className='container d-flex flex-row p-5'>
      <div className='col-md-4 col-sm-12'>
        <ProfileCard user={user} />
      </div>
      <div className='col-md-8 col-sm-12'>
        {gitAccessToken && <ReposList />}
      </div>
    </div>
  );
}
