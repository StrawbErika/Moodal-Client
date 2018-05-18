import React, { Component } from 'react';
import { Segment, Header } from 'semantic-ui-react';
import * as API from '../../api';
import Mail from './Mail';
import './Mailbox.css';

class Mailbox extends Component {
	state = { mails : [] }

	componentDidMount() {
		const creds = JSON.parse(localStorage.getItem('login'));
		
		API.getMail(creds.userId)
		.then(res => {
			this.setState({ mails : res.data.data })
		}).catch(error => {
			console.log(error)
		})
	}

	render() {
		const { mails } = this.state;
		return (
			<div className="mailbox-main">
				<br />
				<Header textAlign="center" content="Mailbox" as="h1" />
				<Segment.Group>
					{mails.map((mail, index) => (
						<Mail subject={mail.subject} key={index} status={mail.status} />
					))}
				</Segment.Group>
			</div>
		);
	}
}

export default Mailbox;
