import React from 'react';
import '../styles/sequencer.css';
import SequencerTrack from './SequencerTrack';
import SequencerTrackTitle from './SequencerTrackTitle';
import { connect } from 'react-redux';
import Tone from "tone";

const msp = state => {
  const currentSequenceId = state.session.currentSequence;
  const sequence = state.entities.sequences[currentSequenceId];

  return {
    sequence
  };
};

const mdp = dispatch => ({
  
});

class Sequencer extends React.Component {
  constructor(props) {
    super(props);

    this.playStep = this.playStep.bind(this);
    this.playAtBeat = this.playAtBeat.bind(this);
    this.state = {
      currentBeat: 0,
      hasPlayed: false,
      play: false,
      swing: 0,
      bpm: 120,
      tracks: {}
    }; 

    if (props.sequence) {
      this.state.bpm = props.sequence.tempo;
      this.state.swing = props.sequence.swing;
      props.sequence.tracks.forEach((track, i) => {
        this.state.tracks[i] = track.pattern;
      })
      Tone.Transport.bpm.value = this.state.bpm;
      Tone.Transport.swing = this.state.swing;
    }
    else {
      for (let i = 0; i < 8; i++) {
        const track = Array(16);
        track.fill(false);
        this.state.tracks[i] = track;
      }
    }

    this.setEmptyTracks = this.setEmptyTracks.bind(this);
    this.handleSpace = this.handleSpace.bind(this);
    this.handleSwingSelect = this.handleSwingSelect.bind(this);
    this.setPlayState = this.setPlayState.bind(this);
    this.setBPM = this.setBPM.bind(this);
    this.confirmBPM = this.confirmBPM.bind(this);
    this.handleBPMEnter = this.handleBPMEnter.bind(this);
    this.handleClick = this.handleClick.bind(this);
    this.handleSequenceSelect = this.handleSequenceSelect.bind(this);
  }

  handleClick(track) {
    return (beat) => (e) => {
      e.preventDefault();
      this.setState(({ tracks }) => {
        const newTrack = Array.from(tracks[track]);
        newTrack[beat] = !newTrack[beat];
        const newTracks = {...tracks, [track]: newTrack}
        return { tracks: newTracks };
      })
    }
  }

  setEmptyTracks() {
    let tracks = {};
    for (let i = 0; i < 8; i++) {
      const track = Array(16);
      track.fill(false);
      tracks[i] = track;
    }

    this.setState({ tracks })
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
    const { tracks } = this.state;
    const { audioNodes } = this.props;

    for (let i = 0; i < 8; i++) {
      const track = tracks[i];

      if (track[beat]) {
        const audio = audioNodes[i];
        if (audio.loaded) {
          audio.start(time);
        }
      }
    }
  }

  componentDidMount() {
    Tone.Transport.swing = 0;
    Tone.Transport.swingSubdivision = "16n";
    Tone.Transport.scheduleRepeat(this.playStep, "16n");
  }

  componentDidUpdate(prevProps) {
    if ((!prevProps.sequence && this.props.sequence) || 
          (prevProps.sequence && prevProps.sequence._id !== this.props.sequence._id)) {
      const newTracks = {};
      this.props.sequence.tracks.forEach((track, i) => {
        newTracks[i] = track.pattern;
      })
      this.setState({
        bpm: this.props.sequence.tempo,
        swing: this.props.sequence.swing,
        tracks: newTracks
      })
      Tone.Transport.bpm.value = this.props.sequence.tempo;
      Tone.Transport.swing = this.props.sequence.swing;
    }
  }

  setPlayState(value) {
    this.setState({ play: value, hasPlayed: true });
    Tone.Transport.toggle();
  }

  handleSequenceSelect(e) {
    const seqId = e.target.value;
    const themeId = this.props.allSequences[seqId].theme;
    this.props.chooseTheme(themeId)
    this.props.setCurrentSequence(seqId);
  }

  handleSwingSelect(e) {
    let swing = parseFloat(e.target.value)
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

  confirmBPM(e) {
    if (e.target.value > 300 || e.target.value < 20) {
      this.setState({ bpm: 120 });
      Tone.Transport.bpm.value = 120;
    } else {
      Tone.Transport.bpm.value = parseInt(e.target.value);
      e.target.blur();
    }
  }

  handleBPMEnter(e) {
    if (e.keyCode === 13) {
      this.confirmBPM(e);
    }
  }

  renderSwingDropdown() {
    const swingValues = [
      { value: 0.0, name: 'Vanilla' },
      { value: 0.05, name: 'Breezy' },
      { value: 0.15, name: 'Okay!' },
      { value: 0.3, name: 'zaZAAM' },
      { value: 0.6, name: 'Turbo Stank' },
      { value: 1.0, name: 'Nuclear' },
    ]

    const swingOptions = swingValues.map(({ value, name }) => (
      <option value={value} selected={value === this.state.swing} key={name}>
        {name}
      </option>
    ))

    return (
      <div className='swing-selector'>
        <span>
          Swing: 
        </span>
        <select onChange={this.handleSwingSelect}>
          {swingOptions}
        </select>
      </div>
    )
  }

  renderClearTracksButton() {
    return (
      <button onClick={this.setEmptyTracks} className='clear-button'>
        Clear Tracks
      </button>
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
          handleClick={this.handleClick(i)}
          track={this.state.tracks[i]}/>
      )
    });


    const presets = Object.values(this.props.allSequences || {}).map((ele, i) => {
      return <option value={ele._id}>{ele.name}</option>;
    })


    return (
      <div className="big-seq">
        <section className="sequence-controls">
          
          <div className='swing-selector' style={{padding:0}}>
            <select onChange={this.handleSequenceSelect}>
              <option value='0' disabled selected>Presets</option>
              {presets}
            </select>
          </div>

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

          <label htmlFor="bpm-input">
            <input  
              type="number"
              min="20"
              max="300"
              value={this.state.bpm}
              id="bpm-input"
              align="right"
              onChange={this.setBPM}
              onBlur={this.confirmBPM}
              onKeyDown={this.handleBPMEnter}
              />
            BPM
          </label>
          {this.renderSwingDropdown()}
          {this.renderClearTracksButton()}
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