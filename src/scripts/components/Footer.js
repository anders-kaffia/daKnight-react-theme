// Libs
import React from 'react';

// Components
import Loading from './Loading';

class Footer extends React.Component {
	render() {
		// Props
		const { details, loading, menu } = this.props;

		return (
			<div  id="footer">
			{ loading ? (
				<Loading />
			) : (
				<div>
					<nav id="footer-nav">
						<ul>
							{menu.map((page) => (
								<a key={page.id} href={'#' + page.slug}><li key={page.id}>{page.title.rendered}</li></a>
							))}
						</ul>
					</nav>
					<div dangerouslySetInnerHTML={ {__html: details.content.rendered} } />
				</div>
				)}
			</div>
		)

	}
}

export default Footer;