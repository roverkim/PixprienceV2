import React from 'react';
import { Link } from 'react-router-dom';
import { Card, CardText } from 'material-ui/Card';
import RaisedButton from 'material-ui/RaisedButton';
import TextField from 'material-ui/TextField';
import PropTypes from 'prop-types';


const SignUpForm = ({onSubmit, onChange, errors, user, redirectUser}) => (
  <Card className="container">
    <form action="/" onSubmit={onSubmit}>
      <h2 className="card-heading" style={{'color': 'white'}}>Sign Up</h2>

      {errors.summary && <p className="error-message" style={{'margin-top': '40px', 'text-align':'center', 'color':'white'}}>{errors.summary}</p>}

      <div className="field-line">
        <TextField
          floatingLabelText="First Name"
          name="firstName"
          errorText={errors.firstName}
          onChange={onChange}
          value={user.firstName}
          className="input-label hidden overideActive overideColor"
        />
      </div>

      <div className="field-line">
        <TextField
          floatingLabelText="Last Name"
          name="lastName"
          errorText={errors.lastName}
          onChange={onChange}
          value={user.lastName}
          className="input-label hidden overideActive overideColor"
        />
      </div>

      <div className="field-line">
        <TextField
          floatingLabelText="Email"
          name="email"
          errorText={errors.email}
          onChange={onChange}
          value={user.email}
          className="input-label hidden overideActive overideColor"
        />
      </div>

      <div className="field-line">
        <TextField
          floatingLabelText="Password"
          type="password"
          name="password"
          onChange={onChange}
          errorText={errors.password}
          value={user.password}
          className="input-label hidden overideActive overideColor"
        />
      </div>


      <div className="button-line" style={{'margin-top': '40px'}}>
        <RaisedButton type="submit" label="Create New Account" primary />
      </div>

      <CardText style={{'margin-top': '20px', 'font-size': '1rem'}}>Already have an account? <span className="hover" href='#' onClick={()=>redirectUser(true)}>Log in</span></CardText>
    </form>
  </Card>
);

SignUpForm.propTypes = {
  onSubmit: PropTypes.func.isRequired,
  onChange: PropTypes.func.isRequired,
  errors: PropTypes.object.isRequired,
  user: PropTypes.object.isRequired
};

export default SignUpForm;
