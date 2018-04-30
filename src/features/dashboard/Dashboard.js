import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import { Card, Button, Image } from 'semantic-ui-react';
import './Dashboard.css';
import image from './header.jpg';

const classes = [
	{ key: 1, course: 'CMSC 100', section: 'UV-1L', teacher: 'Monina Carandang', route:'/classroom/classroomFeed' },
	{ key: 2, course: 'CMSC 100', section: 'UV-2L', teacher: 'Monina Carandang', route:'/classroom/classroomFeed' },
	{ key: 3, course: 'CMSC 100', section: 'UV-3L', teacher: 'Monina Carandang', route:'/classroom/classroomFeed' },
	{ key: 4, course: 'CMSC 100', section: 'UV-4L', teacher: 'Monina Carandang', route:'/classroom/classroomFeed' }
];

class Dashboard extends Component {
	render() {
		return (
			<div className="dashboard">
				<Card.Group>
					{classes.map((name, index) => (
						<Card className="dashboard-card" key={index} as={Link} to={name.route}>
							<Image src={image} />
							<Card.Content>
								<Card.Header>{name.course}</Card.Header>
								<Card.Meta>{name.section}</Card.Meta>
							</Card.Content>
							<Card.Content extra>
								<Button icon="delete" floated="left" basic circular />
								<Button icon="chevron right" floated="right" basic circular />
							</Card.Content>
						</Card>
					))}
				</Card.Group>
			</div>
		);
	}
}

export default Dashboard;
