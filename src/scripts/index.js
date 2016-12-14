// Libs
import React from 'react';
import { render } from 'react-dom';

// CSS
import "../styles/index.scss";

// Components
import App from './components/App';

// Redux & Router deps
import { Router, Route, browserHistory } from 'react-router';
import { Provider } from 'react-redux';
import store, { history } from './store';

render((
	<Provider store={store}>
		<Router history={ history }>
			<Route path="/" component={App} />
		</Router>
	</Provider>
	), document.getElementById('app'));