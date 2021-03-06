import React from 'react';
import {PropValidator} from '../../prop-validator/prop-validator.js';
import FilmsList from '../films-list/films-list.jsx';
import {AppRoute} from '../../const.js';

const MyList = (props) => {
  const {authInfo, films, onTitleClick, changeScreen} = props;
  const favoriteFilms = films.filter((film) => film.isFavorite === true);

  return (
    <div className="user-page">
      <header className="page-header user-page__head">
        <div className="logo">
          <a
            href="main.html"
            className="logo__link"
            onClick={(evt) => {
              evt.preventDefault();

              changeScreen(AppRoute.MAIN);
            }}
          >
            <span className="logo__letter logo__letter--1">W</span>
            <span className="logo__letter logo__letter--2">T</span>
            <span className="logo__letter logo__letter--3">W</span>
          </a>
        </div>

        <h1 className="page-title user-page__title">My list</h1>

        <div className="user-block">
          <div className="user-block__avatar">
            <img
              src={`https://htmlacademy-react-3.appspot.com/${authInfo.avatarUrl}`}
              alt="User avatar"
              width="63"
              height="63"
            />
          </div>
        </div>
      </header>

      <section className="catalog">
        <h2 className="catalog__title visually-hidden">Catalog</h2>

        <FilmsList
          films={favoriteFilms}
          onTitleClick={onTitleClick}
          changeScreen={changeScreen}
        />
      </section>

      <footer className="page-footer">
        <div className="logo">
          <a
            href="main.html"
            className="logo__link logo__link--light"
            onClick={(evt) => {
              evt.preventDefault();

              changeScreen(AppRoute.MAIN);
            }}
          >
            <span className="logo__letter logo__letter--1">W</span>
            <span className="logo__letter logo__letter--2">T</span>
            <span className="logo__letter logo__letter--3">W</span>
          </a>
        </div>

        <div className="copyright">
          <p>© 2019 What to watch Ltd.</p>
        </div>
      </footer>
    </div>
  );
};

MyList.propTypes = {
  authInfo: PropValidator.AUTH_INFO,
  films: PropValidator.FILMS,
  onTitleClick: PropValidator.ON_TITLE_CLICK,
  changeScreen: PropValidator.CHANGE_SCREEN
};

export default MyList;
