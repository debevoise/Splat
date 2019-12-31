import React from 'react';
import '../styles/SamplePad.css';

export default class SamplePad extends React.Component {
  constructor(props) {
    super(props);

    this.audio = React.createRef();

    this.handleClick = this.handleClick.bind(this);
  }

  handleClick(e) {
    e.preventDefault();
    const audio = this.props.sample;
    if (audio.paused) {
      audio.play();
    } else {
      audio.currentTime = 0
    }
  }

  render() {
    const { sample } = this.props;
    if (!sample) {
      return null;
    }

    return (
      <div className="sample" onClick={this.handleClick}>
      </div>
    )
  }
}