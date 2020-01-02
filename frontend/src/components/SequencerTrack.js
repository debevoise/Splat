import React from 'react';
import '../styles/sequencer.css';

export default class SequencerTrack extends React.Component {
  constructor(props) {
    super(props);

  }

  handleClick(e) {
    e.preventDefault();
  }

  render() {
    if (this.props.sample === undefined) {
      return null
    }

    return(
      <>
        <div className="track" ></div>
        <div className="track" ></div>
        <div className="track" ></div>
        <div className="track" ></div>
        <div className="track" ></div>
        <div className="track" ></div>
        <div className="track" ></div>
        <div className="track" ></div>
        <div className="track" ></div>
        <div className="track" ></div>
        <div className="track" ></div>
        <div className="track" ></div>
        <div className="track" ></div>
        <div className="track" ></div>
        <div className="track" ></div>
        <div className="track" ></div>
      </>
    )
  } 
}