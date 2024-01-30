import { Link } from 'react-router-dom';
import './Navbar.css';

const Navbar = () => {
  return (
    <nav className="navbar">
      <ul className="navbar-links">
        <li>
          <Link to="/" className="navbar-link">Home</Link>
        </li>
        <li>
          <Link to="/add-blog" className="navbar-link">Add Blog</Link>
        </li>
      </ul>
    </nav>
  );
};

export default Navbar;