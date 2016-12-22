import React from 'react';

// Components
import Loading from './Loading';

class ServiceFeatImage extends React.Component {
	render() {
		// Props
		const { activeItem, page } = this.props;

		return (
			<div className="flex-row" id="service-feat-img-container">
				<div id="service-feat-img">
					<img src={ page.filter(page => page.id === activeItem)[0].featured_image_url } alt=""/>
				</div>
			</div>
		)
	}
}

export default ServiceFeatImage;