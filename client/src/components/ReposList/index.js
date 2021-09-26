import React from 'react';
import { gql, useQuery } from '@apollo/client';

const GET_REPOS = gql`
  query {
    viewer {
      repositories(first: 30, after: null) {
        totalCount
        pageInfo {
          endCursor
        }
        nodes {
          id
          name
          description
          createdAt
          owner {
            login
          }
        }
      }
    }
  }
`;

export default function ReposList({ favorites, setFavorites }) {
  const { loading, error, data } = useQuery(GET_REPOS);

  if (loading) return 'Loading...';
  if (error) return `Error! ${error.message}`;

  const toggleFavorites = (repository) => {
    const previous = favorites.find((item) => item.id === repository.id);
    previous
      ? setFavorites(favorites.filter((item) => item.id !== repository.id))
      : setFavorites((prev) => [...prev, repository]);
  };

  return (
    <>
      {data.viewer.repositories.nodes.map((repo, index) => (
        <div className='repo-list-item my-4' key={index} href={`#${index}`}>
          <div className='d-flex flex-row justify-content-between'>
            <div className='repo-name'>{repo.name}</div>
            <div className='repo-owner'>Owned by: {repo.owner.login}</div>
          </div>
          <div className='d-flex flex-row justify-content-between'>
            <div className='repo-creation-date'>
              <strong>Creation Date: </strong>
              {new Date(repo.createdAt).toDateString()}
            </div>
            <svg
              width='24'
              className='star'
              style={{
                fill: favorites.find((x) => x.id === repo.id) && '#e18447',
              }}
              onClick={() => toggleFavorites(repo)}
              height='24'
              xmlns='http://www.w3.org/2000/svg'
              fillRule='evenodd'
              clipRule='evenodd'
            >
              <path d='M15.668 8.626l8.332 1.159-6.065 5.874 1.48 8.341-7.416-3.997-7.416 3.997 1.481-8.341-6.064-5.874 8.331-1.159 3.668-7.626 3.669 7.626zm-6.67.925l-6.818.948 4.963 4.807-1.212 6.825 6.068-3.271 6.069 3.271-1.212-6.826 4.964-4.806-6.819-.948-3.002-6.241-3.001 6.241z' />
            </svg>
          </div>
        </div>
      ))}
    </>
  );
}
