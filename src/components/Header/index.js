import React from 'react';
import { NavLink } from 'react-router-dom';
import PropTypes from 'prop-types';
import './header.scss';

const Header = ({ githubLogo }) => (
  <header>
    <img
      className="logo"
      src={githubLogo}
      alt="Logo Github"
    />
    <nav className="nav">
      <NavLink exact to="/" className="nav-link">Recherche</NavLink>
      <NavLink exact to="/faq" className="nav-link">FAQ</NavLink>
    </nav>
  </header>
);

Header.propTypes = {
  githubLogo: PropTypes.string.isRequired,
};

export default Header;
