import React, { Component } from 'react';
import { Form, Button, Divider } from 'semantic-ui-react';

class Signup extends Component {
	render() {
		return (
			<div>
				<Form className="homepage-form">
					<Form.Input label="First Name" placeholder="First Name" />
					<Form.Input label="Last Name" placeholder="Last Name" />
					<Form.Input label="E-mail Address" placeholder="email@email.com" />
					<Form.Input type="password" label="Password" placeholder="Password" />
					<Form.Input
						type="password"
						label="Confirm Password"
						placeholder="Confirm Password"
					/>
					<Divider />
					<Button color="green" basic fluid content="Sign up" />
				</Form>
			</div>
		);
	}
}

export default Signup;
