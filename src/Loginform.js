import React, { useState } from 'react';
import { Button, Form, FormGroup, Input } from 'reactstrap';
import {
  FacebookLoginButton,
  GoogleLoginButton
} from 'react-social-login-buttons';
// import {
//   auth,
//   signInWithFacebook,
//   signInWithGoogle
// } from '../firebase/firebase.utils';
import logo from './assests/logo.png';
import './loginform.css';
import { Link } from 'react-router-dom';

export default function Loginform() {
  const [state, setstate] = useState({
    email: '',
    password: ''
  });

  const handleSubmit = async event => {
    event.preventDefault();
  };

  const handleChange = event => {
    const { name, value } = event.target;
    setstate({ [name]: value });
  };

  return (
    <div className="supermain">
      <div className="main">
        <div className="main-signup">
          <div className="sidebar-signup">
            <h3 style={{ fontSize: '23px', fontWeight: 'bold' }}>
              Welcome to Trade
            </h3>
            <span>
              <p>Login to see our Trade</p>
              <p>Platform in Action</p>
            </span>
            <h5 style={{ fontSize: '13px', fontWeight: 'normal' }}>
              <b>Forgot Password?</b>
            </h5>
          </div>
          <Form
            onSubmit={handleSubmit}
            style={{
              display: 'flex',
              justifyContent: 'space-around',
              flexDirection: 'column'
            }}
          >
            <img src={logo} alt="logo" style={{ color: 'blue' }} />

            <span>
              <FormGroup>
                <Input
                  className="mb-1"
                  type="email"
                  name="email"
                  value={state.email}
                  onChange={handleChange}
                  placeholder="Enter Your Email"
                  required
                />

                <Input
                  type="password"
                  name="password"
                  value={state.password}
                  onChange={handleChange}
                  placeholder="Enter Your Password"
                  required
                />
              </FormGroup>
              <Link to="/home">
                <Button
                  className="btn-login p-1 text-center"
                  type="submit"
                  style={{
                    width: '100%',
                    backgroundColor: '#120f5d',
                    fontWeight: 'bold'
                  }}
                >
                  Login
                </Button>
              </Link>
              <div className="text-center pt-3">
                Or continue with your social account
              </div>
            </span>
            <span>
              <FacebookLoginButton
                className="google-button text-center"
                // onClick={signInWithFacebook}
              />

              <GoogleLoginButton
                className="google-button"
                // onClick={signInWithGoogle}
              />
            </span>
          </Form>
        </div>
      </div>
      <footer style={{ color: 'white' }} className="login-footer">
        CopyRight © 2019 Trade and affiliates. All rights reserved.{' '}
      </footer>
    </div>
  );
}
