import axios from 'axios';
// Actions
const FETCHED_DATA = 'FETCHED_DATA';
const RESERVED_ROCKET = 'RESERVED_ROCKET';
// Reducer
export default function reducer(state = [], action = {}) {
  switch (action.type) {
    case FETCHED_DATA:
      return action.list;
    case RESERVED_ROCKET:
      return [...state.map((rocket) => {
        if (rocket.id !== action.id) return rocket;
        return { ...rocket, reserved: true };
      })];
    default: return state;
  }
}

// Action Creators
export const reserveRocket = (id) => ({
  type: RESERVED_ROCKET,
  id,
});
// thunks
export const dispatchRockets = () => async (dispatch) => {
  const response = await axios('https://api.spacexdata.com/v3/rockets');
  const list = response.data.map((rocket) => ({
    id: rocket.id,
    name: rocket.rocket_name,
    description: rocket.description,
    images: rocket.flickr_images,
  }));
  dispatch({ type: FETCHED_DATA, list });
};
