import React from 'react';
import renderer from 'react-test-renderer';
import FilmCard from './film-card';

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

it(`Should FilmCard render correctly`, () => {
  const tree = renderer
    .create(<FilmCard
      film={film}
      onTitleClick={() => {}}
      onCardClick={() => { }}
      onMouseOverCard={() => {}}
      renderVideoPlayer={() => {}}
      onStartPlaying={() => {}}
      onStopPlaying={() => {}}
    />)
    .toJSON();

  expect(tree).toMatchSnapshot();
});
