import React from 'react';
import ReactDOM from 'react-dom';
import App from './App';
import './index.css';
import './js/turf.min.js';
import './js/mapbox-gl.css';
import './js/mapbox-gl.js';
import './js/d3.v3.min.js';

ReactDOM.render(
  <App />,
  document.getElementById('map')
);
