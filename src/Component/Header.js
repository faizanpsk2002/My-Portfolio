import { Link, NavLink } from 'react-router-dom';
import './Header.css';

const Header = () => {
  return (
    <header className="header">
      <div className="logo">
        <Link to="/">Portfolio</Link>
      </div>
      <nav className="navbar">
        <NavLink exact="true" to="/" activeclassname="active">Home</NavLink>
        <NavLink to="/About" activeclassname="active">About</NavLink>
        <NavLink to="/Projects" activeclassname="active">Projects</NavLink>
        <NavLink to="/Skills" activeclassname="active">Skills</NavLink>
        <NavLink to="/Contact" activeclassname="active">Contact</NavLink>
      </nav>
    </header>
  );
};

export default Header;
