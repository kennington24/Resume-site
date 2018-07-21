import React, { Component } from 'react';
import './navbar.css';

class Sidebar extends Component {
  render() {
    return (
      <div className="Navbar">
        <div className="atags">
          <a href="/">About Me</a>
          <a href="/experience">Experience</a>
          <a href="/projects">Resume</a>
          <a href="/hobbies">Hobbies</a>
          <a href="talos">My dog</a>
        </div>
      </div>
    );
  }
}

export default Sidebar;
