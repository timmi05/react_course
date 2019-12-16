import React from 'react';
import {ProductRating} from './ProductRating';
import {ProductDetails} from './ProductDetails';
import {ProductDescription} from './ProductDescription';
import './ProductInfo.css'

export const ProductInfo = props => {
    const {movie: {title, vote_average, tagline, runtime, release_date, overview}} = props;
    return (
        <div className='product-info'>
            <div className='product-info-title-rating'>
                <span className='product-info-title'>{title}</span>
                <ProductRating
                    rating={vote_average}
                />
            </div>
            <div className='product-info-tagline'>{tagline}</div>
            <ProductDetails
                runtime={runtime}
                releaseDate={release_date.substring(0, 4)}
            />
            <ProductDescription
                overview={overview}
            />
        </div>
    );
};
