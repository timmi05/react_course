import React from 'react';
import {ResultItem} from './ResultItem';
import './ResultList.css'

export const ResultList = props => {
    const {movies, openMovie, classesName} = props;
    return (
        <div className={classesName}>
            <ul className='result-list'>
                {movies.map(movie =>
                    < ResultItem key={movie.id}
                                 id={movie.id}
                                 posterPath={movie.poster_path}
                                 title={movie.title}
                                 tagline={movie.tagline}
                                 releaseDate={movie.release_date.substring(0, 4)}
                                 openMovie={openMovie}
                    />
                )}
            </ul>
        </div>
    )
};
