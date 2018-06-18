import React, { Fragment, Component } from 'react';
import LoginForm from './LoginForm';
import Auth from '../../../../Auth';

export default class LoginPage extends Component {
    // set the initial component state
    constructor(props, context) {
      super(props, context);

      const storedMessage = localStorage.getItem('successMessage');
      let successMessage = '';

      if (storedMessage) {
        successMessage = storedMessage;
        localStorage.removeItem('successMessage');
      }

      // set the initial component state
      this.state = {
        errors: {},
        user: {
          email: '',
          password: ''
        }
      };

      this.processForm = this.processForm.bind(this);
      this.changeUser = this.changeUser.bind(this);
      this.redirectUser = this.redirectUser.bind(this);
    }

    redirectUser(value){
      if(value === true){
        this.props.redirectToSignUp(true)
      }
    }

     processForm(event) {
       // prevent default action. in this case, action is the form submission event
       event.preventDefault();

       // create a string for an HTTP body message
       const email = encodeURIComponent(this.state.user.email);
       const password = encodeURIComponent(this.state.user.password);
       const formData = `email=${email}&password=${password}`;

       // create an AJAX request
       const xhr = new XMLHttpRequest();
       xhr.open('post', '/auth/login');
       xhr.setRequestHeader('Content-type', 'application/x-www-form-urlencoded');
       xhr.responseType = 'json';
       xhr.addEventListener('load', () => {
         if (xhr.status === 200) {
           // change the component-container state
           this.setState({
             errors: {}
           });

           // save the token
           Auth.authenticateUser(xhr.response.token);
            this.props.redirectToTimeline(true);
            window.localStorage.setItem('userEmail', this.state.user.email);
            
         } else {
           
           const errors = xhr.response.errors ? xhr.response.errors : {};
           errors.summary = xhr.response.message;

           this.setState({
             errors
           });
         }
       });
       xhr.send(formData);
     }
    /**
     * Change the user object.
     *
     * @param {object} event - the JavaScript event object
     */
    changeUser(event) {
      const field = event.target.name;
      const user = this.state.user;
      user[field] = event.target.value;

      this.setState({
        user
      });
    }

    /**
     * Render the component.
     */
    render() {
      return (
        <Fragment>
          <LoginForm
            onSubmit={this.processForm}
            onChange={this.changeUser}
            errors={this.state.errors}
            user={this.state.user}
            redirectUser = {this.redirectUser}
          />
        </Fragment>
      );
    }

  }
