import React, { Component } from "react";
import ReactDOM from "react-dom" ;





export default class Saved extends Component{


render(){
    return(

      <div>
  <nav className="teal accent-4" role="navigation">
    <div className="nav-wrapper container"><a id="logo-container" href="#" className="brand-logo">Timeline page</a>
      <ul className="right hide-on-med-and-down">
        <li><a href="#">#3651</a></li>
      </ul>
      <ul id="nav-mobile" className="side-nav">
        <li><a href="#">#3651</a></li>
      </ul>
      <a href="#" data-activates="nav-mobile" className="button-collapse"><i className="material-icons">menu</i></a>
    </div>
  </nav>
  <div className="section no-pad-bot" id="index-banner">
    <div className="container">
      <br /><br />
      <h1 className="header center blue-grey-text">Welcome to your timeline</h1>
    </div>
  </div>
  <div className="container">
    <div className="section">
      {/*   Icon Section   */}
      <div className="row">
        <div className="carousel">
          <a className="carousel-item" href="#one!"><img src="http://placehold.it/250" /></a>
          <a className="carousel-item" href="#two!"><img src="http://placehold.it/250" /></a>
          <a className="carousel-item" href="#three!"><img src="http://placehold.it/250" /></a>
          <a className="carousel-item" href="#four!"><img src="http://placehold.it/250" /></a>
          <a className="carousel-item" href="#five!"><img src="http://placehold.it/250" /></a>
        </div>
      </div>
    </div>
    <br /><br />
    <div className="section">
    </div>
  </div>
  
</div>


      );

  }
}




