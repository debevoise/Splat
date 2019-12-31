import React from 'react';
import '../styles/App.css';
import NavBar from './NavBar';
import Sampler from './Sampler';
import Sequencer from './Sequencer';
import Modal from './Modal';

class App extends React.Component {
	constructor(props) {
		super(props);

		// this.samples = new Array(8);
		this.state = {
			loaded: false,
			audioElements: new Array(8)
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
				<li key={idx} className="audio-elements-list">
					<audio
						// ref={audio => (this.samples[idx] = audio)}
						ref={audio => { 
							if (!this.state.loaded) {
								this.setState(({ audioElements }) => {
									const newAudioElements = [...audioElements];
									newAudioElements[idx] = audio;
									return { audioElements: newAudioElements };
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
		return (
			<div>
				<Modal/>
				<NavBar />
				<main>
					{this.renderAudioElementsList()}
					<Sampler audioElements={this.state.audioElements} />

					<Sequencer
						audioElements={this.state.audioElements}
						samples={this.props.currentSamples} />
				</main>
			</div>
    );
	}
}

export default App;


