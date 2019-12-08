import React from 'react';
import './ItemInfo.css'

export const ItemInfo = props => {
    const {title, tagline, releaseDate} = props;
    return (
        <div className='item-info'>
            <div className='item-info-title-year'>
                <div className='item-info-title'> {title} </div>
                <span className='item-info-release-year'>{releaseDate}</span>
            </div>
            <div className='item-info-tagline'>
                {tagline}
            </div>
        </div>
    );
};
