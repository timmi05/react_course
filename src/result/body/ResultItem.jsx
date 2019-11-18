import React from 'react';
// import { ItemInfo } from './ItemInfo'
import ItemInfo from './ItemInfo'
import './result_item.css'

const ResultItem = props => {
    const { poster_path, tagline, title, release_date } = props;
    return (
         <div className='result-item'>
            <img className='result-item-cover' src={ poster_path } alt={ title }/>
         <ItemInfo
         poster_path = { poster_path }
         tagline = { tagline }
         title = { title }
         release_date = { release_date }
         />
        </div>
    );
};

export default ResultItem
