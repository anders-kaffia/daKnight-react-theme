import React from 'react';

// Components
import Loading from './Loading';

class Header extends React.Component {
	render() {

		// Props
		const details = this.props.details;
		const isLoading = this.props.loading;
		const logo = this.props.logo;

		return (
			<div >
				{ isLoading ? (
					<Loading />
				) : (
					<div id="header" className="flex-row">
						<img src={ logo.source_url } alt="daKnight logo" id="dk-logo" />
						<nav id="top-nav">
							<ul>
								{ details.map((page) => (
									<a key={ page.id } href={ '#' + page.slug }><li key={ page.id }>{ page.title.rendered }</li></a>
								))}
							</ul>
						</nav>
					</div>
				)}
			</div>
		)
	}
}

export default Header;