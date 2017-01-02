import React from 'react';

// Components
import Loading from './Loading';

class ServiceMenuItem extends React.Component {
	constructor() {
		super();
		this.click = this.click.bind(this);
	}

	click() {
		const { setActive, burgerMenu, width, height } = this.props;
		setActive();
		width < 768 ? burgerMenu() : null;
	}

	render() {
		const { page, activeItem, setActive, burgerMenu, burgerMenuActive } = this.props;
		return (
			<li className={ activeItem === page.id ? 'flex-column active-item service-span' : 'flex-column service-span' } onClick={ this.click } >
				<img src={ activeItem === page.id ? (page.acf.logo_aktiv) : (page.acf.logo_passiv) } alt={ page.title.rendered } />
				<span>{ page.title.rendered }</span>
			</li>
		)
	}
}

export default ServiceMenuItem;