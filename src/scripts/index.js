// Libs
import React from 'react';
import { render } from 'react-dom';

// CSS
import "../styles/index.scss";

// jQuery
import $ from "jquery";

// Components
import App from './components/App';

class Root extends React.Component {
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