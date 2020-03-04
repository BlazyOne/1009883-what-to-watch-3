import React from 'react';
import {PropValidator} from '../../prop-validator/prop-validator.js';

const GenresList = (props) => {
  const {films, genre, onGenreChange} = props;

  const genres = films
    .map((film) => film.genre)
    .filter((filterGenre, index) => {
      const firstIndex = films.findIndex((film) => film.genre === filterGenre);
      return index === firstIndex;
    })
    .sort((genreA, genreB) => {
      const genreAAmount = films.filter((film) => film.genre === genreA).length;
      const genreBAmount = films.filter((film) => film.genre === genreB).length;
      return genreBAmount - genreAAmount;
    })
    .slice(0, 9);

  return (
    <ul className="catalog__genres-list">
      <li className={`catalog__genres-item ${genre === `All` ? `catalog__genres-item--active` : ``}`}>
        <a
          href="#"
          className="catalog__genres-link"
          onClick={(evt) => {
            evt.preventDefault();
            onGenreChange(`All`);
          }}
        >
          All genres
        </a>
      </li>
      {genres.map((mapGenre, index) => {
        return (
          <li
            key={mapGenre + index}
            className={`catalog__genres-item ${genre === mapGenre ? `catalog__genres-item--active` : ``}`}
          >
            <a
              href="#"
              className="catalog__genres-link"
              onClick={(evt) => {
                evt.preventDefault();
                onGenreChange(mapGenre);
              }}
            >
              {mapGenre}
            </a>
          </li>
        );
      })}
    </ul>
  );
};

GenresList.propTypes = {
  films: PropValidator.FILMS,
  genre: PropValidator.GENRE,
  onGenreChange: PropValidator.ON_GENRE_CHANGE
};

export default GenresList;
