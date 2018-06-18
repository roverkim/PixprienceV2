import React from 'react';
import { NavBar, Clouds, AuthForm } from '../common/index';
import './homePage.nested.css';

const HomePage = () => (
  <div id="homePage">
    <Clouds />
    <NavBar />
    <AuthForm />
  </div>
);

export default HomePage;
