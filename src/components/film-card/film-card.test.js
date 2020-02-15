import React from 'react';
import renderer from 'react-test-renderer';
import FilmCard from './film-card';

const film = {
  id: `film_1`,
  title: `Fantastic Beasts`,
  image: `img/fantastic-beasts-the-crimes-of-grindelwald.jpg`
};

it(`Should FilmCard render correctly`, () => {
  const tree = renderer
    .create(<FilmCard
      film={film}
      onTitleClick={() => {}}
      onMouseOverCard={() => {}}
    />)
    .toJSON();

  expect(tree).toMatchSnapshot();
});
