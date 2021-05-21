import axios from 'axios';
import React, { useState } from 'react';

const initialCredentials = {
	username: 'Lambda School',
	password: 'i<3Lambd4'
};

const Login = props => {
	const [credentials, setCredentials] = useState(initialCredentials);
	const [error, setError] = useState('');

	const handleLoginUpdate = e => {
		setCredentials({
			...credentials,
			[e.target.name]: e.target.value
		});
	};

	// make a post request to retrieve a token from the api
	// when you have handled the token, navigate to the BubblePage route
	const handleSubmit = e => {
		e.preventDefault();
		axios
			.post('http://localhost:5000/api/login', credentials)
			.then(res => {
				setCredentials(initialCredentials);
				setError('');
				window.localStorage.setItem('token', res.data.payload);
				props.history.push('/bubble-page');
			})
			.catch(err => {
				console.log(err);
				setError('Username or Password is incorrect');
			});
	};

	return (
		<div>
			<h1>Welcome to the Bubble App!</h1>
			<div data-testid="loginForm" className="login-form">
				<h2>Build login form here</h2>
				<form onClick={handleSubmit}>
					<label>
						<input
							type="text"
							name="username"
							data-testid="username"
							onChange={handleLoginUpdate}
							value={credentials.username}
							placeholder="Username"
						/>
					</label>
					<label>
						<input
							type="password"
							name="password"
							data-testid="password"
							onChange={handleLoginUpdate}
							value={credentials.password}
							placeholder="Password"
						/>
					</label>
					<button data-testid="loginBtn">Login</button>
				</form>
			</div>

			<p data-testid="errorMessage" className="error">
				{error}
			</p>
		</div>
	);
};

export default Login;

//Task List:
//1. Build a form containing a username and password field.
//2. Add whatever state nessiary for form functioning.
//3. MAKE SURE YOUR USERNAME AND PASSWORD INPUTS INCLUDE data-testid="username" and data-testid="password"
//4. If either the username or password is not entered, display the following words with the p tag provided: Username or Password not valid.
//5. If the username / password is equal to Lambda School / i<3Lambd4, save that token to localStorage.
