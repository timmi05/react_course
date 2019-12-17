import React from 'react';
import {ItemInfo} from './ItemInfo'
import './ResultItem.css'

export const ResultItem = props => {
    const {id, posterPath, tagline, title, releaseDate, openMovie} = props;
    return (
        <div className='result-item'>
            <img className='result-item-cover' src={posterPath} alt={title} onClick={() => openMovie(id)}/>
            <ItemInfo
                posterPath={posterPath}
                tagline={tagline}
                title={title}
                releaseDate={releaseDate}
            />
        </div>
    );
};
