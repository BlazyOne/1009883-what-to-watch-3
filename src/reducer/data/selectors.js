import NameSpace from '../name-space.js';

const NAME_SPACE = NameSpace.DATA;

const getFilms = (state) => {
  return state[NAME_SPACE].films;
};

const getPromoFlm = (state) => {
  return state[NAME_SPACE].promoFilm;
};

export {getFilms, getPromoFlm};
