// Libs
import React from 'react';
import { render } from 'react-dom';

// CSS
import "../styles/index.scss";

// jQuery
import $ from "jquery";

// Data from REST API
import getData from './data';

// Components
import App from './components/App';

class Root extends React.Component {
	componentWillMount() {

	}
	render() {
		return (
			<App/>
		)
	}
}

// const Root = () => {
// 	return (
// 		<App />
// 	)
// }

render(<Root/>, document.getElementById('app'));