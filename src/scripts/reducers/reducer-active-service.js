export default function (state = {}, action) {
    switch (action.type) {
        case 'SERVICE_SELECTED':
            return action.payload;
            break;
    }
    return state;
}