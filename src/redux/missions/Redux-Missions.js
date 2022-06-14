const url = 'https://api.spacexdata.com/v3/missions';
const axios = require('axios');

const JOINED_MISSION = 'RESERVED_MISSION';
const FETCH_MISSIONS = 'FETCH_MISSIONS';

const missionsReducer = (state = [], { type, payload }) => {
  switch (type) {
    case FETCH_MISSIONS:
      return [...payload];
    case JOINED_MISSION:
      console.log(payload);
      return state;
    default:
      return state;
  }
};

// Action creator using thunk

const loadMissions = () => async (dispatch) => {
  const get = await axios.get(url);
  const data = get.data.map((mission) => ({
    mission_id: mission.mission_id,
    mission_name: mission.mission_name,
    description: mission.description,
  }));
  dispatch({
    type: FETCH_MISSIONS,
    payload: data,
  });
};

export default missionsReducer;
export { loadMissions };
