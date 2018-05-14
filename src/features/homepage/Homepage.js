import React, { Component } from 'react';
import { Grid, Segment } from 'semantic-ui-react';
import { Switch, Route } from 'react-router-dom';
import Login from '../login/Login';
import Signup from '../login/Signup';
import './Homepage.css';

class Homepage extends Component {
	render() {
		return (
			<div className="homepage">
				<Grid className="remove-padding">
					<Grid.Row className="remove-padding">
						<Grid.Column width={10}>yo</Grid.Column>
						<Grid.Column width={6} className="homepage remove-padding">
							<Segment className="homepage-side">
								<h1 id="header-text"> moodal </h1>
								<Switch>
									<Route exact path="/" component={Login} />
									<Route exact path="/signup" component={Signup} />
								</Switch>
							</Segment>
						</Grid.Column>
					</Grid.Row>
				</Grid>
			</div>
		);
	}
}

export default Homepage;
