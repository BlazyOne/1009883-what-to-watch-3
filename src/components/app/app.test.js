import React from 'react';
import renderer from 'react-test-renderer';
import App from './app.jsx';

const promoFilm = {
  title: `The Grand Budapest Hotel`,
  genre: `Drama`,
  releaseDate: `2014`
};

const films = [`Fantastic Beasts`, `Bohemian Rhapsody`, `Macbeth`, `Aviator`, `Revenant`, `Johnny English`, `Shutter Island`, `Pulp Fiction`];

it(`Should App render correctly`, () => {
  const tree = renderer
    .create(<App
      promoFilm={promoFilm}
      films={films}
    />)
    .toJSON();

  expect(tree).toMatchSnapshot();
});
