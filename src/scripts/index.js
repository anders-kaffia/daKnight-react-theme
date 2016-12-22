// Libs
import React from 'react';
import { render } from 'react-dom';

// CSS
import "../styles/index.scss";

// Components
import Main from './components/Main';

// Redux & Router deps
import { Router, Route, browserHistory } from 'react-router';


render((
	<Router history={ browserHistory }>
		<Route path="/" component={Main} />
	</Router>
	), document.getElementById('app'));