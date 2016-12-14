export default function (state = {}, action) {
    switch (action.type) {
        case 'FETCH_DATA_START': {
			return [
				...state, {
				fetching: true,
			}]
		}
		case 'FETCH_DATA_ERROR': {
			return [ 
				...state, {
				fetching: false,
				error: action.payload
			}]
		}
		case 'FETCH_DATA_COMPLETE': {
			return [
				...state, {
				fetching: false,
				fetched: true,
				pages: action.payload
			}]
		}
    }
    return state;
}