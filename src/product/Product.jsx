import React from 'react';
import {ProductInfo} from './ProductInfo';
import './Product.css';

export const Product = props =>
    <div className='product'>
        <img className='product-cover' src={props.movie.poster_path} alt={props.movie.title}/>
        <ProductInfo
            {...props}
        />
    </div>;
