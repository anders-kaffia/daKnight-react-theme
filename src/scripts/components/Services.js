import React from 'react';

class Services extends React.Component {
	render() {
		const details = this.props.details;
		return (
			<div>
				<div id="service-menu" className="flex-row">
					<img src={ details.acf.logos[0].logo_aktiv } alt=""/>
				</div>
				<section dangerouslySetInnerHTML={ {__html: details.acf.tjanster[0].tjanst} } />
			</div>
		)
	}
}

export default Services;