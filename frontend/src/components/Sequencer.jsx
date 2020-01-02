import React from 'react';
import '../styles/sequencer.css';
import SequencerTrack from './SequencerTrack';
import SequencerTrackTitle from './SequencerTrackTitle';
import Tone from "tone";

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
    Tone.Transport.toggle();
  }

  playStep(time) {
    this.setState(({ currentBeat }) => {
      this.playAtBeat(this.state.currentBeat, time);
      return {
        currentBeat: (currentBeat+1) % 16
      }
    })
  }

  playAtBeat(beat, time) {
    this.trackRefs.forEach((trackRef) => {
      if (trackRef.current) {
        trackRef.current.playAtBeat(beat, time)
      }
    })
  }

  componentDidMount() {
    Tone.Transport.bpm.value = 120;
    Tone.Transport.swing = 0;
    Tone.Transport.scheduleRepeat(this.playStep, "8n");
  }

  render() {
    const { samples, audioElements, theme } = this.props;
    if (theme === undefined) {
      return null
    }

    const audioNodes = samples.map(sample => {
      return new Tone.Player(sample.url).toMaster();
    });

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
          audio={audioNodes[i]} 
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