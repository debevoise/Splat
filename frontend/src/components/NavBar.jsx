import React from 'react';
import '../styles/NavBar.css';

class NavBar extends React.Component {
  constructor(props) {
    super(props);
  }
  render() {
    return (
      <div className="navbar">
        <div className="navbar-left">
          <div className="navbar-logo">splat</div>
        </div>
        <div className="navbar-center">
          nav-middle
        </div>
        <div className="navbar-right">
          About
        </div>
      </div>
    )
  }
}

export default NavBar