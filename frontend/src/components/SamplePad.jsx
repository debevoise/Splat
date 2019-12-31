import React from 'react';
import '../styles/SamplePad.css';

export default class SamplePad extends React.Component {
  constructor(props) {
    super(props);

    this.audio = React.createRef();

    this.handlePress = this.handlePress.bind(this);
  }

  handlePress(e) {
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
      <div className="sample" onMouseDown={this.handlePress}>
      </div>
    )
  }
}