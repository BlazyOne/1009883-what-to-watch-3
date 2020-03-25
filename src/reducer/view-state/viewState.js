import {extend} from '../../utils.js';

const FILMS_SHOWED_ON_START_AMOUNT = 8;
const FILMS_SHOWED_INCREMENT_AMOUNT = 8;

const initialState = {
  genre: `All`,
  showedFilmsAmount: FILMS_SHOWED_ON_START_AMOUNT
};

const ActionType = {
  CHANGE_GENRE: `Change genre`,
  INCREMENT_SHOWED: `Increment showed`,
  RESET_SHOWED: `Reset showed`
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
  resetShowed: () => ({
    type: ActionType.RESET_SHOWED,
    payload: null
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
    case ActionType.RESET_SHOWED:
      return extend(state, {
        showedFilmsAmount: FILMS_SHOWED_ON_START_AMOUNT
      });
  }

  return state;
};

export {reducer, ActionType, ActionCreator};
