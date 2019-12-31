import React from 'react';
import '../styles/SamplePad.css';

export default class SamplePad extends React.Component {
  constructor(props) {
    super(props);

    this.handlePress = this.handlePress.bind(this);
  }

  handlePress(e) {
    e.preventDefault();
    const { audio } = this.props;
    if (audio.paused) {
      audio.play();
    } else {
      audio.currentTime = 0
    }
  }

  render() {
    return (
      <div className="sample" onMouseDown={this.handlePress}>
      </div>
    )
  }
}