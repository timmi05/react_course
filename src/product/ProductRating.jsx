import React from 'react';
import './product_rating.css'

const ProductRating = (props) => {
    const {rating} = props;
    return (
         <span className='product-rating' >{ rating }</span>
    );
};

export default ProductRating