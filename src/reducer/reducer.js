import {extend} from '../utils.js';
import films from '../mocks/films.js';

const initialState = {
  genre: `All`,
  films,
  promoFilm: films[0]
};

const ActionType = {
  CHANGE_GENRE: `Change genre`
};

const ActionCreator = {
  changeGenre: (genre) => ({
    type: ActionType.CHANGE_GENRE,
    payload: genre
  })
};

const reducer = (state = initialState, action) => {
  switch (action.type) {
    case ActionType.CHANGE_GENRE:
      return extend(state, {
        genre: action.payload
      });
  }

  return state;
};

export {reducer, ActionType, ActionCreator};
