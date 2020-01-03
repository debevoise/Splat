import React from 'react';
import '../styles/sequencer.css';

export default class SequencerTrack extends React.Component {
  render() {
    const { track, currentBeat, hasPlayed, sample, playing, handleClick } = this.props;
    
    if (sample === undefined) {
      return null;
    }

    const trackNodes = [];

    for (let i = 0; i < 16; i++) {
      let playState = "";
      const selected = track[i];

      if (hasPlayed) {
        if (selected && currentBeat === i && playing) {
          playState = "playingActive";
        } else if (!selected && currentBeat === i) {
          playState = "playingInactive";
        }
      }
      trackNodes.push(
        <div className={`track ${selected} ${playState}`} onClick={handleClick(i)} idx={i} key={i}></div>
      );
    }


    return (
      <>
        {trackNodes}
      </>
    )
  }
}