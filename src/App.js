import {
  BrowserRouter as Router,
  Routes,
  Route,
} from 'react-router-dom';

import axios from 'axios';
import { useEffect } from 'react';
import { useDispatch } from 'react-redux';
import Missions from './components/Missions';
import MyProfile from './components/MyProfile';
import Rockets from './components/Rockets';
import Nav from './components/Nav';
import { storeData } from './redux/rockets/Redux-Rockets';

function App() {
  const dispatch = useDispatch();
  useEffect(() => {
    const dispatchRockets = async () => {
      const response = await axios('https://api.spacexdata.com/v3/rockets');
      dispatch(storeData(response.data));
    };
    dispatchRockets();
  }, []);

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
