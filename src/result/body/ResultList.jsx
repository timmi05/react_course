import React from 'react';
import { ResultItem } from './ResultItem';
import './ResultList.css'

export const ResultList = props => {
    const { data, classesName } = props;
    return (
        <div className={ classesName }>
            <ul className='result-list'>
             { data.map((movie) =>
                 < ResultItem key={ movie.id }
                  posterPath={ movie.posterPath }
                  title={ movie.title }
                  tagline={ movie.tagline }
                  releaseDate={ movie.releaseDate }
                 />
                 )
             }
            </ul>
         </div>
    )
};
