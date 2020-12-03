
const intialState = {
    listing: [],
}

export const ActionTypes = {
    SET_LISTING: 'SET_LISTING',
},

export const ActionTypes = {
    setListing: payload => ({ type: ActionTypes.SET_LISTING, payload }),
}

export default function ListingReducer(state = intialState, action) {
    switch (action.type) {
        case ActionTypes.SET_LISTING:
            return { ...state, listings: [...action.payload] };
        default:
            return state; 
    }
}