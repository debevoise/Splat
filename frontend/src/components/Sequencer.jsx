import React from 'react';
import '../styles/sequencer.css';
import SequencerTrack from './SequencerTrack';
import SequencerTrackTitle from './SequencerTrackTitle';

export default class Sequencer extends React.Component {
  constructor(props) {
    super(props);

    this.trackRefs = Array(16);
    for (let i = 0; i < this.trackRefs.length; i++) {
      this.trackRefs[i] = React.createRef();
    }

    this.playAtBeat = this.playAtBeat.bind(this);
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
      </section>
    );
  }
}