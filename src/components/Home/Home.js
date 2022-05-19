import React from 'react';
import { Link } from 'react-router-dom';

export const Home = () => (
  <div className = 'home-container'>
    <h1>GitHub Battle: battle your friends... and stuff</h1>
    <Link className = 'button' to = '/battle'>
      Battle
    </Link>
  </div>
);
