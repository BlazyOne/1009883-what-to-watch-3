import React, {PureComponent} from 'react';
import {Switch, Route, Redirect, Router} from 'react-router-dom';
import {connect} from 'react-redux';
import {ActionCreator} from '../../reducer/view-state/viewState.js';
import {Operation as UserOperation, AuthorizationStatus} from '../../reducer/user/user.js';
import {Operation as DataOperation} from '../../reducer/data/data.js';
import Main from '../main/main.jsx';
import SignIn from '../sign-in/sign-in.jsx';
import FilmPage from '../film-page/film-page.jsx';
import FullScreenPlayer from '../full-screen-player/full-screen-player.jsx';
import MyList from '../my-list/my-list.jsx';
import AddReview from '../add-review/add-review.jsx';
import PrivateRoute from '../private-route/private-route.jsx';
import withVideoPlayer from '../../hocs/with-video-player/with-video-player.jsx';
import withError from '../../hocs/with-error/with-error.jsx';
import {PropValidator} from '../../prop-validator/prop-validator.js';
import {getGenre, getShowedFilmsAmount} from '../../reducer/view-state/selectors.js';
import {getFilms, getPromoFlm} from '../../reducer/data/selectors.js';
import {getAuthorizationStatus, getAuthInfo} from '../../reducer/user/selectors.js';
import history from '../../history.js';
import {AppRoute, filmIdStringAddition} from '../../const.js';

const FullScreenPlayerWrapped = withVideoPlayer(FullScreenPlayer);
const SignInWrapped = withError(SignIn);
const AddReviewWrapped = withError(AddReview);

class App extends PureComponent {
  constructor(props) {
    super(props);

    this.changeScreen = this.changeScreen.bind(this);
  }

  changeScreen(screenUrl) {
    history.push(screenUrl);
  }

  render() {
    const {authorizationStatus, authInfo, login, promoFilm, films, showedFilmsAmount, genre, onGenreChange, onIncrementShowed, loadReviewsToFilm, changeFavoriteStatus, postReview} = this.props;

    return (
      <Router
        history={history}
      >
        <Switch>
          <Route exact path={AppRoute.MAIN}>
            <Main
              authorizationStatus={authorizationStatus}
              authInfo={authInfo}
              promoFilm={promoFilm}
              films={films}
              showedFilmsAmount={showedFilmsAmount}
              genre={genre}
              onTitleClick={(evt) => {
                evt.preventDefault();
              }}
              changeScreen={this.changeScreen}
              onGenreChange={onGenreChange}
              onIncrementShowed={onIncrementShowed}
              changeFavoriteStatus={changeFavoriteStatus}
            />
          </Route>
          <Route
            exact
            path={AppRoute.SIGN_IN}
            render={() => {
              if (authorizationStatus === AuthorizationStatus.AUTH) {
                return (
                  <Redirect to={AppRoute.MAIN} />
                );
              } else {
                return (
                  <SignInWrapped
                    authorizationStatus={authorizationStatus}
                    onSubmit={login}
                    changeScreen={this.changeScreen}
                  />
                );
              }
            }}
          />
          <Route
            exact
            path={AppRoute.FILM_GENERAL}
            render={(routeProps) => {
              const {match: {params: {id: routeId}}} = routeProps;
              const clientId = `${filmIdStringAddition}${routeId}`;
              const filmIndex = films.findIndex((film) => film.id === clientId);

              return (
                <FilmPage
                  authorizationStatus={authorizationStatus}
                  authInfo={authInfo}
                  film={films[filmIndex] ?
                    films[filmIndex] :
                    promoFilm}
                  films={films}
                  onTitleClick={(evt) => {
                    evt.preventDefault();
                  }}
                  changeScreen={this.changeScreen}
                  loadReviewsToFilm={loadReviewsToFilm}
                  changeFavoriteStatus={changeFavoriteStatus}
                />
              );
            }}
          />
          <Route
            exact
            path={AppRoute.PLAYER_GENERAL}
            render={(routeProps) => {
              const {match: {params: {id: routeId}}} = routeProps;
              const clientId = `${filmIdStringAddition}${routeId}`;
              const filmIndex = films.findIndex((film) => film.id === clientId);

              return (
                <FullScreenPlayerWrapped
                  film={films[filmIndex] ?
                    films[filmIndex] :
                    promoFilm}
                  changeScreen={this.changeScreen}
                />
              );
            }}
          />
          <PrivateRoute
            exact
            path={AppRoute.MY_LIST}
            render={() => {
              return (
                <MyList
                  authInfo={authInfo}
                  films={films}
                  onTitleClick={(evt) => {
                    evt.preventDefault();
                  }}
                  changeScreen={this.changeScreen}
                />
              );
            }}
          />
          <PrivateRoute
            exact
            path={AppRoute.ADD_REVIEW_GENERAL}
            render={(routeProps) => {
              const {match: {params: {id: routeId}}} = routeProps;
              const clientId = `${filmIdStringAddition}${routeId}`;
              const filmIndex = films.findIndex((film) => film.id === clientId);

              return (
                <AddReviewWrapped
                  authInfo={authInfo}
                  film={films[filmIndex] ?
                    films[filmIndex] :
                    promoFilm}
                  changeScreen={this.changeScreen}
                  postReview={postReview}
                />
              );
            }}
          />
        </Switch>
      </Router>
    );
  }
}

App.propTypes = {
  authorizationStatus: PropValidator.AUTHORIZATION_STATUS,
  authInfo: PropValidator.AUTH_INFO,
  login: PropValidator.LOGIN,
  promoFilm: PropValidator.FILM,
  films: PropValidator.FILMS,
  showedFilmsAmount: PropValidator.SHOWED_FILMS_AMOUNT,
  genre: PropValidator.GENRE,
  onGenreChange: PropValidator.ON_GENRE_CHANGE,
  onIncrementShowed: PropValidator.ON_INCREMENT_SHOWED,
  loadReviewsToFilm: PropValidator.LOAD_REVIEWS_TO_FILM,
  changeFavoriteStatus: PropValidator.CHANGE_FAVORITE_STATUS,
  postReview: PropValidator.POST_REVIEW
};

const mapStateToProps = (state) => ({
  authorizationStatus: getAuthorizationStatus(state),
  authInfo: getAuthInfo(state),
  promoFilm: getPromoFlm(state),
  films: getFilms(state),
  genre: getGenre(state),
  showedFilmsAmount: getShowedFilmsAmount(state)
});

const mapDispatchToProps = (dispatch) => ({
  login(authData, onError) {
    dispatch(UserOperation.login(authData, onError));
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
  },
  changeFavoriteStatus(filmId) {
    dispatch(DataOperation.changeFavoriteStatus(filmId));
  },
  postReview(filmId, reviewData, onSuccess, onError) {
    dispatch(DataOperation.postReview(filmId, reviewData, onSuccess, onError));
  }
});

export {App};
export default connect(mapStateToProps, mapDispatchToProps)(App);
