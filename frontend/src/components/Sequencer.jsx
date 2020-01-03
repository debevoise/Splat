import React from 'react';
import '../styles/sequencer.css';
import SequencerTrack from './SequencerTrack';
import SequencerTrackTitle from './SequencerTrackTitle';
import { connect } from 'react-redux';
import Tone from "tone";

const msp = state => ({

});

const mdp = dispatch => ({
  
});

class Sequencer extends React.Component {
  constructor(props) {
    super(props);

    this.trackRefs = Array(8);
    for (let i = 0; i < this.trackRefs.length; i++) {
      this.trackRefs[i] = React.createRef();
    }

    this.playStep = this.playStep.bind(this);
    this.playAtBeat = this.playAtBeat.bind(this);
    this.state = {
      currentBeat: 0,
      hasPlayed: false,
      play: false,
      bpm: 120,
      swing: 0
    };

    this.handleSpace = this.handleSpace.bind(this);
    this.handleSwingSelect = this.handleSwingSelect.bind(this);
    this.setPlayState = this.setPlayState.bind(this);
    this.setBPM = this.setBPM.bind(this);
    this.checkValue = this.checkValue.bind(this);
  }

  playStep(time) {
    this.setState(({ currentBeat }) => {
      this.playAtBeat(this.state.currentBeat, time);
      return {
        currentBeat: (currentBeat+1) % 16
      };
    });
  }

  playAtBeat(beat, time) {
    this.trackRefs.forEach((trackRef) => {
      if (trackRef.current) {
        trackRef.current.playAtBeat(beat, time);
      }
    });
  }

  componentDidMount() {
    Tone.Transport.swing = 0;
    Tone.Transport.swingSubdivision = "16n";
    Tone.Transport.scheduleRepeat(this.playStep, "16n");
  }

  setPlayState(value) {
    this.setState({ play: value, hasPlayed: true });
    Tone.Transport.toggle();
  }

  handleSwingSelect(e) {
    let swing;

    switch (e.target.value) {
      case '1':
        swing = 0.05;
        break;
      case '2':
        swing = 0.15;
        break;
      case '3':
        swing = .3;
        break;
      case '4': 
        swing = .6;
        break;
      case '5': 
        swing = 1;
        break;
      case '0':
      default:
        swing = 0;
        break;
    }
    Tone.Transport.swing = swing;
    this.setState({ swing });
  }

   

  handleSpace(e) {
    if (e.key === ' ' || e.key === 'Spacebar') {
      this.setPlayState(!this.state.play)
    }
  }

  setBPM(e) {
    this.setState({ bpm: e.target.value });
  }



  checkValue(e) {
    if (e.target.value > 300 || e.target.value < 20) {
      this.setState({ bpm: 120 });
      Tone.Transport.bpm.value = 120;
    } else {
      Tone.Transport.bpm.value = parseInt(e.target.value);
    }
  }

  renderSwingDropdown() {
    return (
      <div className='swing-selector'>
        <span>
          Swing: 
        </span>
        <select onChange={this.handleSwingSelect}>
          <option value='0'>Vanilla</option>
          <option value='1'>Breezy</option>
          <option value='2'>Okay!</option>
          <option value='3'>zaZAAM</option>
          <option value='4'>Turbo Stank</option>
          <option value='5'>Nuclear</option>
        </select>
      </div>
    )
  }

  render() {
    window.addEventListener('keydown', this.handleSpace)
    const { samples, audioNodes, theme } = this.props;
    if (theme === undefined) {
      return null;
    }

    const sampleNames = samples.map( (sample, i) => {
      return (
        <SequencerTrackTitle 
          name={sample.name} 
          audio={audioNodes[i]} 
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
          currentBeat={(this.state.currentBeat + 15 ) % 16}
          playing={this.state.play}
          hasPlayed={this.state.hasPlayed}
          ref={this.trackRefs[i]}/>
      )
    });

    return (
      <div>
        <section className="sequence-controls">
          {this.state.play ? (
            <i
              className="fas fa-pause"
              onClick={() => this.setPlayState(false)}
            ></i>
          ) : (
            <i
              className="fas fa-play"
              onClick={() => this.setPlayState(true)}
            ></i>
          )}
          {this.renderSwingDropdown()}
          <label htmlFor="bpm-input">
            <input
              type="number"
              min="20"
              max="300"
              value={this.state.bpm}
              id="bpm-input"
              align="right"
              onChange={this.setBPM}
              onBlur={this.checkValue}
            />
            BPM
          </label>
        </section>
        <section id="sequencer-main">
          <ul id="sequencer-left">{sampleNames}</ul>
          <section id="sequencer-grid">{tracks}</section>
        </section>
      </div>
    );
  }
}

export default connect(msp, mdp)(Sequencer);