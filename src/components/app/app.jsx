import React from 'react';
import PropTypes from 'prop-types';
import Main from '../main/main.jsx';

const App = (props) => {
  const {promoFilm, films} = props;

  return (
    <Main
      promoFilm={promoFilm}
      films={films}
    />
  );
};

App.propTypes = {
  promoFilm: PropTypes.shape({
    title: PropTypes.string.isRequired,
    genre: PropTypes.string.isRequired,
    releaseDate: PropTypes.string.isRequired
  }),
  films: PropTypes.arrayOf(PropTypes.string.isRequired)
};

export default App;
