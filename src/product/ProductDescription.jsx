import React from 'react';

export const ProductDescription = (props) => {
   const { overview } = props;
   return (
   <span className='product-description'>{ overview }</span>
    );
};

export default ProductDescription