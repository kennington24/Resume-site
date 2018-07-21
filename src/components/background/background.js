import React, { Component } from 'react';
import video from './CloudsAndGrass.mp4';
import gif from './clouds___gif_by_popokoli-d52gbw2.gif';
class Background extends Component {
  render() {
    return (
      <div className="Homeapp">
        <video className="videoTag" autoPlay loop muted>
          <source src={video} type="video/mp4" />
        </video>
        <img src={gif} className="gif" alt="clouds gif" />
      </div>
    );
  }
}

export default Background;
