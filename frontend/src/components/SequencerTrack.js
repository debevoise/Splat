import React from 'react';
import '../styles/sequencer.css';

export default class SequencerTrack extends React.Component {
  constructor(props) {
    super(props);

    let stateArr = new Array(16);
    stateArr.fill(false);
    this.state = {
      stateArr
    };

    this.handleClick = this.handleClick.bind(this);
  }

  handleClick(i) {
    return (e) => {
      e.preventDefault();
      this.setState(({ stateArr }) => {
        let newStateArr = stateArr.slice();
        newStateArr[i] = !newStateArr[i];
        return { stateArr: newStateArr };
      }
      );
    };
  }

  render() {
    if (this.props.sample === undefined) {
      return null;
    }

    const { sample } = this.props;
    const trackNode = [];

    let i;
    for (i = 0; i < 16; i++) {
      trackNode.push(i);
    }

    const tracks = trackNode.map((track, i) => {
      let idx = this.state.stateArr[i];
      return (
        <div className={`track ${idx}`} onClick={this.handleClick(i)} idx={i} key={i}></div>
      )
    })

    return (
      <>
        {tracks}
      </>
    )
  }
}