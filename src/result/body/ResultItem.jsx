import React from 'react';
import { ItemInfo } from './ItemInfo'
// import ItemInfo from './ItemInfo'
import './ResultItem.css'

export const ResultItem = props => {
    const { posterPath, tagline, title, releaseDate } = props;
    return (
         <div className='result-item'>
            <img className='result-item-cover' src={ posterPath } alt={ title }/>
         <ItemInfo
         posterPath = { posterPath }
         tagline = { tagline }
         title = { title }
         releaseDate = { releaseDate }
         />
        </div>
    );
};
