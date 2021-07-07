import React, { Component } from 'react';
import "./navBar.css"

class NavBar extends Component {
    state = {  };

    render() { 
        return (
            
        <div className="navbar-page">
            <nav className="navbar navbar-expand-lg navbar-light bg-light">
  <div className="container-fluid">
    <a className="navbar-brand" href="/#">Organika
    </a>
    <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarNav" aria-controls="navbarNav" aria-expanded="false" aria-label="Toggle navigation">
      <span className="navbar-toggler-icon"></span>
    </button>
    <div className="collapse navbar-collapse" id="navbarNav">
      <ul className="navbar-nav">
        <li className="nav-item">
          <a className="nav-link active" aria-current="page" href="/#">Home</a>
        </li>
        <li className="nav-item">
          <a className="nav-link" href="/#">Features</a>
        </li>
        <li className="nav-item">
          <a className="nav-link" href="/#">Pricing</a>
        </li>
        <li className="nav-item">
          <a className="nav-link disabled" href="/#" tabIndex="-1" aria-disabled="true">Disabled</a>
        </li>
      </ul>
    </div>
  </div>
</nav>
            <h6>Put the menu here</h6>
        </div>
        );
    }
}

export default NavBar;

