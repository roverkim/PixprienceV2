import React, { Component } from 'react';
import { BrowserRouter as Router, Route, NavLink} from "react-router-dom";
import {Navbar} from "react-materialize";
import Auth from '../../modules/Auth';

import UploadModal from "../UploadModal/UploadModal"
import "./Nav.css";


export default class Nav extends Component {

  render(){

    return(
      <div>
       {Auth.isUserAuthenticated() ?
        (
          <Navbar className="header" style={{"background-color": "black"}}>
            <ul className="customNav">
              <li className="right"><NavLink to="/logout">Logout</NavLink></li>
              <li className="right"><NavLink to="/community">Community</NavLink></li>
              <li className="right"><NavLink to="/mappage">Map</NavLink></li>
              <li className="right" ><NavLink exact to="/">Timeline</NavLink></li>
              <li className="left"><UploadModal/></li>
            </ul>
          </Navbar>
        )
      :
        (
          <Navbar className="header" style={{"background-color": "black"}}>
            <ul className="customNav">
              <li className="left"> <a className="title">Pixprience</a> </li>
              <li className="right"><NavLink exact to="/">Login Page</NavLink></li>
              <li className="right"><NavLink to="/community">Community</NavLink></li>
              <li className="right"><NavLink exact to="/about">About Us</NavLink></li>
            </ul>
          </Navbar>
        )
      }
      </div>
    );
  }
}
