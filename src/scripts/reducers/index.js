import { combineReducers } from 'redux';
import { routerReducer } from 'react-router-redux';
import PagesReducer from './reducer-pages';
import ActiveServiceReducer from './reducer-active-service';
import DataReducer from './reducer-data';

const allReducers = combineReducers({
    // pages: PagesReducer,
	pages: DataReducer,
    // activeService: ActiveServiceReducer,
	routing: routerReducer
});

export default allReducers;