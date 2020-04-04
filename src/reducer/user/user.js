import {transformAuthInfoFromServerToClient} from '../../adapter.js';
import {Operation as DataOperation} from '../data/data.js';

const AuthorizationStatus = {
  AUTH: `AUTH`,
  NO_AUTH: `NO_AUTH`,
};

const initialState = {
  authorizationCheckHappened: false,
  authorizationStatus: AuthorizationStatus.NO_AUTH,
  authInfo: {id: 0, email: ``, name: ``, avatarUrl: ``}
};

const ActionType = {
  REQUIRED_AUTHORIZATION: `REQUIRED_AUTHORIZATION`,
  LOAD_AUTH_INFO: `LOAD_AUTH_INFO`
};

const ActionCreator = {
  requireAuthorization: (status) => {
    return {
      type: ActionType.REQUIRED_AUTHORIZATION,
      payload: status
    };
  },
  loadAuthInfo: (authInfo) => {
    return {
      type: ActionType.LOAD_AUTH_INFO,
      payload: authInfo
    };
  }
};

const Operation = {
  checkAuth: () => (dispatch, getState, api) => {
    return api.get(`/login`)
      .then((response) => {
        return transformAuthInfoFromServerToClient(response.data);
      })
      .then((data) => {
        dispatch(ActionCreator.loadAuthInfo(data));
      })
      .then(() => {
        dispatch(ActionCreator.requireAuthorization(AuthorizationStatus.AUTH));
      })
      .catch((err) => {
        throw err;
      });
  },

  login: (authData, onError) => (dispatch, getState, api) => {
    return api.post(`/login`, {
      email: authData.login,
      password: authData.password,
    })
      .then((response) => {
        return transformAuthInfoFromServerToClient(response.data);
      })
      .then((data) => {
        dispatch(ActionCreator.loadAuthInfo(data));
        dispatch(ActionCreator.requireAuthorization(AuthorizationStatus.AUTH));
      })
      .then(() => {
        dispatch(DataOperation.loadFilms());
        dispatch(DataOperation.loadPromoFilm());
      })
      .catch((err) => {
        onError(err);
      });
  },
};

const reducer = (state = initialState, action) => {
  switch (action.type) {
    case ActionType.REQUIRED_AUTHORIZATION:
      return Object.assign({}, state, {
        authorizationCheckHappened: true,
        authorizationStatus: action.payload,
      });
    case ActionType.LOAD_AUTH_INFO:
      return Object.assign({}, state, {
        authInfo: action.payload,
      });
  }

  return state;
};

export {reducer, ActionType, ActionCreator, Operation, AuthorizationStatus};
