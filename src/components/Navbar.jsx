import { Link } from 'react-router-dom';

const Navbar = () => (
  <header>
    <h1>Space Travelers&apos; Hub</h1>
    <nav>
      <ul>
        <li>
          <Link to="/">Rockets</Link>
        </li>
        <li>
          <Link to="/missions">Missions</Link>
        </li>
        <li>
          <Link to="/my-profile">My profile</Link>
        </li>
      </ul>
    </nav>
  </header>
);

export default Navbar;
