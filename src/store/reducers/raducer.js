import {FETCH_MOVIES_BEGIN, FETCH_MOVIES_FAILURE, FETCH_MOVIES_SUCCESS, MOVIE_SELECTED} from '../actions/movies';

const initialState = {
    data: [],
    loading: false,
    error: null,
    isProductSelected: false,
    selectedProduct: {},
    value: '',
    searchBy: 'title',
    sortBy: 'vote_average'
};
export const reducer = (state = initialState, action) => {
    switch (action.type) {
        case FETCH_MOVIES_BEGIN:
            return {
                ...state,
                loading: true,
                error: null
            };

        case FETCH_MOVIES_SUCCESS:
            return {
                ...state,
                loading: false,
                data: action.payload.movies
            };

        case FETCH_MOVIES_FAILURE:
            return {
                ...state,
                loading: false,
                error: action.payload.error,
                data: []
            };

        case MOVIE_SELECTED:
            return {
                ...state,
                isProductSelected: true,
                selectedProduct: action.payload
            };
        case 'MOVE_TO_SEARCH':
            return {
                ...state,
                isProductSelected: false,
                selectedProduct: {}
            };
        case 'SEARCH_MOVIES':
            return {
                ...state,
                value: action.payload.value,
                searchBy: action.payload.searchBy
            };
        case 'SORT_BY':
            return {
                ...state,
                sortBy: action.payload
            };
        default:
            return state;
    }
};
