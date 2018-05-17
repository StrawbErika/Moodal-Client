import React, { Component } from 'react';
import { Segment, Header } from 'semantic-ui-react';
import Mail from './Mail';
import './Mailbox.css';

class Mailbox extends Component {
	state = { mails : [] }

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
