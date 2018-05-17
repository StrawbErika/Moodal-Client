import React, { Component } from 'react';
import { Form, Button, Divider } from 'semantic-ui-react';
import * as API from '../../api';

const options = [
	{
		key : 1,
		value : 'teacher',
		text : 'Teacher'
	},
	{
		key : 2,
		value : 'student',
		text : 'Student'
	}
]

class Signup extends Component {
	constructor() {
		super();
		this.state = {
			name : '',
			email : '',
			password : '',
			userType : '',
			confirmPassword : ''
		}
	}

	handleChange = (e, data) => {
		const state = this.state;
		state[data.name] = data.value;
		this.setState(state);
	}

	handleSubmit = e => {
		e.preventDefault();
		console.log(this.state);

		const { name, email, password, userType } = this.state;
		API.addUser({ name, email, password, userType, classes : [] })
			.then(result => {
				console.log(result.data.message)
			}).catch(error => {
				console.log(error)
			});
	} 

	render() {
		return (
			<div>
				<Form className="homepage-form">
					<Form.Input 
						label="Name" 
						name='name'  
						onChange={this.handleChange} 
						placeholder="First Name" />
					<Form.Input 
						label="E-mail Address" 
						name='email'  
						onChange={this.handleChange} 
						placeholder="email@email.com" />
					<Form.Input 
						type="password" 
						label="Password" 
						name='password'  
						onChange={this.handleChange} 
						placeholder="Password" />
					<Form.Input
						type="password"
						label="Confirm Password"
						placeholder="Confirm Password"
						name='confirmPassword' 
						onChange={this.handleChange}
					/>
					<Form.Select 
						label='User Types' 
						placeholder='Select user type' 
						options={options} 
						onChange={this.handleChange} 
						name='userType' 
						fluid
					/>
					<Divider />
					<Button color="green" basic fluid content="Sign up" onClick={this.handleSubmit} />
				</Form>
			</div>
		);
	}
}

export default Signup;
