export const sortMovies = (movies, sortBy) => {
    return movies.sort(
        sortBy === 'release_date'
            ? sortByReleaseDate
            : sortByVoteAverage)

};

const sortByReleaseDate = (a, b) => {
    const releaseDateA = new Date(a.release_date);
    const releaseDateB = new Date(b.release_date);

    let comparison = 0;
    if (releaseDateA < releaseDateB) {
        comparison = 1;
    } else if (releaseDateA > releaseDateB) {
        comparison = -1;
    }
    return comparison;
};

const sortByVoteAverage = (a, b) => {
    const voteAverageA = parseFloat(a.vote_average);
    const voteAverageB = parseFloat(b.vote_average);

    let comparison = 0;
    if (voteAverageA < voteAverageB) {
        comparison = 1;
    } else if (voteAverageA > voteAverageB) {
        comparison = -1;
    }
    return comparison;
};