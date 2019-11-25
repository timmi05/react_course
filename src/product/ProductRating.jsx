import React from 'react';
import './ProductRating.css'

export const ProductRating = props => {
    const { rating } = props;
    return (
         <span className='product-rating' >{ rating }</span>
    );
};
