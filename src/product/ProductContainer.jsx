import React from 'react';
import ProductInfo from './ProductInfo';
import './product_container.css';

const ProductContainer = (props) => {
        const { poster_path, title } = props;
        return (
             <div className='product-container'>
             <img className='product-container-cover' src={ poster_path } alt={ title }/>
             <ProductInfo {...props}/>
            </div>
        );
};
export default ProductContainer