import React from 'react';

import './Header.scss';

export default () => {
  return (
    <header className="header">
      <nav className="header-navigation">
        <ul className="header-menu">
          <li className="header-menu__item">
            <a className="header-menu__link header-menu__link_main" href="#">
              News app
            </a>
          </li>
        </ul>
      </nav>
    </header>
  );
}