import React from 'react';

class ServiceFeatImage extends React.Component {
	render() {
		// Props
		const { activeItem, page } = this.props;
		const imageUrl = page.filter(page => page.id === activeItem)[0].featured_image_url;
		const divStyle = { backgroundImage: 'url(' + imageUrl + ')' };

		return (
			<div className="flex-row" id="service-feat-img-container">
				{ !page.filter(page => page.id === activeItem)[0].featured_image_url ? <div id="service-feat-img" className="flex-row" /> : <div id="service-feat-img" className="flex-row" style={divStyle}/> }
			</div>
		);
	}
}

ServiceFeatImage.propTypes = {
	activeItem: React.PropTypes.number.isRequired,
	page: React.PropTypes.array.isRequired,
};

export default ServiceFeatImage;