import {reducer} from '../../../src/store/reducers/raducer.js';

describe('Reducers test', () => {
    let state;
    test('init', () => {
        let state;
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
        state = reducer({
            data: [],
            loading: false,
            error: null,
            isProductSelected: false,
            selectedProduct: {},
            value: '',
            searchBy: 'title',
            sortBy: 'vote_average'
        }, {type: 'persist/PERSIST'});
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
                movies: [{
                    id: 962,
                    title: 'The Gold Rush',
                    tagline: 'The World\'s Greatest Laughing Picture!',
                    vote_average: 7.8,
                    vote_count: 411,
                    release_date: '1925-06-25',
                    poster_path: 'https://image.tmdb.org/t/p/w500/eQRFo1qwRREYwj47Yoe1PisgOle.jpg',
                    overview: 'A lone prospector ventures into Alaska looking for gold. He gets mixed up with some burly characters and falls in love with the beautiful Georgia. He tries to win her heart with his singular charm.',
                    budget: 923000,
                    revenue: 2500000,
                    genres: ['Adventure', 'Comedy', 'Drama'],
                    runtime: 95
                }]
            }
        });
        expect(state).toEqual({
            data: [{
                id: 962,
                title: 'The Gold Rush',
                tagline: 'The World\'s Greatest Laughing Picture!',
                vote_average: 7.8,
                vote_count: 411,
                release_date: '1925-06-25',
                poster_path: 'https://image.tmdb.org/t/p/w500/eQRFo1qwRREYwj47Yoe1PisgOle.jpg',
                overview: 'A lone prospector ventures into Alaska looking for gold. He gets mixed up with some burly characters and falls in love with the beautiful Georgia. He tries to win her heart with his singular charm.',
                budget: 923000,
                revenue: 2500000,
                genres: ['Adventure', 'Comedy', 'Drama'],
                runtime: 95
            }],
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
            data: [{
                id: 962,
                title: 'The Gold Rush',
                tagline: 'The World\'s Greatest Laughing Picture!',
                vote_average: 7.8,
                vote_count: 411,
                release_date: '1925-06-25',
                poster_path: 'https://image.tmdb.org/t/p/w500/eQRFo1qwRREYwj47Yoe1PisgOle.jpg',
                overview: 'A lone prospector ventures into Alaska looking for gold. He gets mixed up with some burly characters and falls in love with the beautiful Georgia. He tries to win her heart with his singular charm.',
                budget: 923000,
                revenue: 2500000,
                genres: ['Adventure', 'Comedy', 'Drama'],
                runtime: 95
            }],
            loading: false,
            error: null,
            isProductSelected: false,
            selectedProduct: {},
            value: '',
            searchBy: 'title',
            sortBy: 'vote_average'
        }, {type: 'SEARCH_MOVIES', payload: {value: '', searchBy: 'genre'}});
        expect(state).toEqual({
            data: [{
                id: 962,
                title: 'The Gold Rush',
                tagline: 'The World\'s Greatest Laughing Picture!',
                vote_average: 7.8,
                vote_count: 411,
                release_date: '1925-06-25',
                poster_path: 'https://image.tmdb.org/t/p/w500/eQRFo1qwRREYwj47Yoe1PisgOle.jpg',
                overview: 'A lone prospector ventures into Alaska looking for gold. He gets mixed up with some burly characters and falls in love with the beautiful Georgia. He tries to win her heart with his singular charm.',
                budget: 923000,
                revenue: 2500000,
                genres: ['Adventure', 'Comedy', 'Drama'],
                runtime: 95
            }],
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
            data: [{
                id: 962,
                title: 'The Gold Rush',
                tagline: 'The World\'s Greatest Laughing Picture!',
                vote_average: 7.8,
                vote_count: 411,
                release_date: '1925-06-25',
                poster_path: 'https://image.tmdb.org/t/p/w500/eQRFo1qwRREYwj47Yoe1PisgOle.jpg',
                overview: 'A lone prospector ventures into Alaska looking for gold. He gets mixed up with some burly characters and falls in love with the beautiful Georgia. He tries to win her heart with his singular charm.',
                budget: 923000,
                revenue: 2500000,
                genres: ['Adventure', 'Comedy', 'Drama'],
                runtime: 95
            }],
            loading: false,
            error: null,
            isProductSelected: true,
            selectedProduct: {
                id: 962,
                title: 'The Gold Rush',
                tagline: 'The World\'s Greatest Laughing Picture!',
                vote_average: 7.8,
                vote_count: 411,
                release_date: '1925-06-25',
                poster_path: 'https://image.tmdb.org/t/p/w500/eQRFo1qwRREYwj47Yoe1PisgOle.jpg',
                overview: 'A lone prospector ventures into Alaska looking for gold. He gets mixed up with some burly characters and falls in love with the beautiful Georgia. He tries to win her heart with his singular charm.',
                budget: 923000,
                revenue: 2500000,
                genres: ['Adventure', 'Comedy', 'Drama'],
                runtime: 95
            },
            value: '',
            searchBy: 'genre',
            sortBy: 'vote_average'
        }, {type: 'MOVE_TO_SEARCH'});
        expect(state).toEqual({
            data: [{
                id: 962,
                title: 'The Gold Rush',
                tagline: 'The World\'s Greatest Laughing Picture!',
                vote_average: 7.8,
                vote_count: 411,
                release_date: '1925-06-25',
                poster_path: 'https://image.tmdb.org/t/p/w500/eQRFo1qwRREYwj47Yoe1PisgOle.jpg',
                overview: 'A lone prospector ventures into Alaska looking for gold. He gets mixed up with some burly characters and falls in love with the beautiful Georgia. He tries to win her heart with his singular charm.',
                budget: 923000,
                revenue: 2500000,
                genres: ['Adventure', 'Comedy', 'Drama'],
                runtime: 95
            }],
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
        let state;
        state = reducer({
            data: [{
                id: 962,
                title: 'The Gold Rush',
                tagline: 'The World\'s Greatest Laughing Picture!',
                vote_average: 7.8,
                vote_count: 411,
                release_date: '1925-06-25',
                poster_path: 'https://image.tmdb.org/t/p/w500/eQRFo1qwRREYwj47Yoe1PisgOle.jpg',
                overview: 'A lone prospector ventures into Alaska looking for gold. He gets mixed up with some burly characters and falls in love with the beautiful Georgia. He tries to win her heart with his singular charm.',
                budget: 923000,
                revenue: 2500000,
                genres: ['Adventure', 'Comedy', 'Drama'],
                runtime: 95
            }, {
                id: 19,
                title: 'Metropolis',
                tagline: 'There can be no understanding between the hands and the brain unless the heart acts as mediator.',
                vote_average: 8.1,
                vote_count: 837,
                release_date: '1927-01-10',
                poster_path: 'https://image.tmdb.org/t/p/w500/qriaeUUwdmlgethK3aSAx68mG05.jpg',
                overview: 'In a futuristic city sharply divided between the working class and the city planners, the son of the city\'s mastermind falls in love with a working class prophet who predicts the coming of a savior to mediate their differences.',
                budget: 92620000,
                revenue: 650422,
                genres: ['Drama', 'Science Fiction'],
                runtime: 153
            }],
            loading: false,
            error: null,
            isProductSelected: false,
            selectedProduct: {},
            value: '',
            searchBy: 'title',
            sortBy: 'release_date'
        }, {
            type: 'MOVIE_SELECTED',
            payload: {
                id: 962,
                title: 'The Gold Rush',
                tagline: 'The World\'s Greatest Laughing Picture!',
                vote_average: 7.8,
                vote_count: 411,
                release_date: '1925-06-25',
                poster_path: 'https://image.tmdb.org/t/p/w500/eQRFo1qwRREYwj47Yoe1PisgOle.jpg',
                overview: 'A lone prospector ventures into Alaska looking for gold. He gets mixed up with some burly characters and falls in love with the beautiful Georgia. He tries to win her heart with his singular charm.',
                budget: 923000,
                revenue: 2500000,
                genres: ['Adventure', 'Comedy', 'Drama'],
                runtime: 95
            }
        });
        expect(state).toEqual({
            data: [{
                id: 962,
                title: 'The Gold Rush',
                tagline: 'The World\'s Greatest Laughing Picture!',
                vote_average: 7.8,
                vote_count: 411,
                release_date: '1925-06-25',
                poster_path: 'https://image.tmdb.org/t/p/w500/eQRFo1qwRREYwj47Yoe1PisgOle.jpg',
                overview: 'A lone prospector ventures into Alaska looking for gold. He gets mixed up with some burly characters and falls in love with the beautiful Georgia. He tries to win her heart with his singular charm.',
                budget: 923000,
                revenue: 2500000,
                genres: ['Adventure', 'Comedy', 'Drama'],
                runtime: 95
            }, {
                id: 19,
                title: 'Metropolis',
                tagline: 'There can be no understanding between the hands and the brain unless the heart acts as mediator.',
                vote_average: 8.1,
                vote_count: 837,
                release_date: '1927-01-10',
                poster_path: 'https://image.tmdb.org/t/p/w500/qriaeUUwdmlgethK3aSAx68mG05.jpg',
                overview: 'In a futuristic city sharply divided between the working class and the city planners, the son of the city\'s mastermind falls in love with a working class prophet who predicts the coming of a savior to mediate their differences.',
                budget: 92620000,
                revenue: 650422,
                genres: ['Drama', 'Science Fiction'],
                runtime: 153
            }],
            loading: false,
            error: null,
            isProductSelected: true,
            selectedProduct: {
                id: 962,
                title: 'The Gold Rush',
                tagline: 'The World\'s Greatest Laughing Picture!',
                vote_average: 7.8,
                vote_count: 411,
                release_date: '1925-06-25',
                poster_path: 'https://image.tmdb.org/t/p/w500/eQRFo1qwRREYwj47Yoe1PisgOle.jpg',
                overview: 'A lone prospector ventures into Alaska looking for gold. He gets mixed up with some burly characters and falls in love with the beautiful Georgia. He tries to win her heart with his singular charm.',
                budget: 923000,
                revenue: 2500000,
                genres: ['Adventure', 'Comedy', 'Drama'],
                runtime: 95
            },
            value: '',
            searchBy: 'title',
            sortBy: 'release_date'
        });
    });
});
