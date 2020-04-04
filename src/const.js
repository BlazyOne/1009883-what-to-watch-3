const FilmInfoTabTypes = {
  OVERVIEW: `overview`,
  DETAILS: `details`,
  REVIEWS: `reviews`
};

const FILM_ID_STRING_ADDITION = `film_`;

const AppRoute = {
  MAIN: `/`,
  SIGN_IN: `/login`,
  MY_LIST: `/mylist`,
  FILM_GENERAL: `/films/:id`,
  createParticularFilmUrl(filmId) {
    const serverFilmId = +filmId.substring(FILM_ID_STRING_ADDITION.length);

    return `/films/${serverFilmId}`;
  },
  ADD_REVIEW_GENERAL: `/films/:id/review`,
  createParticularAddReviewUrl(filmId) {
    const serverFilmId = +filmId.substring(FILM_ID_STRING_ADDITION.length);

    return `/films/${serverFilmId}/review`;
  },
  PLAYER_GENERAL: `/player/:id`,
  createParticularPlayerUrl(filmId) {
    const serverFilmId = +filmId.substring(FILM_ID_STRING_ADDITION.length);

    return `/player/${serverFilmId}`;
  }
};

export {FilmInfoTabTypes, FILM_ID_STRING_ADDITION, AppRoute};
