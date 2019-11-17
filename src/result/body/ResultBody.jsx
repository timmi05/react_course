import React from 'react';
import ResultItem from './ResultItem';
import './result_body.css'

const ResultBody = (props) => {
    const data = props.data;
    const list = <ul className='result-body-list'>
        { data.map((movie) =>
            < ResultItem key={ movie.id }
                         poster_path={ movie.poster_path }
                         title={ movie.title }
                         tagline={ movie.tagline }
                         release_date={ movie.release_date }
            />
            )
        }
    </ul>;

    const emptyBody = <div className='result-body-empty'>No films found</div>;

    const content = data.length >0 ? list : emptyBody;

    return (
        <div className='result-body'>{ content }</div>
    )
};

export default ResultBody
