import React, { Component } from 'react';
import './navbar.css';

class Sidebar extends Component {
  render() {
    return (
      <div className="Navbar">
        <nav className="atags">
          <a href="/#Home">Home</a>
          <a href="/#Projects">Projects</a>
          <a href="/#Contact">Contact</a>
        </nav>
      </div>
    );
  }
}

export default Sidebar;
