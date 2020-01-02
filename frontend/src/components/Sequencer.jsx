import React from 'react';
import '../styles/sequencer.css';
import SequencerTrack from './SequencerTrack';
import SequencerTrackTitle from './SequencerTrackTitle';

export default class Sequencer extends React.Component {
  constructor(props) {
    super(props);

    this.trackRefs = Array(8);
    for (let i = 0; i < this.trackRefs.length; i++) {
      this.trackRefs[i] = React.createRef();
    }

    this.state = {
      currentBeat: 0
    }

    this.toggleLoop = this.toggleLoop.bind(this);
    this.playStep = this.playStep.bind(this);
    this.playAtBeat = this.playAtBeat.bind(this);
  }

  toggleLoop() {
    if (!this.timer) {
      this.timer = setInterval(this.playStep, 250);
    } else {
      clearInterval(this.timer);
      this.timer = null;
    }
  }

  playStep() {
    this.setState(({ currentBeat }) => {
      this.playAtBeat(this.state.currentBeat);
      return {
        currentBeat: (currentBeat+1) % 16
      }
    })
  }

  playAtBeat(beat) {
    this.trackRefs.forEach((trackRef) => {
      if (trackRef.current) {
        trackRef.current.playAtBeat(beat)
      }
    })
  }

  render() {
    const { samples, audioElements, theme } = this.props;
    if (theme === undefined) {
      return null
    }

    const sampleNames = samples.map( (sample, i) => {
      return (
        <SequencerTrackTitle 
          name={sample.name} 
          audio={audioElements[i]} 
          key={sample._id}/>
      )
    });

    const tracks = samples.map( (sample, i) => {
      return (
        <SequencerTrack 
          sample={sample} 
          audio={audioElements[i]} 
          key={sample._id}
          playAtBeat={this.playAtBeat}
          ref={this.trackRefs[i]}/>
      )
    });
    
    return (
      <section id="sequencer">
        <ul id="sequencer-left">
          {sampleNames}
        </ul>
        <section id="sequencer-main">
          {tracks}
        </section>
        <div onClick={this.toggleLoop}>
          Play
        </div>
      </section>
    );
  }
}