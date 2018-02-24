import React from 'react';
import { Link } from 'react-router-dom';
import { Card, CardText } from 'material-ui/Card';
import RaisedButton from 'material-ui/RaisedButton';
import TextField from 'material-ui/TextField';
import PropTypes from 'prop-types';


const LoginForm = ({
  onSubmit,
  onChange,
  errors,
  user,
  successMessage,
  redirectUser
}) => (
  <Card className="container">
    <form action="/" onSubmit={onSubmit}>
      <h2 className="card-heading" style={{'color': 'white'}}>Login</h2>

      {successMessage && <p className="success-message" style={{'margin-top': '40px', 'text-align':'center', 'color':'white'}}>{successMessage}</p>}
      {errors.summary && <p className="error-message" style={{'margin-top': '20px', 'text-align':'center', 'color':'white'}}>{errors.summary}</p>}

      <div className="field-line">
        <TextField
          floatingLabelText="Email"
          name="email"
          errorText={errors.email}
          onChange={onChange}
          value={user.email}
          className="overideActive overideColor"
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
          className="overideActive overideColor"
        />
      </div>

      <div className="button-line" style={{'margin-top': '40px'}}>
        <RaisedButton type="submit" label="Log in" primary />
      </div>

      <CardText style={{'margin-top': '20px', 'font-size': "1rem"}}>Don't have an account? <span className="hover" href='#' onClick={()=>redirectUser(true)}>Create one.</span></CardText>
    </form>
  </Card>
);

LoginForm.propTypes = {
  onSubmit: PropTypes.func.isRequired,
  onChange: PropTypes.func.isRequired,
  errors: PropTypes.object.isRequired,
  user: PropTypes.object.isRequired
};

export default LoginForm;
