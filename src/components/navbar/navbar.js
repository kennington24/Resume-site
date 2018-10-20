import React, { Component } from 'react';
import './navbar.css';

class Sidebar extends Component {
  render() {
    return (
      <div className="Navbar">
        <nav className="atags">
          <a href="/">Home</a>
          <a href="/about">About Me</a>
          <a href="/experience">Experience</a>
          <a href="/projects">Projects</a>
          <a href="/talos">My dog</a>
        </nav>
      </div>
    );
  }
}

export default Sidebar;
