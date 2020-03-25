import {extend} from '../../utils.js';
import {transformFilmFromServerToClient, transformReviewFromServerToClient} from '../../adapter.js';

const initialState = {
  films: [],
  promoFilm: {}
};

const ActionType = {
  LOAD_FILMS: `LOAD_FILMS`,
  LOAD_PROMO_FILM: `LOAD_PROMO_FILM`,
  LOAD_REVIEWS_TO_FILM: `LOAD_REVIEWS_TO_FILM`
};

const ActionCreator = {
  loadFilms: (films) => {
    return {
      type: ActionType.LOAD_FILMS,
      payload: films
    };
  },
  loadPromoFilm: (film) => {
    return {
      type: ActionType.LOAD_PROMO_FILM,
      payload: film
    };
  },
  loadReviewsToFilm: (filmId, reviews) => {
    return {
      type: ActionType.LOAD_REVIEWS_TO_FILM,
      payload: {filmId, reviews}
    };
  }
};

const Operation = {
  loadFilms: () => (dispatch, getState, api) => {
    return api.get(`/films`)
      .then((response) => {
        return response.data.map((film) => transformFilmFromServerToClient(film));
      })
      .then((data) => {
        dispatch(ActionCreator.loadFilms(data));
      });
  },
  loadPromoFilm: () => (dispatch, getState, api) => {
    return api.get(`/films/promo`)
      .then((response) => {
        return transformFilmFromServerToClient(response.data);
      })
      .then((data) => {
        dispatch(ActionCreator.loadPromoFilm(data));
      });
  },
  loadReviewsToFilm: (filmId) => (dispatch, getState, api) => {
    const serverFilmId = +filmId.substring(5);

    return api.get(`/comments/${serverFilmId}`)
      .then((response) => {
        return response.data.map((review) => transformReviewFromServerToClient(review));
      })
      .then((data) => {
        dispatch(ActionCreator.loadReviewsToFilm(filmId, data));
      });
  }
};

const reducer = (state = initialState, action) => {
  switch (action.type) {
    case ActionType.LOAD_FILMS:
      return extend(state, {
        films: action.payload
      });
    case ActionType.LOAD_PROMO_FILM:
      return extend(state, {
        promoFilm: action.payload
      });
    case ActionType.LOAD_REVIEWS_TO_FILM:
      const filmIndex = state.films.findIndex((film) => film.id === action.payload.filmId);

      return extend(state, {
        films: state.films.slice(0, filmIndex)
          .concat(extend(state.films[filmIndex], {reviews: action.payload.reviews}))
          .concat(state.films.slice(filmIndex + 1))
      });
  }

  return state;
};

export {reducer, ActionType, ActionCreator, Operation};
