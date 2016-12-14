import { createStore, compose, applyMiddleware } from 'redux';
import { syncHistoryWithStore } from 'react-router-redux';
import { browserHistory } from 'react-router';
import axios from 'axios';
import logger from 'redux-logger';
import thunk from 'redux-thunk';

// Import the root reducer
import rootReducer from './reducers/index';

// Import data from API

// Create an object for the default data
const defaultState = {
	pages: {},
	// fetched: false,
	// fetching: false
}

const middleware = applyMiddleware(thunk, logger());
const enhancers = compose(
  window.devToolsExtension ? window.devToolsExtension() : f => f
);
const store = createStore(rootReducer, defaultState, middleware, enhancers);
export const history = syncHistoryWithStore(browserHistory, store);

const payload = function () {
	axios.get('/wp-json/wp/v2/pages/')
		.then((response) => {
			console.table(response.data);
		})
}
payload();

store.dispatch((dispatch) => {
	dispatch({
		type: 'FETCH_DATA_START'
	})
	axios.get('/wp-json/wp/v2/pages/')
		.then((response) => {
			dispatch({
				type: 'FETCH_DATA_COMPLETE',
				payload: response.data.pages
			})
		})
		.catch((error) => {
			dispatch({
				type: 'FETCH_DATA_ERROR',
				payload: error
			})
		})
})


export default store;