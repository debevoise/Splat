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

    this.playStep = this.playStep.bind(this);
    this.playAtBeat = this.playAtBeat.bind(this);
    this.state = {
      currentBeat: 0,
      play: false,
      bpm: 120
    };

    this.setPlayState = this.setPlayState.bind(this);
    this.setBPM = this.setBPM.bind(this);
    this.checkValue = this.checkValue.bind(this);
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
    Tone.Transport.swing = 0;
    Tone.Transport.scheduleRepeat(this.playStep, "8n");
  }

  setPlayState(value) {
    this.setState({ play: value });
    Tone.Transport.toggle();
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

  render() {
    const { samples, audioElements, theme } = this.props;
    if (theme === undefined) {
      return null;
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
              id="bpm-input"
              align="right"
              onChange={this.setBPM}
              onBlur={this.checkValue}
            />BPM
          </label>
        </section>
        <section id="sequencer-main">
          <ul id="sequencer-left">
            {sampleNames}
          </ul>
          <section id="sequencer-grid">
            {tracks}
          </section>
        </section>
      </div>
    );
  }
}