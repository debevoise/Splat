import React from "react";
import SamplePad from './SamplePad';
import '../styles/Sampler.css';


export default class Sampler extends React.Component {
  render() {
    
    const { audioElements } = this.props;
    const samplePads = audioElements.map((audio, idx) => {
      const sampleInfo = this.props.samples[idx];
      return <SamplePad key={idx} audio={audio} keypress={idx} sampleInfo={sampleInfo}/>
    })

    return (
      <div className='sample-section-container'>
        <section id="sampler">
          {samplePads}
        </section>
      </div>
    );
  }
}
