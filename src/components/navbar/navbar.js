import React, { Component } from 'react';
import './navbar.css';

class Navbar extends Component {
  render() {
    return (
      <div className="Navbar">
        <ul className="atags" id="myMenu">
          <li data-menuanchor="Home">
            <a href="#Home">Intro</a>
          </li>
          <li data-menuanchor="Projects">
            <a href="#Projects">Projects</a>
          </li>
          <li data-menuanchor="Contact">
            <a href="#Contact">Contact</a>
          </li>
        </ul>
      </div>
    );
  }
}

export default Navbar;
