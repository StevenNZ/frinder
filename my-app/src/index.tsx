import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import App from './App';
import { BrowserRouter as Router, Routes ,Route } from 'react-router-dom';
import Signup from './Signup';
import Ping from './Ping';
import Home from './routes/Home';
import Points from './routes/Points';

const root = ReactDOM.createRoot(
  document.getElementById('root') as HTMLElement
);
root.render(

  <React.StrictMode>
    <Router>
        <Routes>
        <Route path="/" Component={Home} />
        <Route path="/sign-up" Component={Signup} />
        <Route path="/pinged-people" Component={Ping} />
        <Route path="/pinging" Component={App}/>
        <Route path="/points" Component={Points}/>
        </Routes>
      </Router>
  </React.StrictMode>
);
