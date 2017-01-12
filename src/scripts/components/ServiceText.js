import React from 'react';

class ServiceText extends React.Component {
	render() {
		// Props
		const { activeItem, page } = this.props;

		return (
			<div id="service-text" className="flex-row">
				<div dangerouslySetInnerHTML={ {__html: page.filter(page => page.id === activeItem)[0].content.rendered } } />
			</div>
		);
	}
}

ServiceText.propTypes = {
	activeItem: React.PropTypes.number.isRequired,
	page: React.PropTypes.array.isRequired
};

export default ServiceText;