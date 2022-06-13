// Actions
const FETCHED_DATA = 'FETCHED_DATA';

// Reducer
export default function reducer(state = {}, action = {}) {
  switch (action.type) {
    case FETCHED_DATA:
      return action.data;
    default: return state;
  }
}

// Action Creators
export function storeData(data) {
  console.log(data);
  return { type: FETCHED_DATA };
}
