import React from 'react';
import ReactDOM from 'react-dom';
import App from './components/app/app.jsx';
import films from './mocks/films.js';

const settings = {
  promoFilm: {
    title: `The Grand Budapest Hotel`,
    genre: `Drama`,
    releaseDate: `2014`
  }
};

ReactDOM.render(
    <App
      promoFilm={settings.promoFilm}
      films={films}
    />,
    document.querySelector(`#root`)
);
