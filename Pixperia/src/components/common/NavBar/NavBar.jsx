import React from 'react';
import { NavLink } from 'react-router-dom';
import Auth from '../../../Auth';
import UploadModal from '../UploadModal'
import './navBar.nested.css';

const NavBar = () => {
  return (
    Auth.isUserAuthenticated() ?
      (
        <nav id="NavBar" className="navbar navbar-expand-lg">
          <a className="navbar-brand navTitle" href="#">Pixperia</a>
          <UploadModal/>
          <button className="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarNav" aria-controls="navbarNav" aria-expanded="false" aria-label="Toggle navigation">
            <span className="navbar-toggler-icon"><i className="fa fa-bars bars" aria-hidden="true"></i></span>
          </button>
          <div className="collapse navbar-collapse justify-content-end" id="navbarNav">
            <ul className="navbar-nav">
              <li className="nav-item">
                <NavLink className="nav-link" exact to="/timeline">Timeline</NavLink>
              </li>
              <li className="nav-item">
                <NavLink className="nav-link" exact to="/community">Community</NavLink>
              </li>
              <li className="nav-item">
                <NavLink className="nav-link" exact to="/mappage">Map</NavLink>
              </li>
              <li className="nav-item">
                <NavLink className="nav-link" exact to="/logout">Logout</NavLink>
              </li>
              <li className="nav-item">
                <a className="nav-link" href="http://www.pixprience.com/">Pixpirence.com</a>
              </li>
            </ul>
          </div>
        </nav>
      ) : (
        <nav id="NavBar" className="navbar navbar-expand-lg">
          <a className="navbar-brand navTitle" href="#">Pixperia</a>
          <button className="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarNav" aria-controls="navbarNav" aria-expanded="false" aria-label="Toggle navigation">
            <span className="navbar-toggler-icon"><i className="fa fa-bars bars" aria-hidden="true"></i></span>
          </button>
          <div className="collapse navbar-collapse justify-content-end" id="navbarNav">
            <ul className="navbar-nav">
              <li className="nav-item">
                <NavLink className="nav-link" exact to="/">Login Page</NavLink>
              </li>
              <li className="nav-item">
                <NavLink className="nav-link" to="/community">Community</NavLink>
              </li>
              <li className="nav-item">
                <NavLink className="nav-link" exact to="/about">About Us</NavLink>
              </li>
              <li className="nav-item">
                <a className="nav-link" href="http://www.pixprience.com/">Pixpirence.com</a>
              </li>
            </ul>
          </div>
        </nav>
      )
  );
};

export default NavBar;
