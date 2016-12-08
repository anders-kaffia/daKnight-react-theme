import React from 'react';

class About extends React.Component {

	render() {
		const details = this.props.details;
		return (
			<div className="flex-column">
				<section id="blank-slate" className="flex-row">
					<div id="blank-slate1"></div>
					<div id="blank-slate-inside-wrapper" className="flex-column">
						<div id="blank-slate2"></div>
						<div id="blank-slate3"></div>
					</div>
				</section>
				<section id="about-1" className="flex-column" dangerouslySetInnerHTML={ {__html: details.acf.om_oss} } />
				<section id="about-2" className="flex-column" dangerouslySetInnerHTML={ {__html: details.acf.bakgrund} } />
				<section id="about-3" className="flex-column" dangerouslySetInnerHTML={ {__html: details.acf.arbetssatt} } />
			</div>
		)
	}
}

export default About;