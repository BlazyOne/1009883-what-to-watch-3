import {extend} from '../../utils.js';
import {transformFilmFromServerToClient, transformReviewFromServerToClient} from '../../adapter.js';
import NameSpace from '../name-space.js';
import {filmIdStringAddition} from '../../const.js';

const initialState = {
  films: [],
  promoFilm: {
    id: ``,
    isFavorite: false,
    title: `Movie has not loaded`,
    cardImage: ``,
    videoPreview: ``,
    video: ``,
    backgroundImage: ``,
    genre: ``,
    year: ``,
    poster: ``,
    ratingScore: ``,
    ratingCount: ``,
    description: ``,
    director: ``,
    starring: [],
    runTime: ``,
    reviews: []
  }
};

const ActionType = {
  LOAD_FILMS: `LOAD_FILMS`,
  LOAD_PROMO_FILM: `LOAD_PROMO_FILM`
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
    const serverFilmId = +filmId.substring(filmIdStringAddition.length);

    return api.get(`/comments/${serverFilmId}`)
      .then((response) => {
        return response.data.map((review) => transformReviewFromServerToClient(review));
      })
      .then((reviewsData) => {
        const films = getState()[NameSpace.DATA].films;
        const filmIndex = films.findIndex((film) => film.id === filmId);

        return films.slice(0, filmIndex)
          .concat(extend(films[filmIndex], {reviews: reviewsData}))
          .concat(films.slice(filmIndex + 1));
      })
      .then((filmsData) => {
        dispatch(ActionCreator.loadFilms(filmsData));
      });
  },
  changeFavoriteStatus: (filmId) => (dispatch, getState, api) => {
    const serverFilmId = +filmId.substring(filmIdStringAddition.length);
    const films = getState()[NameSpace.DATA].films;
    const filmIndex = films.findIndex((film) => film.id === filmId);
    const film = films[filmIndex];
    const promoFilm = getState()[NameSpace.DATA].promoFilm;
    const currentFavoriteStatus = film.isFavorite;

    api.post(`/favorite/${serverFilmId}/${currentFavoriteStatus ? 0 : 1}`)
    .then((response) => {
      return transformFilmFromServerToClient(response.data);
    })
    .then((filmData) => {
      return films.slice(0, filmIndex)
        .concat(extend(films[filmIndex], filmData))
        .concat(films.slice(filmIndex + 1));
    })
    .then((filmsData) => {
      dispatch(ActionCreator.loadFilms(filmsData));
      if (film.id === promoFilm.id) {
        dispatch(ActionCreator.loadPromoFilm(filmsData[filmIndex]));
      }
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
  }

  return state;
};

export {reducer, ActionType, ActionCreator, Operation};
