import React from 'react';

// Components
import Loading from './Loading';

class Header extends React.Component {
	render() {
		// Props
		const { details, loading, logo, id } = this.props;

		return (
			<div className="flex-row">
				{ loading ? (
					null
				) : (
					<div id="header-wrapper"  className="flex-row">
						<div id="header" className="flex-row">
							<a href="#app">
								<img src={logo.source_url} alt="daKnight logo" id="dk-logo" />
							</a>
							<nav id="top-nav">
								<ul>
									{details.map((page) => (
										<a key={page.id} href={'#' + page.slug}>
											<li key={page.id}>{page.title.rendered}</li>
										</a>
									))}
								</ul>
							</nav>
						</div>
					</div>
					)}
			</div>
		);
	}
}

Header.propTypes = {
	details:  React.PropTypes.array.isRequired,
	loading:  React.PropTypes.bool.isRequired,
	logo:  React.PropTypes.object.isRequired,
};

export default Header;