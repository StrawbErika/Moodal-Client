import React, { Component } from 'react';
import { Segment, Header } from 'semantic-ui-react';
import Mail from './Mail';
import './Mailbox.css';

const mails = [
	{ key: 1, subject: 'Ang pogi ni Cedric', status: true },
	{ key: 2, subject: 'Ang pogi ni Cedric', status: true },
	{ key: 3, subject: 'Ang pogi ni Cedric', status: true },
	{ key: 4, subject: 'Ang pogi ni Cedric', status: false },
	{ key: 5, subject: 'Ang pogi ni Cedric', status: true },
	{ key: 6, subject: 'Ang pogi ni Cedric', status: true },
	{ key: 7, subject: 'Ang pogi ni Cedric', status: false },
	{ key: 8, subject: 'Ang pogi ni Cedric', status: true }
];

class Mailbox extends Component {
	render() {
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
