import {
  BrowserRouter as Router,
  Routes,
  Route,
} from 'react-router-dom';

import { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import Missions from './components/Missions';
import MyProfile from './components/MyProfile';
import Rockets from './components/Rockets';
import Nav from './components/Nav';
import { storeData } from './redux/rockets/Redux-Rockets';
import { loadMissions } from './redux/missions/Redux-Missions';
import fetchRockets from './modules/fetchRockets';

function App() {
  const dispatch = useDispatch();
  useEffect(() => {
    const dispatchRockets = async () => {
      const response = await fetchRockets();
      dispatch(storeData(response.data));
    };
    dispatch(loadMissions());
    dispatchRockets();
  }, []);

  const missions = useSelector((state) => state.missions);
  console.log(missions);

  return (
    <Router>
      <Nav />
      <Routes>
        <Route exact path="/" element={Missions} />
        <Route exact path="/myprofile" element={MyProfile} />
        <Route exact path="/rockets" element={Rockets} />
      </Routes>
    </Router>
  );
}

export default App;
