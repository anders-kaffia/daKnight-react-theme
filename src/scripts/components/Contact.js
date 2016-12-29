import React from 'react';

// Components
import Loading from './Loading';
import Header from './Header';
import LocationMap from './LocationMap';
import ContactForm from './ContactForm';

class Contact extends React.Component {
	render() {
		// Props
		const { details, loading, showForm, toggleForm, width, height } = this.props;

		return (
			<div className="pigeon-drag-block pigeon-click-block">
				{ loading ? (
					<Loading />
				) : (
					<div id={ details.slug } className="flex-row pigeon-drag-block pigeon-click-block">
						<section id="contact-text">
							<div className="pigeon-drag-block pigeon-click-block">
								<div dangerouslySetInnerHTML={ {__html: details.content.rendered} } className="pigeon-drag-block pigeon-click-block" />
								<button id="open-contact-form" onClick={ toggleForm } className="pigeon-drag-block pigeon-click-block">Kontakta oss!</button>
							</div>
						</section>
						{ showForm ? (
							<ContactForm form={ details.acf.contact_form } showForm={ showForm } toggleForm={ toggleForm } />
						) : (
							null
						)}
						<LocationMap width={ width } height={ height } />
					</div>
				)}
			</div>
		)
	}
}

export default Contact;