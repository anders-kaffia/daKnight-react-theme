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
		const { details, loading, showForm, toggleForm } = this.props;

		return (
			<div id="contact-container" >
				{ loading ? (
					null
				) : (
						<div id={details.slug} className="flex-column">
							<section id="contact-text" className="flex-row">
								<div id="contact-text-content">
									<div dangerouslySetInnerHTML={{ __html: details.content.rendered }} className="flex-column" />
									<button id="open-contact-form" onClick={toggleForm}>Boka ett möte med oss</button>
									{/* <div dangerouslySetInnerHTML={{ __html: details.acf.under_knappen }} className="flex-column" /> */}
								</div>
							</section>
							{showForm ? (
								<ContactForm loading={loading} form={details.acf.contact_form} showForm={showForm} toggleForm={toggleForm} />
							) : (
									null
								)}
							<div id="map-container">
								<div className="disable-scroll"></div>
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
};

export default Contact;