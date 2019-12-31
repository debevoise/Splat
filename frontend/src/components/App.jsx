import React from 'react';
import logo from '../logo.svg';
import '../styles/App.css';

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

	createAudioElementsList() {
		if (!this.props.theme || !this.props.samples) return null;

		const audioElements = this.props.theme.samples.map((sampleId, idx) => {
			const sample = this.props.samples[sampleId];
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

		return <ul className='samplesList'>{audioElements}</ul>
	}

	render() {
		return (
      <main>
				<p>hello world</p>
      </main>
    );
	}
}

export default App;


