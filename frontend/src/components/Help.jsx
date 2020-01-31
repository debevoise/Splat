import React from 'react';
import '../styles/Help.css';


class Help extends React.Component {
  render () {
    return (
      <div className="help-modal-container">
        <span className="help-logo">SPLAT CONTROLS</span>
        <hr />
        <h4>So many things to click, so little time!</h4>
        <br/>
        <ul>
          <li>
            Sampler: Click on a pad to play its associated sound
          </li>
          <br/>
          <li>
            Sequencer: Toggle squares to play them on their associated beat
          </li>
          <br/>
          <li>
            Theme Selector: load a brand spanking new set of sounds into the 
            Sampler
          </li>
          <br/>
          <li>
            Preset Selector: load a hot SPLAT beat into the Sequencer
          </li>
          <br/>
          <li>
            Swing Selector: influence the space between subsequent beats, get 
            stanky with it
          </li>
        </ul>
        {/* <p>
          Use the Theme selector, located at the top of the page, to load a
          brand new set of sounds into the Sampler! Play and pause your created
          track with the button in the upper left corner and control the speed
          of playback by changing the BPM. Load a hot SPLAT beat using the
          Preset selector. Influence the space between subsequent beats using
          the Swing selector (options range from least to most swing).
        </p> */}
      </div>
    );
  }
}

export default Help;