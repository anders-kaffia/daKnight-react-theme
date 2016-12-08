import React from 'react';

// State should control what content is displayed.
// There need to be a state for content, and a state for Active/!Active

class Services extends React.Component {
	render() {
		const details = this.props.details;
		return (
			<div>
				<nav id="service-menu" className="flex-row">
					<ul>
						<li><img src={ details.acf.logos[0].logo_aktiv } alt=""/></li>
					</ul>
				</nav>
				<section dangerouslySetInnerHTML={ {__html: details.acf.tjanster[0].tjanst} } />
			</div>
		)
	}
}

export default Services;