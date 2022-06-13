import {
  BrowserRouter as Router,
  Routes,
  Route,
} from 'react-router-dom';

import Missions from './components/Missions';
import MyProfile from './components/MyProfile';
import Rockets from './components/Rockets';
import Nav from './components/Nav';

function App() {
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
