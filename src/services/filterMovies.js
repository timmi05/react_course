export const filterMovies = (movies, searchBy, value) => {
    return movies.filter(movie =>
        searchBy === 'title'
            ? filterIncludesValue(movie.title, value)
            : filterByGenre(movie, value)
    )
};

const filterIncludesValue = (value, includesValue) => {
    return value.includes(includesValue);
};

const filterByGenre = (movie, includesValue) => {
    const genres = movie.genres.filter(genre => filterIncludesValue(genre, includesValue));
    return genres.length > 0;
};

export const findMovie = (movies, id) => {
    const movie = movies.filter(movie => movie.id === id);
    return movie[0];
};