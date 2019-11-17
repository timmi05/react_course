import React from 'react';
import './result_info.css'

export const ResultInfo = (props) => {
    const { count, genre } = props;
    const massage = count && count !== 0 ? `${ count } movie found` : genre ? `Film by ${ genre } genre` : '';
    return (
        <span className='result-info'>
        { massage }
        </span>
    );
};

export default ResultInfo