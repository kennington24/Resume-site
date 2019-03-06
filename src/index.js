import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import registerServiceWorker from './registerServiceWorker';
import Fullpage from './components/fullpage/fullpage';
import Navbar from './components/navbar/navbar';
import Background from './files/Images/BWpainting.jpg';

ReactDOM.render(
  <div>
    <img src={Background} className="background" alt="background" />
    <Navbar />
    <Fullpage />
  </div>,

  document.getElementById('root')
);
registerServiceWorker();
