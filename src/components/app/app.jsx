import React, {PureComponent} from 'react';
import {Switch, Route, BrowserRouter} from "react-router-dom";
import {connect} from 'react-redux';
import {ActionCreator} from '../../reducer/reducer.js';
import Main from '../main/main.jsx';
import FilmPage from '../film-page/film-page.jsx';
import {PropValidator} from '../../prop-validator/prop-validator.js';

class App extends PureComponent {
  constructor(props) {
    super(props);

    this.state = {
      screen: `main`
    };
  }

  _renderApp() {
    const {promoFilm, films, genre, onGenreChange} = this.props;
    const {screen} = this.state;

    if (screen === `main`) {
      return (
        <Main
          promoFilm={promoFilm}
          films={films}
          genre={genre}
          onTitleClick={(evt) => {
            evt.preventDefault();
          }}
          onCardClick={(filmId) => {
            this.setState(() => ({
              screen: filmId,
            }));
          }}
          onGenreChange={onGenreChange}
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
          onCardClick={(filmId) => {
            this.setState(() => ({
              screen: filmId,
            }));
          }}
        />
      );
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
              onCardClick={(filmId) => {
                this.setState(() => ({
                  screen: filmId,
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
  promoFilm: PropValidator.FILM,
  films: PropValidator.FILMS,
  genre: PropValidator.GENRE,
  onGenreChange: PropValidator.ON_GENRE_CHANGE
};

const mapStateToProps = (state) => ({
  promoFilm: state.promoFilm,
  films: state.films,
  genre: state.genre
});

const mapDispatchToProps = (dispatch) => ({
  onGenreChange(genre) {
    dispatch(ActionCreator.changeGenre(genre));
  }
});

export {App};
export default connect(mapStateToProps, mapDispatchToProps)(App);
