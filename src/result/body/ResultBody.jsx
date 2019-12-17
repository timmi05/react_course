import React from 'react';
import {ResultList} from './ResultList';
import {EmptyBody} from './EmptyBody';
import './ResultBody.css'

export const ResultBody = props => {
    const {movies, openMovie} = props;
    if (movies.length === 0)
        return (
            < EmptyBody
                classesName='result-body'
            />
        );
    return (
        <ResultList
            movies={movies}
            openMovie={openMovie}
            classesName='result-body'
        />
    );
};
