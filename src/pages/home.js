import React, { Component } from 'react';
// import video from '';
import Navbar from '../components/navbar/navbar';
import Contact from '../components/contact/contact';
import Background from '../components/background/background';

class Home extends Component {
  render() {
    return (
      <div className="Homeapp">
        <Navbar />
        <Contact />
        <div className="topdescription">asfdasdf </div>
        <div className="description"> asfdasdf</div>
        <div className="description"> asdfasdf</div>
        <Background />
      </div>
    );
  }
}

export default Home;
