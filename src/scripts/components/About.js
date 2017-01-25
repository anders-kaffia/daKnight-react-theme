// Libs
import React from 'react';

class About extends React.Component {

	render() {
		// Props
		const { details, loading, arrow } = this.props;

		return (
			<div className="flex-column" id="about-section-container">
				{ loading ? (
					null
				) : (
					<div id={ details.slug }>
						<section id="about-1" className="flex-column">
							<div className="arrow">
								<a href="#about-2"><img src={ arrow.source_url } alt="Down pointing arrow"/></a>
							</div>
							<div dangerouslySetInnerHTML={ {__html: details.acf.om_oss } } />
						</section>
						<section id="about-2" className="flex-column">
							<div className="arrow">
								<a href="#about-3"><img src={ arrow.source_url } alt="Down pointing arrow"/></a>
							</div>
							<div dangerouslySetInnerHTML={ {__html: details.acf.bakgrund} } />
						</section>
						<section id="about-3" className="flex-column">
							<div className="arrow">
								<a href="#tjanster"><img src={ arrow.source_url } alt="Down pointing arrow"/></a>
							</div>
							<div dangerouslySetInnerHTML={ {__html: details.acf.arbetssatt} } />
						</section>
					</div>
				)}
			</div>
		);
	}
}

About.protoTypes = {
	details: React.PropTypes.object.isRequired,
	loading: React.PropTypes.bool.isRequired,
	arrow: React.PropTypes.string.isRequired
};

export default About;