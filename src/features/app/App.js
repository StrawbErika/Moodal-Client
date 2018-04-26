import React, { Component } from 'react';
import { BrowserRouter as Router } from 'react-router-dom';
import Navigation from '../navigation/Navigation';
import './App.css';

class App extends Component {
	render() {
		return (
			<div className="App">
				<Router>
					<Navigation />
				</Router>
			</div>
		);
	}
}

export default App;
