import React from 'react';
import { Link } from 'react-router'

import './Header.scss';

export default () => {
  return (
    <header className="header">
      <nav className="header-navigation">
        <ul className="header-menu">
          <li className="header-menu__item">
            <Link to="/"
              className="header-menu__link header-menu__link_main"
              activeClassName="header-menu__link_active"
              onlyActiveOnIndex={true}
            >
              Home
            </Link>
            <Link to="/articles"
              className="header-menu__link"
              activeClassName="header-menu__link_active"
            >
              Articles
            </Link>
          </li>
        </ul>
      </nav>
    </header>
  );
}