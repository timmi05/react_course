import React from 'react';
import ProductRating from './ProductRating';
import DurationAndRelease from './DurationAndRelease';
import ProductDescription from './ProductDescription';

const ProductInfo = (props) =>{
    const { runtime, release_date, overview, title, vote_average, tagline} = props;
    return (
         <div className="product-info">
         <span className="product-info-title">{ title }</span>
         <ProductRating
         rating = { vote_average }
         />
         <div>{ tagline }</div>
         <DurationAndRelease
         runtime = { runtime }
         release_date = { release_date }
         />
         <ProductDescription
         overview = { overview }
         />
        </div>
    );
}

export default ProductInfo