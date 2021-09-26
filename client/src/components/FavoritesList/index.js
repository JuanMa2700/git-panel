import React from 'react';
import { MdFavorite } from 'react-icons/md';

export default function FavoritesList({ favorites }) {
  return (
    <div className='mt-5'>
      <h4>Favorites!</h4>
      {favorites.map((repo, index) => (
        <div
          className='favorite-item my-3 d-flex flex-row justify-content-between'
          key={index}
        >
          <div>{repo.name}</div>
          <MdFavorite />
        </div>
      ))}
    </div>
  );
}
