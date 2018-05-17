import React, { Component } from 'react';
import { Link, Route } from 'react-router-dom';
import { Card, Button, Image } from 'semantic-ui-react';
import * as API from '../../api';
import './Dashboard.css';
import image from './header.jpg';
import DeleteClass from '../classroom/DeleteClass';
import Classroom from '../classroom/Classroom';

class Dashboard extends Component {
	constructor(props) {
		super(props);

		this.state = {
			classes: []
		};
	}

	componentDidMount() {
		API.viewClasses()
			.then(result => {
				console.log(result.data.data);
				this.setState({ classes: result.data.data });
			})
			.catch(error => {
				console.log(error);
			});
	}

	render() {
		const { classes } = this.state;

		return (
			<div className="dashboard">
				<Card.Group>
					{classes.map((name, index) => (
						<Card
							className="dashboard-card"
							key={index}
						>
							<Image src={image} />
							<Card.Content>
								<Card.Header>{name.title}</Card.Header>
								<Card.Meta>{name.section}</Card.Meta>
							</Card.Content>
							<Card.Content extra>
								<DeleteClass/>								
								{/* <Button icon="delete" floated="left" basic circular /> */}
								<Button 
									icon="chevron right" 
									floated="right" 
									basic circular 
									as={Link}
									to={`/classroom/${name._id}`}
								/>
							</Card.Content>
						</Card>
					))}
				</Card.Group>
			</div>
		);
	}
}

export default Dashboard;
