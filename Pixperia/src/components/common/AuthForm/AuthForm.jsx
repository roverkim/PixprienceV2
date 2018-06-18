import React, { Component } from 'react';
import LoginPage from './Login/LoginPage';
import SignUpPage from './SignUp/SignUpPage';
import './authForm.nested.css';

export default class AuthForm extends Component {
  constructor(props) {
    super(props);

    this.state = {
      renderLogin: false,
      renderSignUp: true,
    };

    this.redirectToLogin = this.redirectToLogin.bind(this);
    this.redirectToSignUp = this.redirectToSignUp.bind(this);
    this.redirectToTimeline = this.redirectToTimeline.bind(this);
  }

  componentDidMount() {
    const signIn = document.querySelector('.sign-in');
    const signUp = document.querySelector('.sign-up');
    const textLabel = document.querySelector('.hed');
    const that = this;

    signIn.onclick = function() {
      that.setState({ renderLogin: true, renderSignUp: false });
      document.title = 'Sign In';
      textLabel.innerHTML = 'Sign Up <lighter> or </lighter><span>Sign In </span>';
      signIn.classList.add("active");
      signUp.classList.remove("active");
    };

    signUp.onclick = function() {
      signUp.classList.add("active");
      signIn.classList.remove("active");
      that.setState({ renderLogin: false, renderSignUp: true });
      document.title = 'Sign Up';
      textLabel.innerHTML = 'Sign In <lighter> or </lighter><span>Sign Up </span>';
    };
  }

  redirectToTimeline(value) {
    if (value === true) {
      this.props.history ? this.props.history.push('/timeline') : window.location.reload();
    }
  }

  redirectToLogin(value) {
    if (value === true) {
      this.setState({
        renderLogin : true,
        renderSignUp: false
      });
    }
  }

  redirectToSignUp(value) {
    if (value === true) {
      this.setState({
        renderLogin : false,
        renderSignUp: true
      });
    }
  }

  render() {
    return (
      <div id="authContainer" className="container">
        <div className="row container-inside">
          <div className="left-side col-lg-6" >
            <div className="left_wrapper">
              <h2 className="title">
                Pixprience <br />
                <span className="subtitle"> Your antisocial app.</span>
                <br />
                <span className="subheader">  Uncurated. Unfiltered. Unfollowed.</span>
              </h2>
            </div>
          </div>

          <div className="right-side col-lg-6">
            <div className="buttons-container">
              <button type="button" className="sign-up">Sign Up</button>
              <button type="button" className="sign-in">Sign In</button>
            </div>
            <div className="sign_wrapper">
              <div className="header">
                <h5 className="hed">Sign In
                  <lighter>
                    or
                  </lighter>
                  <span>Sign Up</span>
                </h5>
              </div>
            {
              this.state.renderSignUp ?
                <SignUpPage
                  className="inputs-cont"
                  redirectToLogin={this.redirectToLogin}
                />
                  :
                <LoginPage
                  className="inputs-cont2"
                  redirectToTimeline={this.redirectToTimeline}
                  redirectToSignUp={this.redirectToSignUp}
                />
            }
          </div>
          </div>
        </div>
      </div>
    );
  }

}
