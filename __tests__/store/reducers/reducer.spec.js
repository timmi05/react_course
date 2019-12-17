import {reducer} from '../../../src/store/reducers/raducer.js';

describe('Reducers test', () => {
    let state;
    test('init', () => {
        state = reducer(undefined, {});
        expect(state).toEqual({
            data: [],
            loading: false,
            error: null,
            isProductSelected: false,
            selectedProduct: {},
            value: '',
            searchBy: 'title',
            sortBy: 'vote_average'
        });
    });

    test('persist', () => {
        const currentState = {
            data: [],
            loading: false,
            error: null,
            isProductSelected: false,
            selectedProduct: {},
            value: '',
            searchBy: 'title',
            sortBy: 'vote_average'
        };
        state = reducer(currentState, {type: 'persist/PERSIST'});
        expect(state).toEqual(currentState);
    });

    test('fetch movies begin', () => {
        state = reducer({
            data: [],
            loading: false,
            error: null,
            isProductSelected: false,
            selectedProduct: {},
            value: '',
            searchBy: 'title',
            sortBy: 'vote_average'
        }, {type: 'FETCH_MOVIES_BEGIN'});
        expect(state).toEqual({
            data: [],
            loading: true,
            error: null,
            isProductSelected: false,
            selectedProduct: {},
            value: '',
            searchBy: 'title',
            sortBy: 'vote_average'
        });
    });

    const mockData = {
        id: 1,
        title: 'The Gold Rush',
        tagline: 'The World\'s Greatest Laughing Picture!',
        vote_average: 7.8,
        vote_count: 411,
        release_date: '1925-06-25',
        poster_path: 'movie.jpg',
        overview: 'A lone prospector ventures into Alaska looking for gold.',
        budget: 923000,
        revenue: 2500000,
        genres: ['Adventure', 'Comedy', 'Drama'],
        runtime: 95
    };

    test('fetch movies success', () => {
        state = reducer({
            data: [],
            loading: true,
            error: null,
            isProductSelected: false,
            selectedProduct: {},
            value: '',
            searchBy: 'title',
            sortBy: 'vote_average'
        }, {
            type: 'FETCH_MOVIES_SUCCESS',
            payload: {
                movies: [mockData]
            }
        });
        expect(state).toEqual({
            data: [mockData],
            loading: false,
            error: null,
            isProductSelected: false,
            selectedProduct: {},
            value: '',
            searchBy: 'title',
            sortBy: 'vote_average'
        });
    });

    test('search movie by title', () => {
        state = reducer({
            data: [mockData],
            loading: false,
            error: null,
            isProductSelected: false,
            selectedProduct: {},
            value: '',
            searchBy: 'title',
            sortBy: 'vote_average'
        }, {type: 'SEARCH_MOVIES', payload: {value: '', searchBy: 'genre'}});
        expect(state).toEqual({
            data: [mockData],
            loading: false,
            error: null,
            isProductSelected: false,
            selectedProduct: {},
            value: '',
            searchBy: 'genre',
            sortBy: 'vote_average'
        });
    });

    test('move to search', () => {
        state = reducer({
            data: [mockData],
            loading: false,
            error: null,
            isProductSelected: true,
            selectedProduct: mockData,
            value: '',
            searchBy: 'genre',
            sortBy: 'vote_average'
        }, {type: 'MOVE_TO_SEARCH'});
        expect(state).toEqual({
            data: [mockData],
            loading: false,
            error: null,
            isProductSelected: false,
            selectedProduct: {},
            value: '',
            searchBy: 'genre',
            sortBy: 'vote_average'
        });
    });

    test('movie selected', () => {
        const movie = {
            id: 2,
            title: 'Metropolis',
            tagline: 'There heart acts as mediator.',
            vote_average: 8.1,
            vote_count: 837,
            release_date: '1927-01-10',
            poster_path: 'movie_2.jpg',
            overview: 'In a futuristic city sharply divided between the working class and the city planners.',
            budget: 92620000,
            revenue: 650422,
            genres: ['Drama', 'Science Fiction'],
            runtime: 153
        };
        state = reducer({
            data: [mockData, movie],
            loading: false,
            error: null,
            isProductSelected: false,
            selectedProduct: {},
            value: '',
            searchBy: 'title',
            sortBy: 'release_date'
        }, {
            type: 'MOVIE_SELECTED',
            payload: mockData
        });
        expect(state).toEqual({
            data: [mockData, movie],
            loading: false,
            error: null,
            isProductSelected: true,
            selectedProduct: mockData,
            value: '',
            searchBy: 'title',
            sortBy: 'release_date'
        });
    });
});
