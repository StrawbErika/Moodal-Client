import React, { Component } from 'react';
import { Switch, Route } from 'react-router-dom';
import Classroom from '../classroom/Classroom';
import Dashboard from '../dashboard/Dashboard';
import Mailbox from '../mailbox/Mailbox';

class Routes extends Component {
	render() {
		return (
			<main>
				<Switch>
					<Route exact path="/" component={Dashboard} />
					<Route exact path="/classroom" component={Classroom} />
					<Route exact path="/mailbox" component={Mailbox} />
				</Switch>
			</main>
		);
	}
}

export default Routes;
