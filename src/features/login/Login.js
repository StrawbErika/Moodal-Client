import React, { Component } from 'react';
import { Divider, Button, Form } from 'semantic-ui-react';
import { Link } from 'react-router-dom';

class Login extends Component {
	render() {
		return (
			<div>
				<Form className="homepage-form">
					<Form.Input
						label="E-mail Address"
						placeholder="jdelacruz@gmail.com"
					/>
					<Form.Input label="Password" type="password" placeholder="Password" />
					<Button content="Log in" color="teal" basic fluid />
					<Divider horizontal>or</Divider>
					<Link to="/signup">
						<Button content="Sign up instead" color="green" basic fluid />
					</Link>
				</Form>
			</div>
		);
	}
}

export default Login;
