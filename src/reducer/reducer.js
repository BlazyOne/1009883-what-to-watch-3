import {extend} from '../utils.js';
import films from '../mocks/films.js';

const FILMS_SHOWED_ON_START_AMOUNT = 8;
const FILMS_SHOWED_INCREMENT_AMOUNT = 8;

const initialState = {
  genre: `All`,
  films,
  filteredFilms: films.slice(0, FILMS_SHOWED_ON_START_AMOUNT),
  showedFilmsAmount: FILMS_SHOWED_ON_START_AMOUNT,
  promoFilm: films[0]
};

const getFilteredFilms = (state) => {
  return state.films.filter((film) => {
    if (state.genre === `All`) {
      return true;
    }

    return state.genre === film.genre;
  }).slice(0, state.showedFilmsAmount);
};

const ActionType = {
  CHANGE_GENRE: `Change genre`,
  INCREMENT_SHOWED: `Increment showed`,
  FILTERED_FILMS_UPDATE: `Filtered films update`
};

const ActionCreator = {
  changeGenre: (genre) => ({
    type: ActionType.CHANGE_GENRE,
    payload: genre
  }),
  incrementShowed: () => ({
    type: ActionType.INCREMENT_SHOWED,
    payload: FILMS_SHOWED_INCREMENT_AMOUNT
  }),
  filteredFilmsUpdate: () => ({
    type: ActionType.FILTERED_FILMS_UPDATE
  })
};

const reducer = (state = initialState, action) => {
  switch (action.type) {
    case ActionType.CHANGE_GENRE:
      return extend(state, {
        genre: action.payload
      });
    case ActionType.INCREMENT_SHOWED:
      return extend(state, {
        showedFilmsAmount: state.showedFilmsAmount + action.payload
      });
    case ActionType.FILTERED_FILMS_UPDATE:
      return extend(state, {
        filteredFilms: getFilteredFilms(state)
      });
  }

  return state;
};

export {reducer, ActionType, ActionCreator};
