import React, {Component} from 'react';
import {ResultPanel} from './panel/ResultPanel';
import {ResultBody} from './body/ResultBody';
import {fetchMovies, openMovie} from '../store/actions/movies';
import {connect} from 'react-redux';
import {selectMovies} from '../store/selectors/selectMovies';
import {selectValue} from '../store/selectors/selectValue';
import {selectIsProductSelected} from '../store/selectors/selectIsProductSelected'
import {selectSelectedProduct} from '../store/selectors/selectSelectedProduct'
import {selectSortBy} from '../store/selectors/selectSortBy'
import {selectSearchBy} from '../store/selectors/selectSearchBy'
import {filterMovies} from '../services/filterMovies'
import {sortMovies} from '../services/sortMovies'
import {getGenre} from '../services/getGenre'
import {findMovie} from '../services/filterMovies'

class Result extends Component {
    componentDidMount() {
        this.props.fetchMovies();
    };

    openMovie = id => {
        this.props.onOpenMovie(findMovie(this.props.movies, id));
    };

    render() {
        const movies = this.props.movies;
        return (
            <div className='result'>
                <ResultPanel
                    isProductSelected={this.props.isProductSelected}
                    genre={this.props.genre}
                    length={movies.length}
                />
                <ResultBody
                    movies={movies}
                    openMovie={this.openMovie}
                />
            </div>
        )
    };
}


const mapStateToProps = state => {
    const value = selectValue(state);
    const sortBy = selectSortBy(state);
    const searchBy = selectSearchBy(state);
    return ({
        movies: sortMovies(filterMovies(selectMovies(state), searchBy, value), sortBy),
        isProductSelected: selectIsProductSelected(state),
        genre: getGenre(selectSelectedProduct(state))
    });
};


const mapDispatchToProps = dispatch => ({
    onOpenMovie: movie => dispatch(openMovie(movie)),
    fetchMovies: () => dispatch(fetchMovies())
});

export default connect(
    mapStateToProps,
    mapDispatchToProps
)(Result);
