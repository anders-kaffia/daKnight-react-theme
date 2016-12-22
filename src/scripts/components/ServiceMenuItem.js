import React from 'react';

// Components
import Loading from './Loading';

class ServiceMenuItem extends React.Component {
	render() {
		const { page, activeItem } = this.props;
		return (
			<li className={ activeItem === page.id ? 'flex-column active-item' : 'flex-column' } onClick={ this.props.setActive } >
				<img src={ activeItem === page.id ? (page.acf.logo_aktiv) : (page.acf.logo_passiv) } alt={ page.title.rendered } />
				<span>{ page.title.rendered }</span>
			</li>
		)
	}
}

export default ServiceMenuItem;