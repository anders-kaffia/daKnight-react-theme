import React from 'react';

class ServiceMenuItem extends React.Component {
	constructor() {
		super();
		this.click = this.click.bind(this);
	};

	/**
	 * @desc Toggle active page. Also toggles the burger menu if window size < 768px
	 */
	click() {
		const { setActive, burgerMenu, width } = this.props;
		setActive();
		width < 768 ? burgerMenu() : null;
	};

	render() {
		const { page, activeItem, setActive, burgerMenu, burgerMenuActive } = this.props;
		return (
			<li className={ activeItem === page.id ? 'flex-column active-item service-span' : 'flex-column service-span' } onClick={ this.click } >
				<img src={ activeItem === page.id ? (page.acf.logo_aktiv) : (page.acf.logo_passiv) } alt={ page.title.rendered } />
				<span>{ page.title.rendered }</span>
			</li>
		);
	}
}

ServiceMenuItem.propTypes = {
	setActive: React.PropTypes.func.isRequired,
	burgerMenu: React.PropTypes.func.isRequired,
	width: React.PropTypes.number.isRequired,
	page: React.PropTypes.object.isRequired,
	activeItem: React.PropTypes.number.isRequired,
	burgerMenuActive: React.PropTypes.bool.isRequired,
};

export default ServiceMenuItem;