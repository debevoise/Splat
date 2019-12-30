import React from 'react';
import logo from '../logo.svg';
import '../styles/App.css';

class App extends React.Component {
	constructor(props) {
		super(props);

		this.samples = new Array(8);
	}

	componentDidMount() {


	}

	createAudioElementsList() {
		const audioElements = this.props.theme.samples.map((sampleId, idx) => {
			const sample = this.props.samples[sampleId];
			return (
				<li key={idx} className="audio-elements-list">
					<h3>{sample.name}</h3>
					<audio
						id="sample1"
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

      </main>
    );
	}
}

export default App;


