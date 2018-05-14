import React, { Component } from 'react';
import { Segment, Button } from 'semantic-ui-react';

class Mail extends Component {
	state = {
		hover: false
	};

	handleHover = () => this.setState({ hover: true });

	render() {
		const { hover } = this.state;
		return (
			<Segment
				secondary={!this.props.status}
				clearing
				size={'mini'}
				color={hover ? 'blue' : null}
				onClick={() => console.log('hello')}
				onHover={this.handleHover}
			>
				{this.props.subject}
				<Button floated="right" circular icon="delete" size="mini" />
			</Segment>
		);
	}
}

export default Mail;
