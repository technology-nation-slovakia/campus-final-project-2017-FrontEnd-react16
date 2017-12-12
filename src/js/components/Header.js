import React from "react";
import { NavLink } from "react-router-dom";
import logo from '../../images/logo_campus_color.png';

const Header = () => (
    <header>
      <nav className="navbar navbar-toggleable-md navbar-light bg-faded">
      <img src={logo} className="logo" width="15%" />
        <div className="container">
          <button className="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarResponsive" aria-controls="navbarResponsive" aria-expanded="false" aria-label="Toggle navigation">
            <span className="navbar-toggler-icon"></span>
          </button>
          <div className="collapse navbar-collapse" id="navbarResponsive">
            <ul className="navbar-nav ml-auto">
              <li><NavLink exact to="/" className="nav-link" activeClassName="active">Home</NavLink></li>
              <li><NavLink to="/about" className="nav-link" activeClassName="active">About</NavLink></li>
              <li><NavLink to="/contact" className="nav-link" activeClassName="active">Contact</NavLink></li>
            </ul>
          </div>
        </div>
      </nav>
    </header>
)

export default Header