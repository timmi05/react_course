import React, {Component} from 'react';
import {ResultPanel} from './panel/ResultPanel';
import {ResultBody} from './body/ResultBody';
import {fetchMovies, openMovie} from '../store/actions/movies';
import {connect} from 'react-redux';
import {selectMovies} from '../store/selectors/selectMovies';
import {selectIsProductSelected} from '../store/selectors/selectIsProductSelected'
import {selectSelectedProduct} from '../store/selectors/selectSelectedProduct'
import {findMovie} from '../services/filterMovies'
import {selectGenre} from '../store/selectors/selectGenre'

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
    return ({
        movies: selectMovies(state),
        isProductSelected: selectIsProductSelected(state),
        genre: selectGenre(selectSelectedProduct(state))
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
