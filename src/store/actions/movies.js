export const FETCH_MOVIES_BEGIN = 'FETCH_MOVIES_BEGIN';
export const FETCH_MOVIES_SUCCESS = 'FETCH_MOVIES_SUCCESS';
export const FETCH_MOVIES_FAILURE = 'FETCH_MOVIES_FAILURE';
export const MOVIE_SELECTED = 'MOVIE_SELECTED';

const fetchMoviesBegin = () => ({
    type: FETCH_MOVIES_BEGIN
});

const fetchMoviesSuccess = movies => ({
    type: FETCH_MOVIES_SUCCESS,
    payload: {movies}
});

const fetchMoviesFailure = error => ({
    type: FETCH_MOVIES_FAILURE,
    payload: {error}
});

export const fetchMovies = () => {
    const url = 'http://reactjs-cdp.herokuapp.com/movies?limit=100';
    return dispatch => {
        dispatch(fetchMoviesBegin());
        return fetch(url)
            .then(handleErrors)
            .then(res => res.json())
            .then(json => {
                dispatch(fetchMoviesSuccess(json.data));
                return json.data;
            })
            .catch(error => dispatch(fetchMoviesFailure(error)));
    };
};

const handleErrors = response => {
    if (!response.ok) {
        throw Error(response.statusText);
    }
    return response;
};

export const openMovie = movie => ({
    type: 'MOVIE_SELECTED',
    payload: movie
});