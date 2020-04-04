import {FILM_ID_STRING_ADDITION} from './const.js';

const transformFilmFromServerToClient = (data) => {
  return {
    id: FILM_ID_STRING_ADDITION + data.id,
    title: data.name,
    poster: data.poster_image,
    cardImage: data.preview_image,
    backgroundImage: data.background_image,
    video: data.video_link,
    videoPreview: data.preview_video_link,
    description: data.description,
    ratingScore: `${data.rating}`.replace(`.`, `,`),
    ratingCount: data.scores_count + ` ratings`,
    director: data.director,
    starring: data.starring,
    runTime: `${Math.floor(data.run_time / 60)}h ${data.run_time % 60}m`,
    genre: data.genre,
    year: `` + data.released,
    isFavorite: data.is_favorite,
    reviews: []
  };
};

const transformReviewFromServerToClient = (data) => {
  return {
    author: data.user.name,
    date: new Intl.DateTimeFormat(`en-US`, {month: `long`, day: `numeric`, year: `numeric`}).format(new Date(data.date)),
    reviewRating: `${data.rating}`.replace(`.`, `,`),
    message: data.comment
  };
};

const transformAuthInfoFromServerToClient = (data) => {
  return {
    id: data.id,
    email: data.email,
    name: data.name,
    avatarUrl: data.avatar_url
  };
};

export {transformFilmFromServerToClient, transformReviewFromServerToClient, transformAuthInfoFromServerToClient};
