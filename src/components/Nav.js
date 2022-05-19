import React from 'react';
import { NavLink } from 'react-router-dom';

export const Nav = () => {
  const navLinks = ['Home', 'Battle', 'Popular'];

  return (
    <nav>
      <ul className = 'nav'>
        {navLinks.map((link, index) => (
          <li key = { index }>
            <NavLink
              exact
              activeClassName = 'active'
              to = {`/${link === 'Home' ? '' : link.toLowerCase()}`}
            >
              { link }
            </NavLink>
          </li>
        ))}
      </ul>
    </nav>
  );
};
