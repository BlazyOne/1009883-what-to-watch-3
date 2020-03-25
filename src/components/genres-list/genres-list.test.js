import React from 'react';
import renderer from 'react-test-renderer';
import GamesList from './genres-list.jsx';

const films = [
  {
    id: `film_1`,
    isFavorite: false,
    title: `Fantastic Beasts`,
    cardImage: `img/fantastic-beasts-the-crimes-of-grindelwald.jpg`,
    videoPreview: `https://upload.wikimedia.org/wikipedia/commons/transcoded/b/b3/Big_Buck_Bunny_Trailer_400p.ogv/Big_Buck_Bunny_Trailer_400p.ogv.360p.webm`,
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
  },
  {
    id: `film_2`,
    isFavorite: true,
    title: `Bohemian Rhapsody`,
    cardImage: `img/bohemian-rhapsody.jpg`,
    videoPreview: `https://upload.wikimedia.org/wikipedia/commons/transcoded/b/b3/Big_Buck_Bunny_Trailer_400p.ogv/Big_Buck_Bunny_Trailer_400p.ogv.360p.webm`,
    video: `https://upload.wikimedia.org/wikipedia/commons/transcoded/b/b3/Big_Buck_Bunny_Trailer_400p.ogv/Big_Buck_Bunny_Trailer_400p.ogv.360p.webm`,
    backgroundImage: `img/bohemian-rhapsody.jpg`,
    genre: `Drama`,
    year: `2018`,
    poster: `img/bohemian-rhapsody.jpg`,
    ratingScore: `8,9`,
    ratingCount: `240 ratings`,
    description: `The story of the legendary British rock band Queen and lead singer Freddie Mercury, leading up to their famous performance at Live Aid (1985).
Bohemian Rhapsody is a foot-stomping celebration of Queen, their music and their extraordinary lead singer Freddie Mercury. Freddie defied stereotypes and shattered convention to become one of the most beloved entertainers on the planet. The film traces the meteoric rise of the band through their iconic songs and revolutionary sound. They reach unparalleled success, but in an unexpected turn Freddie, surrounded by darker influences, shuns Queen in pursuit of his solo career. Having suffered greatly without the collaboration of Queen, Freddie manages to reunite with his bandmates just in time for Live Aid. While bravely facing a recent AIDS diagnosis, Freddie leads the band in one of the greatest performances in the history of rock music. Queen cements a legacy that continues to inspire outsiders, dreamers and music lovers to this day.`,
    director: `Bryan Singer`,
    starring: [`Rami Malek`, `Lucy Boynton`, `Gwilym Lee`, `Ben Hardy`, `Joseph Mazzello`, `Aidan Gillen`, `Allen Leech`, `Tom Hollander`, `Mike Myers`, `Aaron McCusker`, `Meneka Das`, `Ace Bhatti`],
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
  },
  {
    id: `film_3`,
    isFavorite: false,
    title: `Macbeth`,
    cardImage: `img/macbeth.jpg`,
    videoPreview: `https://upload.wikimedia.org/wikipedia/commons/transcoded/b/b3/Big_Buck_Bunny_Trailer_400p.ogv/Big_Buck_Bunny_Trailer_400p.ogv.360p.webm`,
    video: `https://upload.wikimedia.org/wikipedia/commons/transcoded/b/b3/Big_Buck_Bunny_Trailer_400p.ogv/Big_Buck_Bunny_Trailer_400p.ogv.360p.webm`,
    backgroundImage: `img/macbeth.jpg`,
    genre: `Drama`,
    year: `2015`,
    poster: `img/macbeth.jpg`,
    ratingScore: `8,9`,
    ratingCount: `240 ratings`,
    description: `Macbeth, the Thane of Glamis, receives a prophecy from a trio of witches that one day he will become King of Scotland. Consumed by ambition and spurred to action by his wife, Macbeth murders his king and takes the throne for himself.`,
    director: `Justin Kurzel`,
    starring: [`Jack Madigan`, `Frank Madigan`, `Michael Fassbender`, `Marion Cotillard`, `Paddy Considine`, `Lochlann Harris`, `Kayla Fallon`, `Lynn Kennedy`, `Seylan Baxter`, `Amber Rissmann`, `Scot Greenan`, `Hilton McRae`],
    runTime: `1h 53m`,
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
  },
  {
    id: `film_4`,
    isFavorite: false,
    title: `Aviator`,
    cardImage: `img/aviator.jpg`,
    videoPreview: `https://upload.wikimedia.org/wikipedia/commons/transcoded/b/b3/Big_Buck_Bunny_Trailer_400p.ogv/Big_Buck_Bunny_Trailer_400p.ogv.360p.webm`,
    video: `https://upload.wikimedia.org/wikipedia/commons/transcoded/b/b3/Big_Buck_Bunny_Trailer_400p.ogv/Big_Buck_Bunny_Trailer_400p.ogv.360p.webm`,
    backgroundImage: `img/aviator.jpg`,
    genre: `Drama`,
    year: `2005`,
    poster: `img/aviator.jpg`,
    ratingScore: `8,9`,
    ratingCount: `240 ratings`,
    description: `A biopic depicting the early years of legendary Director and aviator Howard Hughes' career from the late 1920s to the mid 1940s.
Biopic of billionaire Howard Hughes, starting with his early filmmaking years as owner of R.K.O. Pictures, but mostly focusing on his role in designing and promoting new aircraft. Hughes was a risk-taker spending several fortunes on designing experimental aircraft and eventually founding TWA as a rival to Pan Am airlines owned by his great rival Juan Trippe. When Trippe's politico Senator Ralph Owen Brewster accuses Hughes of being a war profiteer, it's Hughes who gains the upper hand. Hughes also had many women in his life including a long relationship with Katharine Hepburn. From an early age, however, Hughes was also germophobic and would have severe bouts of mental illness.`,
    director: `Martin Scorsese`,
    starring: [`Leonardo DiCaprio`, `Cate Blanchett`, `Kate Beckinsale`, `John C.Reilly`, `Alec Baldwin`, `Alan Alda`, `Ian Holm`, `Danny Huston`, `Gwen Stefani`, `Jude Law`, `Adam Scott`, `Matt Ross`],
    runTime: `2h 50m`,
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
  },
  {
    id: `film_5`,
    isFavorite: false,
    title: `We need to talk about Kevin`,
    cardImage: `img/we-need-to-talk-about-kevin.jpg`,
    videoPreview: `https://upload.wikimedia.org/wikipedia/commons/transcoded/b/b3/Big_Buck_Bunny_Trailer_400p.ogv/Big_Buck_Bunny_Trailer_400p.ogv.360p.webm`,
    video: `https://upload.wikimedia.org/wikipedia/commons/transcoded/b/b3/Big_Buck_Bunny_Trailer_400p.ogv/Big_Buck_Bunny_Trailer_400p.ogv.360p.webm`,
    backgroundImage: `img/we-need-to-talk-about-kevin.jpg`,
    genre: `Drama`,
    year: `2012`,
    poster: `img/we-need-to-talk-about-kevin.jpg`,
    ratingScore: `8,9`,
    ratingCount: `240 ratings`,
    description: `Kevin's mother struggles to love her strange child, despite the increasingly dangerous things he says and does as he grows up. But Kevin is just getting started, and his final act will be beyond anything anyone imagined.`,
    director: `Lynne Ramsay`,
    starring: [`Tilda Swinton`, `John C.Reilly`, `Ezra Miller`, `Jasper Newell`, `Rock Duer`, `Ashley Gerasimovich`, `Siobhan Fallon Hogan`, `Alex Manette`, `Kenneth Franklin`, `Leslie Lyles`, `Paul Diomede`, `Michael Campbell`],
    runTime: `1h 52m`,
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
  },
  {
    id: `film_6`,
    isFavorite: false,
    title: `What We Do in the Shadows`,
    cardImage: `img/what-we-do-in-the-shadows.jpg`,
    videoPreview: `https://upload.wikimedia.org/wikipedia/commons/transcoded/b/b3/Big_Buck_Bunny_Trailer_400p.ogv/Big_Buck_Bunny_Trailer_400p.ogv.360p.webm`,
    video: `https://upload.wikimedia.org/wikipedia/commons/transcoded/b/b3/Big_Buck_Bunny_Trailer_400p.ogv/Big_Buck_Bunny_Trailer_400p.ogv.360p.webm`,
    backgroundImage: `img/what-we-do-in-the-shadows.jpg`,
    genre: `Comedy`,
    year: `2015`,
    poster: `img/what-we-do-in-the-shadows.jpg`,
    ratingScore: `8,9`,
    ratingCount: `240 ratings`,
    description: `Follow the lives of Viago (Taika Waititi), Deacon (Jonathan Brugh), and Vladislav (Jemaine Clement) - three flatmates who are just trying to get by and overcome life's obstacles-like being immortal vampires who must feast on human blood. Hundreds of years old, the vampires are finding that beyond sunlight catastrophes, hitting the main artery, and not being able to get a sense of their wardrobe without a reflection-modern society has them struggling with the mundane like paying rent, keeping up with the chore wheel, trying to get into nightclubs, and overcoming flatmate conflicts.`,
    director: `Jemaine Clement, Taika Waititi`,
    starring: [`Jemaine Clement`, `Taika Waititi`, `Jonny Brugh`, `Cori Gonzalez-Macuer`, `Stu Rutherford`, `Ben Fransham`, `Jackie van Beek`, `Elena Stejko`, `Jason Hoyte`, `Karen O'Leary`, `Mike Minogue`, `Chelsie Preston Crayford`],
    runTime: `1h 26m`,
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
  },
  {
    id: `film_7`,
    isFavorite: false,
    title: `Revenant`,
    cardImage: `img/revenant.jpg`,
    videoPreview: `https://upload.wikimedia.org/wikipedia/commons/transcoded/b/b3/Big_Buck_Bunny_Trailer_400p.ogv/Big_Buck_Bunny_Trailer_400p.ogv.360p.webm`,
    video: `https://upload.wikimedia.org/wikipedia/commons/transcoded/b/b3/Big_Buck_Bunny_Trailer_400p.ogv/Big_Buck_Bunny_Trailer_400p.ogv.360p.webm`,
    backgroundImage: `img/revenant.jpg`,
    genre: `Adventure`,
    year: `2015`,
    poster: `img/revenant.jpg`,
    ratingScore: `8,9`,
    ratingCount: `240 ratings`,
    description: `Set in 1820s America, fur trapper and Frontiersman Hugh Glass struggles to survive the harsh winter after an oppressive Ree Indian attack and a mauling from a hostile maternal bear. Abandoned by his crew, Glass attempts to cross the bleak wasteland with only a single notion set in his mind; Revenge.
In the untamed and unforgiving wilderness of mid-winter snow-capped Missouri, the experienced nineteenth-century tracker, Hugh Glass, and his son, Hawk, lead a hunting and trapping expedition in the uncharted territory of the fierce Indian tribe, Arikara. As the party of trappers struggle to navigate back to the distant Fort Kiowa, a swift and devastating attack by a formidable grizzly bear leaves a brutally mauled Glass on the brink of death, double-crossed and abandoned by his men. Now, only Hugh's rabid desire to live can help him survive the piercing cold and the grave dangers in one of the world's most inhospitable environments, giving him the strength to drag his unrecognisable carcass and exact his revenge. However, will the man who has returned from the dead taste the ambrosial fruit of retribution?`,
    director: `Alejandro G. Iñárritu`,
    starring: [`Leonardo DiCaprio`, `Tom Hardy`, `Domhnall Gleeson`, `Will Poulter`, `Forrest Goodluck`, `Paul Anderson`, `Kristoffer Joner`, `Joshua Burge`, `Duane Howard`, `Melaw Nakehk'o`, `Fabrice Adde`, `Arthur RedCloud`],
    runTime: `2h 36m`,
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
  },
  {
    id: `film_8`,
    isFavorite: false,
    title: `Johnny English`,
    cardImage: `img/johnny-english.jpg`,
    videoPreview: `https://upload.wikimedia.org/wikipedia/commons/transcoded/b/b3/Big_Buck_Bunny_Trailer_400p.ogv/Big_Buck_Bunny_Trailer_400p.ogv.360p.webm`,
    video: `https://upload.wikimedia.org/wikipedia/commons/transcoded/b/b3/Big_Buck_Bunny_Trailer_400p.ogv/Big_Buck_Bunny_Trailer_400p.ogv.360p.webm`,
    backgroundImage: `img/johnny-english.jpg`,
    genre: `Comedy`,
    year: `2003`,
    poster: `img/johnny-english.jpg`,
    ratingScore: `8,9`,
    ratingCount: `240 ratings`,
    description: `After a sudden attack on MI5, Johnny English, Britain's most confident, yet unintelligent spy, becomes Britain's only spy.
When a funeral of a British spy is attacked, all of the remaining spies are killed. Only one spy is left and is now Britain's last hope. Johnny English and his sidekick, Bough have been assigned the case of investigating the theft of the British Crown Jewels. The prime suspect is a mysterious French entrepreneur, known as Pascal Sauvage. English and Bough soon find out the horrifying truth behind the theft and Sauvage, but it's not going to be an easy job to bring him to justice.`,
    director: `Peter Howitt`,
    starring: [`Rowan Atkinson`, `Tasha de Vasconcelos`, `Ben Miller`, `Greg Wise`, `Douglas McFerran`, `Steve Nicolson`, `Terence Harvey`, `Kevin McNally`, `Tim Pigott-Smith`, `Nina Young`, `Rowland Davies`, `Natalie Imbruglia`],
    runTime: `1h 28m`,
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
  }
];

it(`Shold GenresList render correctly`, () => {
  const tree = renderer
    .create(<GamesList
      films={films}
      genre={`All`}
      onGenreChange={() => {}}
    />).toJSON();

  expect(tree).toMatchSnapshot();
});
