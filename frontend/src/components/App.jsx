import React from 'react';
import '../styles/App.css';
import NavBar from './NavBar';
import Sampler from './Sampler';
import Sequencer from './Sequencer';
import Modal from './Modal';
import Tone from 'tone';

class App extends React.Component {
	constructor(props) {
		super(props);

		this.state = {
			audioNodes: []
		};
	}

	componentDidMount() {
		this.props.fetchDefaultTheme();
		this.props.fetchThemes();
		this.props.fetchSamples();
	}

	componentDidUpdate(prevProps) {
		if ((!prevProps.currentSamples && this.props.currentSamples) ||
			(prevProps.currentTheme && prevProps.currentTheme._id !== this.props.currentTheme._id)) {
			this.createAudioNodes();
		}
	}

	createAudioNodes() {
		if (!this.props.currentTheme || !this.props.currentSamples) return null;

		const audioNodes = this.props.currentSamples.map((sample) => {
      return new Tone.Player(sample.url).toMaster();
		});

		this.setState({ audioNodes });
	}

	render() {
		return (
			<div>
				<Modal/>
				<NavBar />
				<main>
					<Sampler audioNodes={this.state.audioNodes} samples={this.props.currentSamples}/>

					<Sequencer
						audioNodes={this.state.audioNodes}
						samples={this.props.currentSamples} 
						theme={this.props.currentTheme}/>
				</main>
			</div>
    );
	}
}

export default App;


