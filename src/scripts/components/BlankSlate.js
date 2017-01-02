import React from 'react';
import ReactCSSTransisionGroup from 'react-addons-css-transition-group';

class BlankSlate extends React.Component {

	render() {
		return (
			<section id="blank-slate" className="flex-row">
				<div id="blank-slate1"></div>
				<div id="blank-slate-inside-wrapper" className="flex-column">
					<div id="blank-slate2"></div>
					<div id="blank-slate3"></div>
				</div>
			</section>
		)
	}
}

export default BlankSlate;