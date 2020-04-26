const FilmInfoTabTypes = {
  OVERVIEW: `overview`,
  DETAILS: `details`,
  REVIEWS: `reviews`
};

const FILM_ID_STRING_ADDITION = `film_`;

const ROUTER_BASENAME = `/wtw-githubpages`;

const ROUTE_PREFIX = ROUTER_BASENAME === `/` ? `` : ROUTER_BASENAME;

const AppRoute = {
  MAIN: ROUTER_BASENAME,
  SIGN_IN: `${ROUTE_PREFIX}/login`,
  MY_LIST: `${ROUTE_PREFIX}/mylist`,
  FILM_GENERAL: `${ROUTE_PREFIX}/films/:id`,
  createParticularFilmUrl(filmId) {
    const serverFilmId = +filmId.substring(FILM_ID_STRING_ADDITION.length);

    return `${ROUTE_PREFIX}/films/${serverFilmId}`;
  },
  ADD_REVIEW_GENERAL: `${ROUTE_PREFIX}/films/:id/review`,
  createParticularAddReviewUrl(filmId) {
    const serverFilmId = +filmId.substring(FILM_ID_STRING_ADDITION.length);

    return `${ROUTE_PREFIX}/films/${serverFilmId}/review`;
  },
  PLAYER_GENERAL: `${ROUTE_PREFIX}/player/:id`,
  createParticularPlayerUrl(filmId) {
    const serverFilmId = +filmId.substring(FILM_ID_STRING_ADDITION.length);

    return `${ROUTE_PREFIX}/player/${serverFilmId}`;
  }
};

export {FilmInfoTabTypes, FILM_ID_STRING_ADDITION, AppRoute};
