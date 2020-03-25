const transformFilmFromServerToClient = (data) => {
  return {
    id: `film_` + data.id,
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
    date: new Intl.DateTimeFormat(`en-US`, {month: `long`}).format(new Date(data.date)),
    reviewRating: `${data.rating}`.replace(`.`, `,`),
    message: data.comment
  };
};

export {transformFilmFromServerToClient, transformReviewFromServerToClient};