import React, { Component } from 'react';
import Auth from '../../Auth';


export default class Logout extends Component {

  componentWillMount() {
    console.log('Logging out');
    Auth.deauthenticateUser();
    this.props.history.push('/');
  }

  render() {
    return (
      <div>
        Logging Out
      </div>
    );
  }
}
