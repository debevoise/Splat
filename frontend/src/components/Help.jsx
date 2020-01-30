import React from 'react';
import '../styles/About.css';


class Help extends React.Component {
  render () {
    return (
      <div className="about-modal-container">
        <h1 className="about-logo">SPLAT CONTROLS</h1>
        <hr/>
        <h4>
          So many things to click, so little time!
        </h4>
        <p>
          Below you will find both a Sampler and Sequencer. Click on a sample 
          pad to play its associated sound. Use the Theme selector,
          located at the top of the page, to load a brand new set of sounds into
          the Sampler!
        </p>
        <p>
          Click on sequencer square to toggle the audio sample, specified on the
          left, on that beat. Play and pause your created track with the button
          in the upper left corner and control the speed of playback by changing
          the BPM. Load a hot SPLAT beat using the Preset selector. Influence
          the space between subsequent beats using the Swing selector (options
          range from least to most swing).
        </p>
      </div>
    );
  }
}

export default Help;