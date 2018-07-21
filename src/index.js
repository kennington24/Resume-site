import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import registerServiceWorker from './registerServiceWorker';
import { BrowserRouter as Router, Route } from 'react-router-dom';
import Homepage from './pages/home';

ReactDOM.render(
  <Router>
    <div>
      <Route exact path="/" component={Homepage} />
      <Route exact path="/experience" />
      <Route exact path="/resume" />
    </div>
  </Router>,
  document.getElementById('root')
);
registerServiceWorker();
