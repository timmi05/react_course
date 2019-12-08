import React from 'react';
import {ProductRating} from './ProductRating';
import {ProductDetails} from './ProductDetails';
import {ProductDescription} from './ProductDescription';
import './ProductInfo.css'

export const ProductInfo = props => {
    const {movie} = props;
    return (
        <div className='product-info'>
            <div className='product-info-title-rating'>
                <span className='product-info-title'>{movie.title}</span>
                <ProductRating
                    rating={movie.vote_average}
                />
            </div>
            <div className='product-info-tagline'>{movie.tagline}</div>
            <ProductDetails
                runtime={movie.runtime}
                releaseDate={movie.release_date.substring(0, 4)}
            />
            <ProductDescription
                overview={movie.overview}
            />
        </div>
    );
};
