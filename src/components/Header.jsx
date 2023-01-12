import { NavLink } from 'react-router-dom';

import logo from '../assets/Header/logo.png';

function Header() {
  const notActive = 'notActive';

  return (
    <header className="section__margin">
      <NavLink to="/" className="logo">
        <img src={logo} alt="Logo Kasa"></img>
      </NavLink>
      <nav>
        <NavLink
          to="/"
          className={({ isActive }) => {
            return isActive ? 'active' : notActive;
          }}
          end
        >
          Accueil
        </NavLink>
        <NavLink
          to="/about"
          className={({ isActive }) => {
            return isActive ? 'active' : notActive;
          }}
        >
          À Propos
        </NavLink>
      </nav>
    </header>
  );
}

export default Header;
