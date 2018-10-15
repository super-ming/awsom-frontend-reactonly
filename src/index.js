import React from 'react';
import { render } from 'react-dom';
import { BrowserRouter as Router } from 'react-router-dom';
import 'bootstrap/dist/css/bootstrap.min.css';
import App from './App';
import registerServiceWorker from './registerServiceWorker';

require('dotenv').config();

render(
  <Router>
    <App />
  </Router>,
  document.getElementById('root')
);
registerServiceWorker();
