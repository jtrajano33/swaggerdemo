import React from 'react';
import { NavLink } from 'react-router-dom';

class Navbar extends React.Component {
  render() {
    return (
      <nav
        className="navbar"
        role="navigation"
        aria-label="main navigation"
        style={{ background: '#365e9d', padding: '20px 20px', width: '100%' }}
      >
        <div className="navbar-brand">
          <NavLink
            className="navbar-item"
            to="/"
            style={{
              textDecoration: 'none',
              color: '#62b5e5',
              letterSpacing: '1px',
              fontSize: '20px',
            }}
          >
            <i className="fas fa-mobile-alt fa-2x logoSwagger" />{' '}
            <span style={{ marginLeft: '15px' }}>The Swaggin' Shop</span>
          </NavLink>

          <a
            role="button"
            className="navbar-burger burger"
            aria-label="menu"
            aria-expanded="false"
            data-target="navbarBasicExample"
          >
            <span aria-hidden="true" />
            <span aria-hidden="true" />
            <span aria-hidden="true" />
          </a>
        </div>

        <div id="navbarBasicExample" className="navbar-menu">
          <div className="navbar-end">
            <NavLink
              className="navbar-item"
              style={{ textDecoration: 'none', color: '#62b5e5' }}
              to="/"
            >
              <i className="fas fa-shopping-bag fa-2x logoSwagger2" />
            </NavLink>

            <NavLink
              className="navbar-item"
              style={{ textDecoration: 'none', color: '#62b5e5' }}
              to="/cart"
            >
              <i className="fas fa-shopping-cart fa-2x logoSwagger3" />
            </NavLink>
            <NavLink
              className="navbar-item"
              style={{ textDecoration: 'none', color: '#62b5e5' }}
              to="/checkout"
            >
              <i className="fas fa-shipping-fast fa-2x logoSwagger4" />
            </NavLink>
          </div>
        </div>
      </nav>
    );
  }
}

export default Navbar;
