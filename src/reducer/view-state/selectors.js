import NameSpace from '../name-space.js';

const NAME_SPACE = NameSpace.VIEW_STATE;

const getGenre = (state) => {
  return state[NAME_SPACE].genre;
};

const getShowedFilmsAmount = (state) => {
  return state[NAME_SPACE].showedFilmsAmount;
};

export {getGenre, getShowedFilmsAmount};
