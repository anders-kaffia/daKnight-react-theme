import React from 'react';

// Components
import ServiceMenuItem from './ServiceMenuItem';
import ServiceFeatImage from './ServiceFeatImage';
import ServiceText from './ServiceText';

// Others
import jqueryScripts from '../helpers/jqueryScripts';
import scripts from '../helpers/scripts';

class Services extends React.Component {
	constructor(props) {
		super(props);

		this.eventListeners.bind(this);
	};

	componentDidMount() {
		jqueryScripts.smoothScroll();
		scripts.handleIosFlexBug();
		this.eventListeners();
	}

	/**
	 * @desc Gathers main eventlisterers.
	 */
	eventListeners() {
		window.addEventListener('scroll', scripts.handleHeaderPosition);
		jqueryScripts.handleArrowKeyScroll();
	}

	render() {
		// Props
		const { childPages, loading, page, activeItem, setActive, burgerMenu, burgerMenuActive, width } = this.props;

		return (
			<div id="service-section-container">
				{loading ? (
					null
				) : (
						<div id={page.slug} className="flex-column">
							<div id="service-burger-container">
								<div className={burgerMenuActive ? "hamburger-menu hamburger-menu-active" : "hamburger-menu"} onClick={burgerMenu}>
									<div className={burgerMenuActive ? "bar animate" : "bar"}></div>
								</div>
							</div>
							<nav id="service-menu" className={burgerMenuActive ? "flex-row service-menu-open" : "flex-row"}>
								<ul id="service-menu-ul" className="flex-row">
									{childPages.map((page) => (
										<ServiceMenuItem
											key={page.id}
											index={page.id}
											page={page}
											activeItem={activeItem}
											setActive={setActive.bind(null, page.id)}
											burgerMenu={burgerMenu}
											burgerMenuActive={burgerMenuActive}
											width={width}
											/>
									))}
								</ul>
							</nav>
							<div className="services-content flex-row">
								<ServiceFeatImage page={childPages} activeItem={activeItem} />
								<ServiceText page={childPages} activeItem={activeItem} />
							</div>
						</div>
					)}
			</div>
		);
	}
}

Services.propTypes = {
	childPages: React.PropTypes.array.isRequired,
	loading: React.PropTypes.bool.isRequired,
	page: React.PropTypes.object.isRequired,
	activeItem: React.PropTypes.number.isRequired,
	setActive: React.PropTypes.func.isRequired,
	burgerMenu: React.PropTypes.func.isRequired,
	burgerMenuActive: React.PropTypes.bool.isRequired,
	width: React.PropTypes.number.isRequired,
};

export default Services;