import React from 'react';

// Components
import Header from './Header';
import ContactForm from './ContactForm';

// Other
import map from '../helpers/map';

class Contact extends React.Component {

	componentDidMount() {
		!this.props.loading ? map.init() : null;
	}

	render() {
		// Props
		const { details, loading, showForm, toggleForm, width, height } = this.props;

		return (
			<div id="contact-container" >
				{loading ? (
					null
				) : (
						<div id={details.slug} className="flex-row">
							<section id="contact-text" className="flex-row">
								<div>
									<div dangerouslySetInnerHTML={{ __html: details.content.rendered }} className="flex-column" />
									<button id="open-contact-form" onClick={toggleForm}>Boka möte här!</button>
								</div>
							</section>
							{showForm ? (
								<ContactForm form={details.acf.contact_form} showForm={showForm} toggleForm={toggleForm} />
							) : (
									null
								)}
							<div id="map-container">
								<div id="map" />
							</div>
						</div>
					)}
			</div>
		);
	}
}

Contact.propTypes = {
	details: React.PropTypes.object.isRequired,
	loading: React.PropTypes.bool.isRequired,
	showForm: React.PropTypes.bool.isRequired,
	toggleForm: React.PropTypes.func.isRequired,
	width: React.PropTypes.number.isRequired,
	height: React.PropTypes.number.isRequired
};

export default Contact;