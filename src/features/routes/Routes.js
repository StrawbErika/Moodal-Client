import React, { Component } from 'react';
import { Switch, Route } from 'react-router-dom';
import Classroom from '../classroom/Classroom';
import Dashboard from '../dashboard/Dashboard';
import Students from '../students/Students';

class Routes extends Component {
	render() {
		return (
			<main>
				<Switch>
					<Route exact path="/" component={Dashboard} />
					<Route exact path="/classroom" component={Classroom} />
					<Route exact path="/students" component={Students} />
				</Switch>
			</main>
		);
	}
}

export default Routes;
