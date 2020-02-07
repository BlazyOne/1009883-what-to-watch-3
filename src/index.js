import React from 'react';
import ReactDOM from 'react-dom';
import App from './components/app/app.jsx';

const settings = {
  promoFilm: {
    title: `The Grand Budapest Hotel`,
    genre: `Drama`,
    releaseDate: `2014`
  },
  films: [`Fantastic Beasts`, `Bohemian Rhapsody`, `Macbeth`, `Aviator`, `Revenant`, `Johnny English`, `Shutter Island`, `Pulp Fiction`]
};

ReactDOM.render(
    <App
      promoFilm={settings.promoFilm}
      films={settings.films}
    />,
    document.querySelector(`#root`)
);
