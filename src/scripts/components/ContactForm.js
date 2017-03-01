import React from 'react';

class ContactForm extends React.Component {
	
	render() {
		// Props
		const { form, toggleForm } = this.props;


		return (
			<div id="contact-form-container" className="flex-row">
				<div id="contact-form" className="flex-column">
					<button className="button-close" onClick={toggleForm} >&times;</button>
					<h2>Kontakta oss!</h2>
					<div dangerouslySetInnerHTML={{ __html: form }} />
				</div>
			</div>
		);
	}
}

ContactForm.propTypes = {
	form: React.PropTypes.string.isRequired,
	toggleForm: React.PropTypes.func.isRequired
};

export default ContactForm;