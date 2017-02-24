// Libs
import React from 'react';
import { render } from 'react-dom';

// CSS
import "../styles/index.scss";

// Components
import Main from './components/Main';

// Redux & Router deps
// import { Router, Route, browserHistory } from 'react-router';
// import { BrowserRouter, Match, Miss } from 'react-router';

const Root = () => {
	return (
		<Main />
	);
};

render((
	<Root />
	), document.getElementById('app'));