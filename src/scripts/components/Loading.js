// Libs
import React from 'react';

const Loading = function() {
	return <div className="loading flex-row">
			<h2>Brb, laddar..</h2>
			<div className="loading-span-container flex-row">
				
				<span></span>
				<span></span>
				<span></span>
			</div>
		</div>;
}

export default Loading;