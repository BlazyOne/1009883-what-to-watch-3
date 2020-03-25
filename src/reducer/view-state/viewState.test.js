import {reducer, ActionCreator, ActionType} from './viewState.js';

const FILMS_SHOWED_ON_START_AMOUNT = 8;
const FILMS_SHOWED_INCREMENT_AMOUNT = 8;

it(`Reducer without additional parameters should return initial state`, () => {
  expect(reducer(void 0, {})).toEqual({
    genre: `All`,
    showedFilmsAmount: FILMS_SHOWED_ON_START_AMOUNT
  });
});

it(`Reducer should change genre to a given value`, () => {
  expect(reducer({
    genre: `All`,
    showedFilmsAmount: FILMS_SHOWED_ON_START_AMOUNT
  }, {
    type: ActionType.CHANGE_GENRE,
    payload: `Comedy`
  })).toEqual({
    genre: `Comedy`,
    showedFilmsAmount: FILMS_SHOWED_ON_START_AMOUNT
  });
});

it(`Reducer should increment showed cards by a given value`, () => {
  expect(reducer({
    genre: `All`,
    showedFilmsAmount: FILMS_SHOWED_ON_START_AMOUNT
  }, {
    type: ActionType.INCREMENT_SHOWED,
    payload: FILMS_SHOWED_INCREMENT_AMOUNT
  })).toEqual({
    genre: `All`,
    showedFilmsAmount: FILMS_SHOWED_ON_START_AMOUNT + FILMS_SHOWED_INCREMENT_AMOUNT
  });
});

it(`Reducer should reset showed cards number to a correct value`, () => {
  expect(reducer({
    genre: `All`,
    showedFilmsAmount: 16,
  }, {
    type: ActionType.RESET_SHOWED,
    payload: null
  })).toEqual({
    genre: `All`,
    showedFilmsAmount: FILMS_SHOWED_ON_START_AMOUNT
  });
});

describe(`Action creators work correctly`, () => {
  it(`Action creator for setting genre retuns correct action`, () => {
    expect(ActionCreator.changeGenre(`Comedy`)).toEqual({
      type: ActionType.CHANGE_GENRE,
      payload: `Comedy`
    });
  });

  it(`Action creator for incrementing showed cards returns correct action`, () => {
    expect(ActionCreator.incrementShowed()).toEqual({
      type: ActionType.INCREMENT_SHOWED,
      payload: FILMS_SHOWED_INCREMENT_AMOUNT
    });
  });

  it(`Action creator for resetting showed cards number returns correct action`, () => {
    expect(ActionCreator.resetShowed()).toEqual({
      type: ActionType.RESET_SHOWED,
      payload: null
    });
  });
});
