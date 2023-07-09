import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import App from './App';
import { BrowserRouter as Router, Routes ,Route } from 'react-router-dom';
import Signup from './Signup';

const root = ReactDOM.createRoot(
  document.getElementById('root') as HTMLElement
);
root.render(
  <React.StrictMode>
    <Router>
        <Routes>
        <Route path="/" Component={App} />

        <Route path="/sign-up" Component={Signup} />
        </Routes>
      </Router>
  </React.StrictMode>
);


