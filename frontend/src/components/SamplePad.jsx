import React from 'react';
import '../styles/SamplePad.css';

export default class SamplePad extends React.Component {
  constructor(props) {
    super(props);

    this.handlePress = this.handlePress.bind(this);
    this.handleKeyPress = this.handleKeyPress.bind(this);
  }

  handlePress(e) {
    e.preventDefault();
    const { audio } = this.props;
    audio.start();
  }

  handleKeyPress(e) {
    const { audio, keypress } = this.props;
    if (audio.paused && e.key === keypress) {
      audio.play();
    } else {
      audio.currentTime = 0;
    }
  }

  render() {
    return (
      <div className="sample" onMouseDown={this.handlePress} onKeyDown={this.handleKeyPress}>
        <div className="sample-name">
          {this.props.sampleInfo.name.replace(/^\d+\s*/, '')}
        </div>
        <div></div>
      </div>
    )
  }
}