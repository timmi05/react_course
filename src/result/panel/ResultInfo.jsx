import React from 'react';

export const ResultInfo = (props) => {

    const { count, genre } = props;
    const massage = count ? `${ count } movie found` : genre ? `Film by ${ genre } genre` : '';

    return (
        <span className='result-info'>
        { massage }
        </span>
    );
}

export default ResultInfo