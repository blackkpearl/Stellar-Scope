import React from 'react';
import { Link } from 'react-router-dom';

const Navbar = props => {
  return (
    <div className="navbar-fixed">
      <nav className="z-depth-0">
        <div className="nav-wrapper grey">
          <Link to="/" className="col s5 brand-logo center white-text" style={{ fontFamily: 'Dancing Script' }}>
            <i className="material-icons">nightlight_round</i> Stellar Scope
          </Link>
        </div>
      </nav>
    </div>
  );
};

export default Navbar;