import React from 'react';
import renderer from 'react-test-renderer';
import FilmCard from './film-card';

const film = {
  id: `film_1`,
  title: `Fantastic Beasts`,
  cardImage: `img/fantastic-beasts-the-crimes-of-grindelwald.jpg`,
  video: `https://upload.wikimedia.org/wikipedia/commons/transcoded/b/b3/Big_Buck_Bunny_Trailer_400p.ogv/Big_Buck_Bunny_Trailer_400p.ogv.360p.webm`,
  backgroundImage: `img/fantastic-beasts-the-crimes-of-grindelwald.jpg`,
  genre: `Adventure`,
  year: `2018`,
  poster: `img/fantastic-beasts-the-crimes-of-grindelwald.jpg`,
  ratingScore: `8,9`,
  ratingCount: `240 ratings`,
  description: `The second installment of the "Fantastic Beasts" series featuring the adventures of Magizoologist Newt Scamander.
In an effort to thwart Grindelwald's plans of raising pure-blood wizards to rule over all non-magical beings, Albus Dumbledore enlists his former student Newt Scamander, who agrees to help, though he's unaware of the dangers that lie ahead. Lines are drawn as love and loyalty are tested, even among the truest friends and family, in an increasingly divided wizarding world.`,
  director: `David Yates`,
  starring: [`Johnny Depp`, `Kevin Guthrie`, `Carmen Ejogo`, `Wolf Roth`, `Eddie Redmayne`, `Zoë Kravitz`, `Callum Turner`, `Derek Riddell`, `Cornell John`, `Ezra Miller`, `Ingvar Sigurdsson`, `Poppy Corby`],
  runTime: `2h 14m`,
  reviews: [
    {
      author: `Kate Muir`,
      date: `December 24, 2016`,
      reviewRating: `8,9`,
      message: `Discerning travellers and Wes Anderson fans will luxuriate in the glorious Mittel-European kitsch of one of the director's funniest and most exquisitely designed movies in years.`
    },
    {
      author: `Bill Goodykoontz`,
      date: `November 18, 2015`,
      reviewRating: `8,0`,
      message: `Anderson's films are too precious for some, but for those of us willing to lose ourselves in them, they're a delight. "The Grand Budapest Hotel" is no different, except that he has added a hint of gravitas to the mix, improving the recipe.`
    },
    {
      author: `Amanda Greever`,
      date: `November 18, 2015`,
      reviewRating: `8,0`,
      message: `I didn't find it amusing, and while I can appreciate the creativity, it's an hour and 40 minutes I wish I could take back.`
    },
    {
      author: `Matthew Lickona`,
      date: `December 20, 2016`,
      reviewRating: `7,2`,
      message: `The mannered, madcap proceedings are often delightful, occasionally silly, and here and there, gruesome and/or heartbreaking.`
    },
    {
      author: `Paula Fleri-Soler`,
      date: `December 20, 2016`,
      reviewRating: `7,6`,
      message: `It is certainly a magical and childlike way of storytelling, even if the content is a little more adult.`
    },
    {
      author: `Paula Fleri-Soler`,
      date: `December 20, 2016`,
      reviewRating: `7,0`,
      message: `It is certainly a magical and childlike way of storytelling, even if the content is a little more adult.`
    }
  ]
};

it(`Should FilmCard render correctly`, () => {
  const tree = renderer
    .create(<FilmCard
      film={film}
      onTitleClick={() => {}}
      onCardClick={() => {}}
      renderVideoPlayer={() => {}}
      onStartPlaying={() => {}}
      onStopPlaying={() => {}}
    />)
    .toJSON();

  expect(tree).toMatchSnapshot();
});
