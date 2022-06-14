const url = 'https://api.spacexdata.com/v3/missions';
const axios = require('axios');

const FETCH_MISSIONS = 'FETCH_MISSIONS';

const missionsReducer = (state = [], { type, payload }) => {
  switch (type) {
    case FETCH_MISSIONS:
      return [...payload];
    default:
      return state;
  }
};

// Action creator using thunk

const loadMissions = () => async (dispatch) => {
  const data = await axios.get(url);
  dispatch({
    type: FETCH_MISSIONS,
    payload: data.data,
  });
};

export default missionsReducer;
export { loadMissions };
