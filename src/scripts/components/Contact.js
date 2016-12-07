import React from 'react';

class Contact extends React.Component {
	render() {
		const details = this.props.details;
		return (
			<div className="flex-row">
				<section dangerouslySetInnerHTML={ {__html: details.content.rendered} } />
			</div>
		)
	}
}

export default Contact;