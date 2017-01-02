import React from 'react';

// Components
import ServiceMenuItem from './ServiceMenuItem';
import ServiceFeatImage from './ServiceFeatImage';
import ServiceText from './ServiceText';

class Services extends React.Component {
	constructor(props) {
		super(props);
	}

	render() {
		// Props
		const { childPages, loading, page, activeItem, setActive, burgerMenu, burgerMenuActive, width } = this.props;

		return (
			<div>
				{ loading ? (
					null
				) : (
					<div id={ page.slug } className="flex-column">
						<div id="service-burger-container">
							<div className="hamburger-menu" onClick={ burgerMenu }>
								<div className={ burgerMenuActive ? "bar animate" : "bar" }></div>
							</div>
						</div>
						<nav id="service-menu" className={ burgerMenuActive ? "flex-row service-menu-open" : "flex-row" }>
							<ul className="flex-row">
								{ childPages.map((page) => (
									<ServiceMenuItem 
										key={ page.id } 
										index={ page.id } 
										page={ page } 
										activeItem={ activeItem } 
										setActive={ setActive.bind(null, page.id) } 
										burgerMenu={ burgerMenu }
										burgerMenuActive={ burgerMenuActive }
										width={ width }
									/>
								))}
							</ul>
						</nav>
						<div className="services-content flex-row">
							<ServiceFeatImage page={ childPages } activeItem={ activeItem } />
							<ServiceText page={ childPages } activeItem={ activeItem } />
						</div>
					</div>
				)}
			</div>
		)
	}
}

export default Services;