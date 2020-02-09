import React from 'react';
import Enzyme, {shallow} from 'enzyme';
import Adapter from 'enzyme-adapter-react-16';
import Main from './main.jsx';

const promoFilm = {
  title: `The Grand Budapest Hotel`,
  genre: `Drama`,
  releaseDate: `2014`
};

const films = [`Fantastic Beasts`, `Bohemian Rhapsody`, `Macbeth`, `Aviator`, `Revenant`, `Johnny English`, `Shutter Island`, `Pulp Fiction`];

Enzyme.configure({
  adapter: new Adapter()
});

it(`Should title be clicked`, () => {
  const onTitleClick = jest.fn();

  const main = shallow(
      <Main
        promoFilm={promoFilm}
        films={films}
        onTitleClick={onTitleClick}
      />
  );

  const titles = main.find(`.small-movie-card__title`);

  titles.forEach((title) => title.simulate(`click`));

  expect(onTitleClick.mock.calls.length).toBe(films.length);
});
