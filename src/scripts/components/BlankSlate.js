import React from 'react';

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
		);
	}
}

export default BlankSlate;