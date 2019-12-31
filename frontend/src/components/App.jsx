import React from 'react';
import '../styles/App.css';
import Sampler from './Sampler';
import Sequencer from './Sequencer';

class App extends React.Component {
	constructor(props) {
		super(props);

		// this.samples = new Array(8);
		this.state = {
			loaded: false,
			samples: new Array(8)
		};
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
				<li key={sample._id} className="audio-elements-list">
					<audio
						// ref={audio => (this.samples[idx] = audio)}
						ref={audio => { 
							if (!this.state.loaded) {
								this.setState(({ samples }) => {
									const newSamples = [...samples];
									newSamples[idx] = audio;
									return { samples: newSamples };
								})
							}
						}}
						src={sample.url}
					>
						Your browser does not support audio playback
					</audio>
				</li>
			);
		});

		if (!this.state.loaded) {
			this.setState({
				loaded: true
			})
		}
		return (
			<ul className='samplesList'>{audioElements}</ul>
		)
	}

	render() {
		const audioElements = this.renderAudioElementsList();

		return (
			<main>
				{audioElements}
				<Sampler samples={this.state.samples} />
				<Sequencer samples={this.state.samples} />
			</main>
		);
	}
}

export default App;


