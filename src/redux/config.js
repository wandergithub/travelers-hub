import { createStore } from 'redux';
import reducer from './rockets/Redux-Rockets';

const store = createStore(reducer);

export default store;
