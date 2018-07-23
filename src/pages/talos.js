import React, { Component } from 'react';
// import video from '';
import Navbar from '../components/navbar/navbar';
import Contact from '../components/contact/contact';
import Background from '../components/background/background';
import talos from './IMG_6972.jpg';

class Talos extends Component {
  render() {
    return (
      <div className="Talosapp">
        <Navbar />
        <Contact />
        <div className="topdescription">
          <img src={talos} className="talospic" alt="talos" />
          <p>
            Talos was born on 12/12/12 and is a beautiful 5 year old Black
            Austrailian Shepard.
          </p>
        </div>
        <div className="description" />
        <div className="description"> asdfasdf</div>
        <Background />
      </div>
    );
  }
}

export default Talos;
