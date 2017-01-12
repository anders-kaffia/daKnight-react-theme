import React from 'react';

// Components
import Loading from './Loading';

class Header extends React.Component {
	render() {
		// Props
		const { details, loading, logo, id } = this.props;

		return (
			<div>
				{ loading ? (
					null
				) : (
					<div id={ id }  className="flex-row">
						<div id="header" className="flex-row">
							<a href="#main-wrapper">
								<img src={logo.source_url} alt="daKnight logo" id="dk-logo" />
							</a>
							<nav id="top-nav">
								<ul>
									{details.map((page) => (
										<a key={page.id} href={'#' + page.slug}><li key={page.id}>{page.title.rendered}</li></a>
									))}
								</ul>
							</nav>
						</div>
					</div>
					)}
			</div>
		)
	}
}

Header.propTypes = {
	details:  React.PropTypes.array.isRequired,
	loading:  React.PropTypes.bool.isRequired,
	logo:  React.PropTypes.object.isRequired,
	id:  React.PropTypes.string.isRequired,
}

export default Header;