import {reducer, ActionCreator, ActionType, AuthorizationStatus} from "./user.js";


it(`Reducer without additional parameters should return initial state`, () => {
  expect(reducer(void 0, {})).toEqual({
    authorizationCheckHappened: false,
    authorizationStatus: AuthorizationStatus.NO_AUTH,
    authInfo: {id: 0, email: ``, name: ``, avatarUrl: ``}
  });
});

it(`Reducer should change authorizationStatus by a given value and change authorizationCheckHappended to true`, () => {
  expect(reducer({
    authorizationCheckHappened: false,
    authorizationStatus: AuthorizationStatus.NO_AUTH,
  }, {
    type: ActionType.REQUIRED_AUTHORIZATION,
    payload: AuthorizationStatus.AUTH,
  })).toEqual({
    authorizationCheckHappened: true,
    authorizationStatus: AuthorizationStatus.AUTH,
  });

  expect(reducer({
    authorizationCheckHappened: true,
    authorizationStatus: AuthorizationStatus.AUTH,
  }, {
    type: ActionType.REQUIRED_AUTHORIZATION,
    payload: AuthorizationStatus.NO_AUTH,
  })).toEqual({
    authorizationCheckHappened: true,
    authorizationStatus: AuthorizationStatus.NO_AUTH,
  });

  expect(reducer({
    authorizationCheckHappened: true,
    authorizationStatus: AuthorizationStatus.AUTH,
  }, {
    type: ActionType.REQUIRED_AUTHORIZATION,
    payload: AuthorizationStatus.AUTH,
  })).toEqual({
    authorizationCheckHappened: true,
    authorizationStatus: AuthorizationStatus.AUTH,
  });

  expect(reducer({
    authorizationCheckHappened: false,
    authorizationStatus: AuthorizationStatus.NO_AUTH,
  }, {
    type: ActionType.REQUIRED_AUTHORIZATION,
    payload: AuthorizationStatus.NO_AUTH,
  })).toEqual({
    authorizationCheckHappened: true,
    authorizationStatus: AuthorizationStatus.NO_AUTH,
  });
});

it(`Reducer should change authInfo by a given value`, () => {
  expect(reducer({
    authInfo: {id: 0, email: ``, name: ``, avatarUrl: ``}
  }, {
    type: ActionType.LOAD_AUTH_INFO,
    payload: {id: 1, email: `a@a.a`, name: `a`, avatarUrl: `img/1.png`}
  })).toEqual({
    authInfo: {id: 1, email: `a@a.a`, name: `a`, avatarUrl: `img/1.png`}
  });
});

describe(`Action creators work correctly`, () => {
  it(`Action creator for require authorization returns correct action`, () => {
    expect(ActionCreator.requireAuthorization(AuthorizationStatus.NO_AUTH)).toEqual({
      type: ActionType.REQUIRED_AUTHORIZATION,
      payload: AuthorizationStatus.NO_AUTH,
    });

    expect(ActionCreator.requireAuthorization(AuthorizationStatus.AUTH)).toEqual({
      type: ActionType.REQUIRED_AUTHORIZATION,
      payload: AuthorizationStatus.AUTH,
    });
  });

  it(`Action creator for loadAuthInfo returns correct action`, () => {
    expect(ActionCreator.loadAuthInfo({id: 1, email: `a@a.a`, name: `a`, avatarUrl: `img/1.png`})).toEqual({
      type: ActionType.LOAD_AUTH_INFO,
      payload: {id: 1, email: `a@a.a`, name: `a`, avatarUrl: `img/1.png`}
    });
  });
});
