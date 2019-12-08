import React from 'react';
import './ResultInfo.css'

export const ResultInfo = props => {
    const { isProductSelected, genre, length } = props;

    return (
        <span className='result-info'>
        { getResultMessage(isProductSelected, genre, length) }
        </span>
    );
};

const getResultMessage = (isProductSelected, genre, length) =>{
    const count = isProductSelected ? 0 : length;
    return count !== 0 ? `${ count } movie found` : genre ? `Film by ${ genre } genre` : '';
};