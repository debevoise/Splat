import React from 'react';

export default class SequencerTrackTitle extends React.Component {
  constructor(props) {
    super(props);

    this.handlePress = this.handlePress.bind(this);
  }

  handlePress(e) {
    e.preventDefault();
    const { audio } = this.props;
    audio.start();
  }

  render() {
    const { name } = this.props;
    return(
      <li className="track-title" onClick={this.handlePress}>
        {name}
      </li>
    )
  }
}