import React, { Component } from 'react';
import './navbar.css';

class Sidebar extends Component {
  render() {
    return (
      <div className="Navbar">
        <ul className="atags" id="myMenu">
          <li>
            <a href="#Home" data-menuanchor="Home" className="">
              Home
            </a>
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

export default Sidebar;
