import React from 'react';
import Main from '../main/main.jsx';
import {PropValidator} from '../../prop-validator/prop-validator.jsx';

const onTitleClick = () => {};

const App = (props) => {
  const {promoFilm, films} = props;

  return (
    <Main
      promoFilm={promoFilm}
      films={films}
      onTitleClick={onTitleClick}
    />
  );
};

App.propTypes = {
  promoFilm: PropValidator.PROMO_FILM,
  films: PropValidator.FILMS
};

export default App;
