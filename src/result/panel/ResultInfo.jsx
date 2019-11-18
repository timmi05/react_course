import React from 'react';
import './result_info.css'

export const ResultInfo = props => {
    const { productSelected, genre, data } = props;
    const count = productSelected ? null : data.length;
    const massage = count && count !== 0 ? `${ count } movie found` : genre ? `Film by ${ genre } genre` : '';
    return (
        <span className='result-info'>
        { massage }
        </span>
    );
};

export default ResultInfo