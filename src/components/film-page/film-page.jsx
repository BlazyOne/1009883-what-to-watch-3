import React, {PureComponent} from 'react';
import {PropValidator} from '../../prop-validator/prop-validator.js';
import FilmPageTabs from '../film-page-tabs/film-page-tabs.jsx';
import FilmsList from '../films-list/films-list.jsx';
import withTabs from '../../hocs/with-tabs/with-tabs.jsx';
import {AuthorizationStatus} from '../../reducer/user/user.js';
import {AppRoute} from '../../const.js';

const SIMILAR_FILMS_AMOUNT = 4;

const FilmPageTabsWrapped = withTabs(FilmPageTabs);

class FilmPage extends PureComponent {
  componentDidMount() {
    const {
      loadReviewsToFilm,
      film: {id}
    } = this.props;

    loadReviewsToFilm(id);
  }

  render() {
    const {
      authorizationStatus,
      authInfo,
      film: {id, backgroundImage, title, genre, year, poster, isFavorite},
      films,
      onTitleClick,
      changeScreen,
      changeFavoriteStatus
    } = this.props;

    const similarFilms = films.filter((film) => film.genre === genre && film.id !== id).slice(0, SIMILAR_FILMS_AMOUNT);

    return (
      <React.Fragment>
        <section className="movie-card movie-card--full">
          <div className="movie-card__hero">
            <div className="movie-card__bg">
              <img src={backgroundImage} alt={title} />
            </div>

            <h1 className="visually-hidden">WTW</h1>

            <header className="page-header movie-card__head">
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
              <div className="movie-card__desc">
                <h2 className="movie-card__title">{title}</h2>
                <p className="movie-card__meta">
                  <span className="movie-card__genre">{genre}</span>
                  <span className="movie-card__year">{year}</span>
                </p>

                <div className="movie-card__buttons">
                  <button
                    className="btn btn--play movie-card__button"
                    type="button"
                    onClick={() => {
                      changeScreen(AppRoute.createParticularPlayerUrl(id));
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
                        changeFavoriteStatus(id);
                      } else {
                        changeScreen(AppRoute.SIGN_IN);
                      }
                    }}
                  >
                    {isFavorite ?
                      <svg viewBox="0 0 18 14" width="18" height="14">
                        <use xlinkHref="#in-list"></use>
                      </svg> :
                      <svg viewBox="0 0 19 20" width="19" height="20">
                        <use xlinkHref="#add"></use>
                      </svg>}
                    <span>My list</span>
                  </button>
                  <a href="add-review.html" className="btn movie-card__button">Add review</a>
                </div>
              </div>
            </div>
          </div>

          <div className="movie-card__wrap movie-card__translate-top">
            <div className="movie-card__info">
              <div className="movie-card__poster movie-card__poster--big">
                <img src={poster} alt={title + ` poster`} width="218" height="327" />
              </div>

              <FilmPageTabsWrapped
                film={this.props.film}
              />

            </div>
          </div>
        </section>

        <div className="page-content">
          <section className="catalog catalog--like-this">
            <h2 className="catalog__title">More like this</h2>

            <FilmsList
              films={similarFilms}
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
      </React.Fragment>
    );
  }

  componentDidUpdate(prevProps) {
    const {
      loadReviewsToFilm,
      film: {id}
    } = this.props;

    if (id !== prevProps.film.id) {
      loadReviewsToFilm(id);
    }
  }
}

FilmPage.propTypes = {
  authorizationStatus: PropValidator.AUTHORIZATION_STATUS,
  authInfo: PropValidator.AUTH_INFO,
  film: PropValidator.FILM,
  films: PropValidator.FILMS,
  onTitleClick: PropValidator.ON_TITLE_CLICK,
  changeScreen: PropValidator.CHANGE_SCREEN,
  loadReviewsToFilm: PropValidator.LOAD_REVIEWS_TO_FILM,
  changeFavoriteStatus: PropValidator.CHANGE_FAVORITE_STATUS
};

export default FilmPage;
