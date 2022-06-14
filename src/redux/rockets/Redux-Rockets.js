import axios from 'axios';
// Actions
const FETCHED_DATA = 'FETCHED_DATA';

// Reducer
export default function reducer(state = {}, action = {}) {
  switch (action.type) {
    case FETCHED_DATA:
      return action.list;
    default: return state;
  }
}

// Action Creators
// thunks
export const dispatchRockets = () => async (dispatch) => {
  const response = await axios('https://api.spacexdata.com/v3/rockets');
  const list = response.data.map((rocket) => ({
    id: rocket.id,
    name: rocket.rocket_name,
    type: rocket.rocket_type,
    images: rocket.flickr_images,
  }));
  dispatch({ type: FETCHED_DATA, list });
};
