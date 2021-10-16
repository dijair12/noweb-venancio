import React from 'react';

import './style.scss';

import logoHero from '../../assets/home-hero/logo-hero.png';

export default function HomeIndex() {
  return (
    <div className="heroContainer" >
      <nav className="navbar navHero" style={{ background: "#fff0", color: "#FFFFFF" }} role="navigation" aria-label="main navigation">
        <div className="navbar-brand">
          <a className="navbar-item">
            <img src={logoHero} width="34" height="39" alt="logo" />
          </a>

          <a role="button" className="navbar-burger" aria-label="menu" aria-expanded="false" data-target="navbarBasicExample">
            <span aria-hidden="true"></span>
            <span aria-hidden="true"></span>
            <span aria-hidden="true"></span>
          </a>
        </div>

        <div id="navbarBasicExample" className="navbar-menu">
          <div className="navbar-end">
            <a className="navbar-item">
              Home
            </a>

            <a className="navbar-item">
              Documentation
            </a>

          </div>

        </div>
      </nav>
    </div>
  )
}