import React from 'react';
import Enzyme, {shallow} from 'enzyme';
import Adapter from 'enzyme-adapter-react-16';
import FilmCard from './film-card.jsx';

const film = {
  id: `film_1`,
  title: `Fantastic Beasts`,
  image: `img/fantastic-beasts-the-crimes-of-grindelwald.jpg`
};

Enzyme.configure({
  adapter: new Adapter()
});

it(`Should title be clicked`, () => {
  const onTitleClick = jest.fn();

  const filmCard = shallow(
      <FilmCard
        film={film}
        onTitleClick={onTitleClick}
        onCardClick={() => {}}
        onMouseOverCard={() => {}}
      />
  );

  const title = filmCard.find(`.small-movie-card__title`);
  title.simulate(`click`);

  expect(onTitleClick.mock.calls.length).toBe(1);
});

it(`Should card be clicked`, () => {
  const onCardClick = jest.fn();

  const filmCard = shallow(
      <FilmCard
        film={film}
        onTitleClick={() => {}}
        onCardClick={onCardClick}
        onMouseOverCard={() => {}}
      />
  );

  const card = filmCard.find(`.small-movie-card`);
  card.simulate(`click`);

  expect(onCardClick).toHaveBeenCalledTimes(1);
});

it(`The card id passed to callback is right`, () => {
  const onMouseOverCard = jest.fn();

  const filmCard = shallow(
      <FilmCard
        film={film}
        onTitleClick={() => {}}
        onCardClick={() => {}}
        onMouseOverCard={onMouseOverCard}
      />
  );

  const card = filmCard.find(`.small-movie-card`);
  card.simulate(`mouseover`);

  expect(onMouseOverCard).toHaveBeenCalledTimes(1);

  expect(onMouseOverCard).toHaveBeenNthCalledWith(1, `film_1`);
});
