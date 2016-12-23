import React from 'react';

// Components
import Loading from './Loading';
import ServiceMenuItem from './ServiceMenuItem';
import ServiceFeatImage from './ServiceFeatImage';
import ServiceText from './ServiceText';

class Services extends React.Component {
	constructor(props) {
		super(props);
		this.handleClick = this.handleClick.bind(this);

	}
	handleClick(itemId) {
		
		console.log(itemId);
	}

	render() {
		// Props
		const { childPages, loading, page } = this.props;

		return (
			<div>
				{ loading ? (
					<Loading />
				) : (
					<div id={ page.slug } >
						<nav id="service-menu" className="flex-row">
							<ul className="flex-row">
								{ childPages.map((page) => (
									<ServiceMenuItem key={ page.id } index={ page.id } page={ page } activeItem={ this.props.activeItem } setActive={ this.props.setActive.bind(null, page.id) } />
								))}
							</ul>
						</nav>
						<div className="services-content flex-row">
							<ServiceFeatImage page={ childPages } activeItem={ this.props.activeItem } />
							<ServiceText page={ childPages } activeItem={ this.props.activeItem } />
						</div>
					</div>
				)}
			</div>
		)
	}
}

export default Services;