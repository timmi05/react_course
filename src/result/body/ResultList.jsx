import React from 'react';
import ResultItem from './ResultItem';
import './result_list.css'

const ResultList = props => {
    const { data, classesName } = props;
    return (
        <div className={ classesName }>
            <ul className='result-list'>
             { data.map((movie) =>
                 < ResultItem key={ movie.id }
                  poster_path={ movie.poster_path }
                  title={ movie.title }
                  tagline={ movie.tagline }
                  release_date={ movie.release_date }
                 />
                 )
             }
            </ul>
         </div>
    )
};

export default ResultList
