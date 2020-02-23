import React from 'react';
import Enzyme, {shallow} from 'enzyme';
import Adapter from 'enzyme-adapter-react-16';
import FilmCard from './film-card.jsx';

const film = {
  id: `film_1`,
  title: `Fantastic Beasts`,
  cardImage: `img/fantastic-beasts-the-crimes-of-grindelwald.jpg`,
  video: `https://upload.wikimedia.org/wikipedia/commons/transcoded/b/b3/Big_Buck_Bunny_Trailer_400p.ogv/Big_Buck_Bunny_Trailer_400p.ogv.360p.webm`,
  backgroundImage: `img/fantastic-beasts-the-crimes-of-grindelwald.jpg`,
  genre: `Adventure, Family, Fantasy`,
  year: `2018`,
  poster: `img/fantastic-beasts-the-crimes-of-grindelwald.jpg`,
  ratingScore: `8,9`,
  ratingLevel: `Very good`,
  ratingCount: `240 ratings`,
  description: `The second installment of the "Fantastic Beasts" series featuring the adventures of Magizoologist Newt Scamander.
In an effort to thwart Grindelwald's plans of raising pure-blood wizards to rule over all non-magical beings, Albus Dumbledore enlists his former student Newt Scamander, who agrees to help, though he's unaware of the dangers that lie ahead. Lines are drawn as love and loyalty are tested, even among the truest friends and family, in an increasingly divided wizarding world.`,
  director: `David Yates`,
  starring: `Eddie Redmayne, Katherine Waterston, Dan Fogler `
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
        renderVideoPlayer={() => {}}
        onStartPlaying={() => {}}
        onStopPlaying={() => {}}
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
        renderVideoPlayer={() => {}}
        onStartPlaying={() => {}}
        onStopPlaying={() => {}}
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
        renderVideoPlayer={() => {}}
        onStartPlaying={() => {}}
        onStopPlaying={() => {}}
      />
  );

  const card = filmCard.find(`.small-movie-card`);
  card.simulate(`mouseover`);

  expect(onMouseOverCard).toHaveBeenCalledTimes(1);

  expect(onMouseOverCard).toHaveBeenNthCalledWith(1, `film_1`);
});
