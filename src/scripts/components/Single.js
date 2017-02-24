import React from 'react';
import Header from './Header';
import Footer from './Footer';

class Single extends React.Component {

	constructor() {
		super();

		this.state = {
			pages: {},
			mainPageTitles: {},
			posts: {},
			logo: null,
			headerIsLoading: true,
			footerIsLoading: true,
			width: window.innerWidth,
		};
	}

	componentDidMount() {
		model.apiCall.getHeaderContent('pages', 47, 'media', 'DKN_Logotyp')
			.then(data => {
				this.setState({
					mainPageTitles: data.mainPageTitles,
					logo: data.logo,
					headerIsLoading: false
				});
			})
			.then(() => {
				model.apiCall.getFooterContent('pages', 'footer')
					.then(data => {
						this.setState({
							footer: data.footer,
							footerIsLoading: false
						});
					});
			})
			.then(() => {
				model.apiCall.getAllPosts('posts', 100)
					.then(data => {
						this.setState({
							posts: data.posts
						});
					});
			})
			.then(() => {
				model.apiCall.getAllPages('pages', 100)
					.then(data => {
						this.setState({
							pages: data.pages
						});
					});
			});
	}

	render() {
		return (
			<div>
				{this.state.headerIsLoading ? (
					<Loading />
				) : (
						<div id="main-wrapper" className="flex-column">
							<Header
								loading={this.state.headerIsLoading}
								details={this.state.mainPageTitles}
								logo={this.state.logo}
								id="header-wrapper"
							/>
							<div className="single">
								<h1>SINGLE</h1>
							</div>
							<Footer
								loading={this.state.footerIsLoading}
								details={this.state.footer}
								menu={this.state.mainPageTitles}
							/>
							)}
						</div>
					)}
			</div>
		);
	}
}

export default Single;