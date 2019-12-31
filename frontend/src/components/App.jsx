import React from 'react';
import logo from '../logo.svg';
import '../styles/App.css';
import Sampler from './Sampler';
import Sequencer from './Sequencer';

class App extends React.Component {
	constructor(props) {
		super(props);

		this.samples = new Array(8);
	}

	componentDidMount() {
		this.props.fetchDefaultTheme();
		this.props.fetchThemes();
		this.props.fetchSamples();
	}

	renderAudioElementsList() {
		if (!this.props.currentTheme || !this.props.currentSamples) return null;

		const audioElements = this.props.currentSamples.map((sample, idx) => {
			return (
				<li key={idx} className="audio-elements-list">
					<audio
						ref={audio => (this.samples[idx] = audio)}
						src={sample.url}
					>
						Your browser does not support audio playback
					</audio>
				</li>
			);
		});

		return (
			<ul className='samplesList'>{audioElements}</ul>
		)
	}

	render() {
		return (
      <main>
				{this.renderAudioElementsList()}
				<Sampler samples={this.samples} />
				<Sequencer samples={this.samples} />
      </main>
    );
	}
}

export default App;


