import React from 'react';
import Map from 'pigeon-maps';
import Media from 'react-media';

class LocationMap extends React.Component {
	render() {

		const MAPBOX_ACCESS_TOKEN = 'pk.eyJ1IjoiZGFrbmlnaHQiLCJhIjoiazkwSjJqSSJ9.ght0Fub2UHczFlkQ0eHzZA';

		const mapbox = (mapboxId, accessToken) => (x, y, z) => {
			const retina = typeof window !== 'undefined' && window.devicePixelRatio >= 2 ? '@2x' : ''
			return `https://api.mapbox.com/styles/v1/daknight/${mapboxId}/tiles/256/${z}/${x}/${y}${retina}?access_token=${accessToken}`
		};

		const mapboxProvider = mapbox('citmr9xdx004h2hp2svgnxq30', MAPBOX_ACCESS_TOKEN);

		const { width, height } = this.props;

		return (
			<div id="map-container" >
				<div id="map" className="flex-row">
					<div className="disableScroll" />
						<Map
							center={[59.335561, 18.049955]}
							width={width}
							height={ width < 768 ? height * .3 : height * .8 }
							zoom={14}
							provider={mapboxProvider}
							/>
				</div>
			</div>
		)
	}
}

LocationMap.propTypes = {
	width: React.PropTypes.number.isRequired,
	height: React.PropTypes.number.isRequired
}

export default LocationMap;