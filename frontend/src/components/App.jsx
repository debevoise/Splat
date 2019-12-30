import React from 'react';
import logo from '../logo.svg';
import '../styles/App.css';

class App extends React.Component {
	constructor(props) {
		super(props);

		this.samples = [];
	}


	render() {
		return (
			<main>

				<audio 
					id='sample1'
				>
					Your browser does not support audio playback
				</audio>
			</main>
		)
	}
}

export default App;


//  <div className="App">
//       <header className="App-header">
//         <img src={logo} className="App-logo" alt="logo" />
//         <p>
//           Edit <code>src/App.js</code> and save to reload.
//         </p>
//         <a
//           className="App-link"
//           href="https://reactjs.org"
//           target="_blank"
//           rel="noopener noreferrer"
//         >
//           Learn React
//         </a>
//       </header>
//     </div>