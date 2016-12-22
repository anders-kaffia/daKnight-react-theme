import React from 'react';

// Components
import Loading from './Loading';

class ServiceText extends React.Component {
	render() {
		// Props
		const { activeItem, page } = this.props;

		return (
			<div id="service-text" className="flex-row">
				<div dangerouslySetInnerHTML={ {__html: page.filter(page => page.id === activeItem)[0].content.rendered } } />
			</div>
		)
	}
}

export default ServiceText;