// Libs
import React from 'react';

class About extends React.Component {

	render() {
		// Props
		const { details, loading, arrow } = this.props;

		return (
			<div className="flex-column">
				{ loading ? (
					null
				) : (
					<div id={ details.slug } >
						<section id="about-1" className="flex-column">
							<div id="arrow">
								<img src={ arrow.source_url } alt="Down pointing arrow"/>
							</div>
							<div dangerouslySetInnerHTML={ {__html: details.acf.om_oss } } />
						</section>
						<section id="about-2" className="flex-column">
							<div dangerouslySetInnerHTML={ {__html: details.acf.bakgrund} } />
						</section>
						<section id="about-3" className="flex-column">
							<div dangerouslySetInnerHTML={ {__html: details.acf.arbetssatt} } />
						</section>
					</div>
				)}
			</div>
		)
	}
}


export default About;