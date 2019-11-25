import React from 'react';
import { ProductInfo } from './ProductInfo';
import './Product.css';

export const Product = props => {
        const { posterPath, title } = props;
        return (
             <div className='product'>
             <img className='product-cover' src={ posterPath } alt={ title }/>
             <ProductInfo
              {...props}
             />
            </div>
        );
};
