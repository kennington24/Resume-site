import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import registerServiceWorker from './registerServiceWorker';
import { BrowserRouter as Router, Route } from 'react-router-dom';
import Homepage from './pages/home';
// import Talospage from './pages/talos';

ReactDOM.render(
  <Router>
    <div>
      <Route exact path="/" component={Homepage} />
    </div>
  </Router>,
  document.getElementById('root')
);
registerServiceWorker();
