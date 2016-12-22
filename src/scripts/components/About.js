// Libs
import React from 'react';

// Components
import Loading from './Loading';

class About extends React.Component {

	render() {
		// Props
		const details = this.props.details;
		const isLoading = this.props.loading;

		// "Blank slate"
		const blankSlate = 
				<section id="blank-slate" className="flex-row">
					<div id="blank-slate1"></div>
					<div id="blank-slate-inside-wrapper" className="flex-column">
						<div id="blank-slate2"></div>
						<div id="blank-slate3"></div>
					</div>
				</section>;

		return (
			<div className="flex-column">
				{ blankSlate }
				{ isLoading ? (
					<Loading />
				) : (
					<div id={ '#' + details.slug } >
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