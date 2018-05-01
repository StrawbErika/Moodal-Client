import React, { Component } from 'react';
import { Switch, Route } from 'react-router-dom';
import Classroom from '../classroom/Classroom';
import Dashboard from '../dashboard/Dashboard';

class Routes extends Component {
	render() {
		return (
			<main>
				<Switch>
					<Route exact path="/" component={Dashboard} />
					<Route path="/classroom" component={Classroom} />
				</Switch>
			</main>
		);
	}
}

export default Routes;
