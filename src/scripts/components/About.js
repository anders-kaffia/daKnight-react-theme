// Libs
import React from 'react';

// Components
import Loading from './Loading';

class About extends React.Component {

	render() {
		// Props
		const { details, loading } = this.props.details;

		return (
			<div className="flex-column">
				{ loading ? (
					<Loading />
				) : (
					<div id={ details.slug } >
						<section id="about-1" className="flex-column">
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