import * as actionTypes from './actionTypes';

const INITIAL_STATE = {
    dishes: [],
    favourites: []
}

export const reducer = (state = INITIAL_STATE, action) => {
    switch (action.type) {
        case actionTypes.LOAD_DISHES:
            return {
                ...state,
                dishes: action.payload,
            }
        case actionTypes.ADD_TO_FAVOURITES:
            return {
                ...state,
                favourites: state.favourites.concat(action.payload)
            }
        case actionTypes.REMOVE_FAVOURITE:
            return {
                ...state,
                favourites: state.favourites.filter(item => item.id !== action.payload.id)
            }
        default:
            return state;
    }
}