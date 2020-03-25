import {combineReducers} from 'redux';
import {reducer as data} from './data/data.js';
import {reducer as viewState} from './view-state/viewState.js';
import {reducer as user} from './user/user.js';
import NameSpace from './name-space.js';

const combinedReducers = combineReducers({
  [NameSpace.DATA]: data,
  [NameSpace.VIEW_STATE]: viewState,
  [NameSpace.USER]: user,
});

export default combinedReducers;
