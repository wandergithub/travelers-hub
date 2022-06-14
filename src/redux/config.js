import {
  legacy_createStore as createStore,
  combineReducers,
  applyMiddleware,
} from 'redux';
import thunk from 'redux-thunk';
import reducer from './rockets/Redux-Rockets';
import missionsReducer from './missions/Redux-Missions';

const rootReducer = combineReducers({
  missions: missionsReducer,
  rockets: reducer,
});

const store = createStore(rootReducer, applyMiddleware(thunk));

export default store;
