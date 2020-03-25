import React, {PureComponent} from 'react';
import {Switch, Route, BrowserRouter} from 'react-router-dom';
import {connect} from 'react-redux';
import {ActionCreator} from '../../reducer/view-state/viewState.js';
import {Operation as UserOperation} from '../../reducer/user/user.js';
import {Operation as DataOperation} from '../../reducer/data/data.js';
import Main from '../main/main.jsx';
import FilmPage from '../film-page/film-page.jsx';
import FullScreenPlayer from '../full-screen-player/full-screen-player.jsx';
import withVideoPlayer from '../../hocs/with-video-player/with-video-player.jsx';
import {PropValidator} from '../../prop-validator/prop-validator.js';
import {getGenre, getShowedFilmsAmount} from '../../reducer/view-state/selectors.js';
import {getFilms, getPromoFlm} from '../../reducer/data/selectors.js';
import {getAuthorizationStatus} from '../../reducer/user/selectors.js';

const FullScreenPlayerWrapped = withVideoPlayer(FullScreenPlayer);

class App extends PureComponent {
  constructor(props) {
    super(props);

    this.state = {
      screen: `main`
    };
  }

  _renderApp() {
    const {promoFilm, films, showedFilmsAmount, genre, onGenreChange, onIncrementShowed, loadReviewsToFilm} = this.props;
    const {screen} = this.state;

    if (screen === `main`) {
      return (
        <Main
          promoFilm={promoFilm}
          films={films}
          showedFilmsAmount={showedFilmsAmount}
          genre={genre}
          onTitleClick={(evt) => {
            evt.preventDefault();
          }}
          changeScreen={(newScreen) => {
            this.setState(() => ({
              screen: newScreen,
            }));

            if (newScreen.substring(0, 5) === `film_`) {
              loadReviewsToFilm(newScreen);
            }
          }}
          onGenreChange={onGenreChange}
          onIncrementShowed={onIncrementShowed}
        />
      );
    }

    const filmIndex = films.findIndex((film) => film.id === screen);
    if (filmIndex > -1) {
      return (
        <FilmPage
          film={films[filmIndex]}
          films={films}
          onTitleClick={(evt) => {
            evt.preventDefault();
          }}
          changeScreen={(newScreen) => {
            this.setState(() => ({
              screen: newScreen,
            }));

            if (newScreen.substring(0, 5) === `film_`) {
              loadReviewsToFilm(newScreen);
            }
          }}
        />
      );
    }

    if (screen.substring(0, 7) === `player_`) {
      const index = films.findIndex((film) => film.id === screen.substring(7));
      if (index > -1) {
        return (
          <FullScreenPlayerWrapped
            film={films[index]}
            changeScreen={(newScreen) => {
              this.setState(() => ({
                screen: newScreen,
              }));

              if (newScreen.substring(0, 5) === `film_`) {
                loadReviewsToFilm(newScreen);
              }
            }}
          />
        );
      }
    }

    return null;
  }

  render() {
    return (
      <BrowserRouter>
        <Switch>
          <Route exact path="/">
            {this._renderApp()}
          </Route>
          <Route exact path="/dev-film-page">
            <FilmPage
              film={this.props.films[0]}
              films={this.props.films}
              onTitleClick={(evt) => {
                evt.preventDefault();
              }}
              changeScreen={(newScreen) => {
                this.setState(() => ({
                  screen: newScreen,
                }));
              }}
            />
          </Route>
          <Route exact path="/dev-full-screen-player">
            <FullScreenPlayerWrapped
              film={this.props.films[0]}
              changeScreen={(newScreen) => {
                this.setState(() => ({
                  screen: newScreen,
                }));
              }}
            />
          </Route>
        </Switch>
      </BrowserRouter>
    );
  }
}

App.propTypes = {
  authorizationStatus: PropValidator.AUTHORIZATION_STATUS,
  login: PropValidator.LOGIN,
  promoFilm: PropValidator.FILM,
  films: PropValidator.FILMS,
  showedFilmsAmount: PropValidator.SHOWED_FILMS_AMOUNT,
  genre: PropValidator.GENRE,
  onGenreChange: PropValidator.ON_GENRE_CHANGE,
  onIncrementShowed: PropValidator.ON_INCREMENT_SHOWED,
  loadReviewsToFilm: PropValidator.LOAD_REVIEWS_TO_FILM
};

const mapStateToProps = (state) => ({
  authorizationStatus: getAuthorizationStatus(state),
  promoFilm: getPromoFlm(state),
  films: getFilms(state),
  genre: getGenre(state),
  showedFilmsAmount: getShowedFilmsAmount(state)
});

const mapDispatchToProps = (dispatch) => ({
  login(authData) {
    dispatch(UserOperation.login(authData));
  },
  onGenreChange(genre) {
    dispatch(ActionCreator.changeGenre(genre));
    dispatch(ActionCreator.resetShowed());
  },
  onIncrementShowed() {
    dispatch(ActionCreator.incrementShowed());
  },
  loadReviewsToFilm(filmId) {
    dispatch(DataOperation.loadReviewsToFilm(filmId));
  }
});

export {App};
export default connect(mapStateToProps, mapDispatchToProps)(App);
