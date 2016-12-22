import React from 'react';

class ContactForm extends React.Component {
	render() {
		// Props
		const { toggleForm } = this.props;

		return (
			<div id="contact-form-container" className="flex-row">
				<div id="contact-form" className="flex-column">
					<button className="button-close" onClick={ toggleForm } >&times;</button>
					<h2>Kontakta oss!</h2>
					<input type="text" name="" id="" placeholder="Namn"/>
					<input type="email" name="" id="" placeholder="E-post"/>
					<input type="text" name="" id="" placeholder="Ämne"/>
					<textarea name="" id="" cols="30" rows="10" placeholder="Fråga"></textarea>
					<button type="submit" className="button">Skicka</button>
				</div>
			</div>
		)
	}
}

export default ContactForm;