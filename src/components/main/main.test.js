import React from 'react';
import renderer from 'react-test-renderer';
import Main from './main.jsx';

const promoFilm = {
  title: `The Grand Budapest Hotel`,
  genre: `Drama`,
  releaseDate: `2014`
};

const films = [`Fantastic Beasts`, `Bohemian Rhapsody`, `Macbeth`, `Aviator`, `Revenant`, `Johnny English`, `Shutter Island`, `Pulp Fiction`];

it(`Shold Main render correctly`, () => {
  const tree = renderer
    .create(<Main
      promoFilm={promoFilm}
      films={films}
      onTitleClick={() => {}}
    />)
    .toJSON();

  expect(tree).toMatchSnapshot();
});
