import {
  BrowserRouter, Routes, Route,
} from 'react-router-dom';
import Rockets from './components/rockets/Rockets';
import Missions from './components/missions/Missions';
import MyProfile from './components/MyProfile';
import './styles/index.css';

const App = () => (
  <BrowserRouter>
    <Routes>
      <Route path="/" element={<Rockets />} />
      <Route path="/missions" element={<Missions />} />
      <Route path="/my-profile" element={<MyProfile />} />
    </Routes>
  </BrowserRouter>
);

export default App;
