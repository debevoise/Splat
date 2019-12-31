import React from "react";
import SamplePad from './SamplePad';
import '../styles/Sampler.css';


export default class Sampler extends React.Component {
  render() {
    const { samples } = this.props;
    const samplePads = samples.map((sample, idx) => {
      return <SamplePad key={idx} sample={sample}/>
    })

    return (
      <section id="sampler">
        {samplePads}
      </section>
    );
  }
}
