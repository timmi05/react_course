import React from 'react';
import { ProductRating } from './ProductRating';
import { ProductDetails } from './ProductDetails';
import { ProductDescription } from './ProductDescription';
import './ProductInfo.css'

export const ProductInfo = props => {
    const { runtime, releaseDate, overview, title, voteAverage, tagline} = props;
    return (
         <div className='product-info'>
             <div className='product-info-title-rating'>
                 <span className='product-info-title'>{ title }</span>
                 <ProductRating
                 rating = { voteAverage }
                 />
             </div>
            <div className='product-info-tagline'>{ tagline }</div>
             <ProductDetails
             runtime = { runtime }
             releaseDate = { releaseDate }
             />
             <ProductDescription
             overview = { overview }
             />
         </div>
    );
};
