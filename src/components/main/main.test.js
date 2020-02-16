import React from 'react';
import renderer from 'react-test-renderer';
import Main from './main.jsx';

const promoFilm = {
  title: `The Grand Budapest Hotel`,
  genre: `Drama`,
  releaseDate: `2014`
};

const films = [
  {
    id: `film_1`,
    title: `Fantastic Beasts`,
    image: `img/fantastic-beasts-the-crimes-of-grindelwald.jpg`
  },
  {
    id: `film_2`,
    title: `Bohemian Rhapsody`,
    image: `img/bohemian-rhapsody.jpg`
  },
  {
    id: `film_3`,
    title: `Macbeth`,
    image: `img/macbeth.jpg`
  },
  {
    id: `film_4`,
    title: `Aviator`,
    image: `img/aviator.jpg`
  },
  {
    id: `film_5`,
    title: `We need to talk about Kevin`,
    image: `img/we-need-to-talk-about-kevin.jpg`
  },
  {
    id: `film_6`,
    title: `What We Do in the Shadows`,
    image: `img/what-we-do-in-the-shadows.jpg`
  },
  {
    id: `film_7`,
    title: `Revenant`,
    image: `img/revenant.jpg`
  },
  {
    id: `film_8`,
    title: `Johnny English`,
    image: `img/johnny-english.jpg`
  },
];

it(`Shold Main render correctly`, () => {
  const tree = renderer
    .create(<Main
      promoFilm={promoFilm}
      films={films}
      onTitleClick={() => {}}
      onCardClick={() => { }}
    />)
    .toJSON();

  expect(tree).toMatchSnapshot();
});
