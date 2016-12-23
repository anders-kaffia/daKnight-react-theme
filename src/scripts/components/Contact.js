import React from 'react';

// Components
import Loading from './Loading';
import LocationMap from './LocationMap';
import ContactForm from './ContactForm';

class Contact extends React.Component {
	render() {
		// Props
		const { details, loading, showForm, toggleForm } = this.props;

		return (
			<div>
				{ loading ? (
					<Loading />
				) : (
					<div id={ details.slug } className="flex-row">
						<LocationMap />
						<section id="contact-text">
							<div dangerouslySetInnerHTML={ {__html: details.content.rendered} } />
							<button id="open-contact-form" onClick={ toggleForm }>Kontakta oss!</button>
						</section>
						{ showForm ? (
							<ContactForm showForm={ showForm } toggleForm={ toggleForm } />
						) : (
							null
						)}
					</div>
				)}
			</div>
		)
	}
}

export default Contact;