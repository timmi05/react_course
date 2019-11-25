import React from 'react';
import './ResultInfo.css'

export const ResultInfo = props => {
    const { productSelected, genre, data } = props;

    return (
        <span className='result-info'>
        { getResultMessage(productSelected, genre, data) }
        </span>
    );
};

const getResultMessage = (productSelected, genre, data) =>{
    const count = productSelected ? 0 : data.length;
    return count !== 0 ? `${ count } movie found` : genre ? `Film by ${ genre } genre` : '';
};