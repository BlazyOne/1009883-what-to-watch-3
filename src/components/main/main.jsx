import React from 'react';
import {PropValidator} from '../../prop-validator/prop-validator.js';
import GenresList from '../genres-list/genres-list.jsx';
import FilmsList from '../films-list/films-list.jsx';
import ShowMoreButton from '../show-more-button/show-more-button.jsx';
import {AuthorizationStatus} from '../../reducer/user/user.js';
import {AppRoute} from '../../const.js';

const Main = (props) => {
  const {
    authorizationStatus,
    authInfo,
    promoFilm: {
      id: promoId,
      title: promoTitle,
      genre: promoGenre,
      year: promoYear,
      backgroundImage: promoBackgroundImage,
      poster: promoPoster,
      isFavorite: promoIsFavorite
    },
    films,
    showedFilmsAmount,
    genre,
    onTitleClick,
    changeScreen,
    onGenreChange,
    onIncrementShowed,
    changeFavoriteStatus
  } = props;

  const filteredFilms = films.filter((film) => {
    if (genre === `All`) {
      return true;
    }

    return film.genre === genre;
  });
  const showedFilms = filteredFilms.slice(0, showedFilmsAmount);

  return (
    <React.Fragment>
      <section className="movie-card">
        <div className="movie-card__bg">
          <img src={promoBackgroundImage} alt={promoTitle} />
        </div>

        <h1 className="visually-hidden">WTW</h1>

        <header className="page-header movie-card__head">
          <div className="logo">
            <a className="logo__link">
              <span className="logo__letter logo__letter--1">W</span>
              <span className="logo__letter logo__letter--2">T</span>
              <span className="logo__letter logo__letter--3">W</span>
            </a>
          </div>

          <div className="user-block">
            {authorizationStatus === AuthorizationStatus.AUTH ?
              <div className="user-block__avatar">
                <img
                  src={`https://htmlacademy-react-3.appspot.com/${authInfo.avatarUrl}`}
                  alt="User avatar"
                  width="63"
                  height="63"
                  onClick={() => {
                    changeScreen(AppRoute.MY_LIST);
                  }}
                />
              </div> :
              <a
                href="#"
                className="user-block__link"
                onClick={(evt) => {
                  evt.preventDefault();
                  changeScreen(AppRoute.SIGN_IN);
                }}
              >Sign in</a>}
          </div>
        </header>

        <div className="movie-card__wrap">
          <div className="movie-card__info">
            <div className="movie-card__poster">
              <img src={promoPoster} alt={promoTitle + `poster`} width="218" height="327" />
            </div>

            <div className="movie-card__desc">
              <h2 className="movie-card__title">{promoTitle}</h2>
              <p className="movie-card__meta">
                <span className="movie-card__genre">{promoGenre}</span>
                <span className="movie-card__year">{promoYear}</span>
              </p>

              <div className="movie-card__buttons">
                <button
                  className="btn btn--play movie-card__button"
                  type="button"
                  onClick={() => {
                    changeScreen(AppRoute.createParticularPlayerUrl(promoId));
                  }}
                >
                  <svg viewBox="0 0 19 19" width="19" height="19">
                    <use xlinkHref="#play-s"></use>
                  </svg>
                  <span>Play</span>
                </button>
                <button
                  className="btn btn--list movie-card__button"
                  type="button"
                  onClick={() => {
                    if (authorizationStatus === AuthorizationStatus.AUTH) {
                      changeFavoriteStatus(promoId);
                    } else {
                      changeScreen(AppRoute.SIGN_IN);
                    }
                  }}
                >
                  {promoIsFavorite ?
                    <svg viewBox="0 0 18 14" width="18" height="14">
                      <use xlinkHref="#in-list"></use>
                    </svg> :
                    <svg viewBox="0 0 19 20" width="19" height="20">
                      <use xlinkHref="#add"></use>
                    </svg>}
                  <span>My list</span>
                </button>
              </div>
            </div>
          </div>
        </div>
      </section>
      <div className="page-content">
        <section className="catalog">
          <h2 className="catalog__title visually-hidden">Catalog</h2>

          <GenresList
            films={films}
            genre={genre}
            onGenreChange={onGenreChange}
          />

          <FilmsList
            films={showedFilms}
            onTitleClick={onTitleClick}
            changeScreen={changeScreen}
          />

          {showedFilms.length < filteredFilms.length ?
            <ShowMoreButton
              onIncrementShowed={onIncrementShowed}
            /> :
            ``}
        </section>

        <footer className="page-footer">
          <div className="logo">
            <a className="logo__link logo__link--light">
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
    </React.Fragment>
  );
};

Main.propTypes = {
  authorizationStatus: PropValidator.AUTHORIZATION_STATUS,
  authInfo: PropValidator.AUTH_INFO,
  promoFilm: PropValidator.FILM,
  films: PropValidator.FILMS,
  showedFilmsAmount: PropValidator.SHOWED_FILMS_AMOUNT,
  genre: PropValidator.GENRE,
  onTitleClick: PropValidator.ON_TITLE_CLICK,
  changeScreen: PropValidator.CHANGE_SCREEN,
  onGenreChange: PropValidator.ON_GENRE_CHANGE,
  onIncrementShowed: PropValidator.ON_INCREMENT_SHOWED,
  changeFavoriteStatus: PropValidator.CHANGE_FAVORITE_STATUS
};

export default Main;
