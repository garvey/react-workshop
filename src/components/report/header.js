import React, { Component } from 'react';
import FaAngleDown from 'react-icons/lib/fa/angle-down';

export class Header extends React.Component {
  render() {
    return (
      <div>
        <header className="header pt-3 pb-3">
          <nav className="navbar navbar-expand-lg navbar-light">
            <div className="container">
              <a className="navbar-brand" href="#"><img src="img/Precise-tv-logo.svg" /></a>
              <button className="navbar-toggler collapsed" type="button" data-toggle="collapse" data-target="#navbarNav #navbar-collapse" aria-controls="navbarNav" aria-expanded="false" aria-label="Toggle navigation">
                Menu
              </button>
              <div className="collapse navbar-collapse mr-auto" id="navbarNav">
                <ul className="navbar-nav ml-auto">
                  <li className="nav-item active">
                    <a className="nav-link" href="#">Help <span className="sr-only">(current)</span></a>
                  </li>
                  <li className="nav-item">
                    <a className="nav-link" href="#">Company <FaAngleDown /></a>
                  </li>
                </ul>
              </div>
            </div>
          </nav>
        </header>
      </div>
    );
  }
}

export default Header;