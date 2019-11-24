import React from 'react';
import { DigitalInfo } from '../component/DigitalInfo';
import './ProductDetails.css'

export const ProductDetails = props => {
    const { runtime, releaseDate } = props;
    return (
         <div className='product-details'>
            <span className='product-details-release'>
                <DigitalInfo
                value = { releaseDate }
                />
            </span>
            <DigitalInfo
            value = { runtime }
            meaning = 'min'
            />
         </div>
    );
};
