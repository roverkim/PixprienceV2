/////////////////////////////////////////////// /* Imports */ //////////////////////////////////////////////
import React, { PropTypes, Fragment, Component} from 'react';
import { Route, NavLink, Redirect, withRouter, Link, Switch, BrowserRouter as Router, hashHistory} from "react-router-dom";
import { browserHistory } from 'react-router';
import ReactDom from 'react-dom';

/////////////////////////////////////////////// /* Components */ //////////////////////////////////////////////
import API from '../../utils/API.js'
import Nav from "../../components/NavBar";
import LoginPage from './LoginPage.js';
import SignUpPage from './SignUpPage.js';

/////////////////////////////////////////////// /* CSS */ //////////////////////////////////////////////
import './LoginPage.nested.css'

/////////////////////////////////////////////// /* Main */ //////////////////////////////////////////////

export default class AuthenticationPage extends Component {

  constructor(props, context){

    super(props, context);

    this.state = {

      renderLogin : false,
      renderSignUp: true

    };

    this.redirectToLogin = this.redirectToLogin.bind(this);
    this.redirectToSignUp = this.redirectToSignUp.bind(this);
    this.redirectToTimeline = this.redirectToTimeline.bind(this);

  }

  redirectToTimeline(value){
    console.log("redircet to timeline called");

    if(value === true){
      this.props.history ?  this.props.history.push('/timeline') : window.location.reload();

    }
  }

  redirectToLogin(value){

    if(value === true){

      this.setState({
        renderLogin : true,
        renderSignUp: false
      })

    }
  }

  redirectToSignUp(value){

    if(value === true){

      this.setState({
        renderLogin : false,
        renderSignUp: true
      })

    }
  }


  componentDidMount() {
    let signIn = document.querySelector(".sign-in"),
      signUp = document.querySelector(".sign-up"),
      textLabel = document.querySelector(".hed"),
      Form = document.querySelector(".inputs-cont"),
      Form2 = document.querySelector(".inputs-cont2"),
      UserDetails = document.querySelector(".input-take"),
      goSend = document.querySelector(".send"),
      that = this;

      // Form2.style.display = "none";

      signIn.onclick = function() {
        "use strict";

        that.setState({renderLogin : true, renderSignUp: false});

        document.title = 'Sign In';
        textLabel.innerHTML = "Sign Up <lighter> or </lighter><span>Sign In </span>";
      };

      signUp.onclick = function() {
        "use strict";
        that.setState({renderLogin : false, renderSignUp: true});
        document.title = 'Sign Up';
        textLabel.innerHTML = "Sign In <lighter> or </lighter><span>Sign Up </span>";
      };
  } // End of componentDidMount

  render() {
    return (<Fragment>
      <Nav/>
      <section className="content">
        <div id="clouds">
          <div class="cloud x1"></div>
          <div class="cloud x2"></div>
          <div class="cloud x3"></div>
          <div class="cloud x4"></div>
          <div class="cloud x5"></div>
          <div class="cloud x6"></div>
          <div class="cloud x7"></div>
          <div class="cloud x8"></div>
        </div>
        <section className="container-inside" style={{"z-index": "1000 !important"}}>
          {/* Left Container */}
          <div className="left-side" style={{opacity: 0.5}}>
            {/*<img src="https://images.pexels.com/photos/598917/pexels-photo-598917.jpeg?w=1260&h=750&dpr=2&auto=compress&cs=tinysrgb" className="left-img" title="sign up now and save 1200$"/>*/}
          </div>
          {/* Right Container */}
          <div className="right-side">
            <div className="buttons-container">
              <button type="button" className="sign-up">Sign Up</button>
              <button type="button" className="sign-in">Sign In</button>
            </div>
            <div className="header">
              <h5 className="hed">Sign In
                <lighter>
                  or
                </lighter>
                <span>Sign Up</span>
              </h5>
            </div>

            {
              this.state.renderSignUp? <SignUpPage className="inputs-cont" redirectToLogin={this.redirectToLogin}/> :<LoginPage className="inputs-cont2" redirectToTimeline={this.redirectToTimeline} redirectToSignUp={this.redirectToSignUp}/>
            }



          </div>
        </section>
      </section>

    </Fragment>); // End Return

  } // End Render

} // End Class
