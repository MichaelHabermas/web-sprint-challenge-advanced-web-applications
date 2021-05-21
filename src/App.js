import React from 'react';
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';

import Login from './components/Login';
import BubblePage from './components/BubblePage';
import PrivateRoute from './components/PrivateRoute';
import './styles.scss';

// import { axiosWithAuth } from './helpers/axiosWithAuth.js';

function App(props) {
	const handleLogout = () => {
		window.localStorage.removeItem('token');
		props.history.push('/');
	};

	return (
		<Router>
			<div className="App">
				<header>
					Color Picker Sprint Challenge
					<a data-testid="logoutButton" href="/" onClick={handleLogout}>
						Logout
					</a>
				</header>

				<Switch>
					<Route exact path="/" component={Login} />
					<PrivateRoute exact path="/bubble-page" component={BubblePage} />
				</Switch>
			</div>
		</Router>
	);
}

export default App;

//Task List:
//1. Render BubblePage as a PrivateRoute
//2. Build the logout button to remove the localStorage Item.
