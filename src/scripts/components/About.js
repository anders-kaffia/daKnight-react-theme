// Libs
import React from 'react';
import scripts from '../helpers/scripts';

class About extends React.Component {
	constructor() {
		super();
		this.handleContentLoaded = this.handleContentLoaded.bind(this);
		this.interval = null;
		this.state = {
			contentLoaded: false
		};
	}

	handleContentLoaded() {
		this.setState({
			contentLoaded: true
		});
		this.state.contentLoaded === true ?
			(
				scripts.slideSwitcher()
			) : (
				null
			);

	}

	componentDidMount() {
		this.interval = setTimeout(this.handleContentLoaded, 500);
	}

	render() {
		// Props
		const { details, loading, arrow, blankSlate } = this.props;

		return (
			<div className="flex-column" id="about-section-container">
				{loading ? (
					null
				) : (
						<div id="about" className="flex-row">
							<section id="about-1" className="flex-column about-slide">
								<div dangerouslySetInnerHTML={{ __html: details.acf.om_oss }} />
							</section>
							<section id="about-3" className="flex-column about-slide">
								<div dangerouslySetInnerHTML={{ __html: details.acf.arbetssatt }} />
							</section>
							<section id="about-2" className="flex-column about-slide">
								<div dangerouslySetInnerHTML={{ __html: details.acf.bakgrund }} />
							</section>
						</div>
					)}
				<div className="bubbles flex-row"></div>
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