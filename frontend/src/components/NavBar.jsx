import React from 'react';
import { connect } from 'react-redux';
import '../styles/NavBar.css';
import { openModal } from '../actions/ui_actions';
import ThemePicker from './ThemePicker';

const mdp = dispatch => ({
  openModal: (modal) => dispatch(openModal(modal))
});

class NavBar extends React.Component {

  render() {
    return (
      <div className="navbar">
        <div className="navbar-left">
          <div
            className="navbar-logo"
            style={{ cursor: "pointer" }}
            onClick={() => this.props.openModal("about")}
          >
            <i className="logo fas fa-asterisk" />splat
          </div>
        </div>
        <div className="navbar-center">
          <ThemePicker />
        </div>
        <div className="navbar-right">
          <p
            style={{ cursor: "pointer" }}
            onClick={() => this.props.openModal("help")}
          >
            <i className="fas fa-question-circle"></i>Help
          </p>
        </div>
      </div>
    );
  }
}

export default connect(null, mdp)(NavBar)