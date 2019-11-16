import React from 'react';

const ProductRating = (props) =>{
    const {rating} = props;
    return (
         <span className="product-rating" >{ rating }</span>
    );
}

export default ProductRating