import React from 'react';
import '../styles/sequencer.css';
import SequencerTrack from './SequencerTrack';
import SequencerTrackTitle from './SequencerTrackTitle';

export default class Sequencer extends React.Component {
  constructor(props) {
    super(props);
  }

  render() {
    const { samples, audioElements, theme } = this.props;
    if (theme === undefined) {
      return null
    }

    const sampleNames = samples.map( (sample, i) => {
      return (
        <SequencerTrackTitle name={sample.name} audio={audioElements[i]}/>
      )
    });

    const sequencerTracks = samples.map( sample => {
      return (
        <SequencerTrack sample={sample} audio={sample.url} />
      )
    })
    
    return (
      <section id="sequencer">
        <ul id="sequencer-left">
          {sampleNames}
        </ul>
        <section id="sequencer-main">
          {sequencerTracks}
        </section>
      </section>
    );
  }
}