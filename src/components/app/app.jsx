import React, {PureComponent} from 'react';
import {Switch, Route, BrowserRouter} from "react-router-dom";
import Main from '../main/main.jsx';
import FilmPage from '../film-page/film-page.jsx';
import {PropValidator} from '../../prop-validator/prop-validator.js';

const filmInfo = {
  id: `film_0`,
  backgroundImage: `img/bg-the-grand-budapest-hotel.jpg`,
  title: `The Grand Budapest Hotel`,
  genre: `Drama`,
  year: `2014`,
  poster: `img/the-grand-budapest-hotel-poster.jpg`,
  ratingScore: `8,9`,
  ratingLevel: `Very good`,
  ratingCount: `240 ratings`,
  description: `In the 1930s, the Grand Budapest Hotel is a popular European ski resort, presided over by concierge Gustave H. (Ralph Fiennes). Zero, a junior lobby boy, becomes Gustave's friend and protege.
  Gustave prides himself on providing first-class service to the hotel's guests, including satisfying the sexual needs of the many elderly women who stay there. When one of Gustave's lovers dies mysteriously, Gustave finds himself the recipient of a priceless painting and the chief suspect in her murder.`,
  director: `Wes Andreson`,
  starring: `Bill Murray, Edward Norton, Jude Law, Willem Dafoe and other`
};

class App extends PureComponent {
  constructor(props) {
    super(props);

    this.state = {
      screen: `main`
    };
  }

  _renderApp() {
    const {promoFilm, films} = this.props;
    const {screen} = this.state;

    if (screen === `main`) {
      return (
        <Main
          promoFilm={promoFilm}
          films={films}
          onTitleClick={(evt) => {
            evt.preventDefault();
          }}
          onCardClick={() => {
            this.setState(() => ({
              screen: `film`,
            }));
          }}
        />
      );
    }

    if (screen === `film`) {
      return (
        <FilmPage
          filmInfo={filmInfo}
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
              filmInfo={filmInfo}
            />
          </Route>
        </Switch>
      </BrowserRouter>
    );
  }
}

App.propTypes = {
  promoFilm: PropValidator.PROMO_FILM,
  films: PropValidator.FILMS
};

export default App;
