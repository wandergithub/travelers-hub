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
export function storeData(data) {
  const list = data.map((rocket) => ({
    id: rocket.id,
    name: rocket.rocket_name,
    type: rocket.rocket_type,
    images: rocket.flickr_images,
  }));
  return { type: FETCHED_DATA, list };
}
