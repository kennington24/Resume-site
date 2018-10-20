import React, { Component } from 'react';
// import video from '';
import Navbar from '../components/navbar/navbar';
import Contact from '../components/contact/contact';
import selfie from './IMG_0206.jpg';

class About extends Component {
  render() {
    return (
      <div className="Homeapp">
        <Navbar />
        <Contact />
        <div className="topdescription">
          <img src={selfie} className="selfie" alt="selfie" />
          <p>
            Hey there! My name is Kenny Pham and I am from the best state in the
            US, Colorado. <br /> In my free time I like to hike, play games, and
            hangout with my dog.
          </p>
        </div>
        <div className="description"> asfdasdf</div>
        <div className="description"> asdfasdf</div>
      </div>
    );
  }
}

export default About;
