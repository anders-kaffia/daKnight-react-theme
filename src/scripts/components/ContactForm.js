import React from 'react';

class ContactForm extends React.Component {
	render() {
		// Props
		const { form, toggleForm } = this.props;

		return (
			<div id="contact-form-container" className="flex-row pigeon-drag-block pigeon-click-block">
				<div id="contact-form" className="flex-column pigeon-drag-block pigeon-click-block">
					<button className="button-close" onClick={ toggleForm } >&times;</button>
					<h2>Kontakta oss!</h2>
					<div dangerouslySetInnerHTML={ {__html: form} } />
				</div>
			</div>
		)
	}
}

export default ContactForm;