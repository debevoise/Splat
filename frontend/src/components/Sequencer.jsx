import React from 'react';
import '../styles/sequencer.css';
import SequencerTrack from './SequencerTrack';
import SequencerTrackTitle from './SequencerTrackTitle';
import { connect } from 'react-redux';

const msp = state => ({

});

const mdp = dispatch => ({
  
});

class Sequencer extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      play: false,
      bpm: 120
    };

    this.setPlayState = this.setPlayState.bind(this);
    this.setBPM = this.setBPM.bind(this);
  }

  setPlayState(value) {
    this.setState({play: value});
  }

  setBPM(e) {
    this.setState({bpm: e.target.value});
  }

  render() {
    const { samples, audioElements, theme } = this.props;
    if (theme === undefined) {
      return null;
    }

    const sampleNames = samples.map((sample, i) => {
      return (
        <SequencerTrackTitle name={sample.name} audio={audioElements[i]} key={sample._id} />
      )
    });

    const sequencerTracks = samples.map(sample => {
      return (
        <SequencerTrack sample={sample} audio={sample.url} key={sample._id} />
      )
    });

    return (
      <div className="sequ">
        <section className="sequence-controls">
          {this.state.play ? (
            <i className="fas fa-pause" onClick={() => this.setPlayState(false)} ></i>
          ) : (
            <i className = "fas fa-play" onClick = { () => this.setPlayState(true)} ></i>
          )
          }
          <label htmlFor="bpm-input">
            <input
              type="number"
              min="20"
              max="300"
              value={this.state.bpm}
              onChange={this.setBPM}
              id="bpm-input"
              align="right"
            />BPM
          </label>
        </section>
        <section id="sequencer-main">
          <ul id="sequencer-left">
            {sampleNames}
          </ul>
          <section id="sequencer-grid">
            {sequencerTracks}
          </section>
        </section>
      </div>
    );
  }
}

export default connect(msp, mdp)(Sequencer);