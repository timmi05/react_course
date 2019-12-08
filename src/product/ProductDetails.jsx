import React from 'react';
import {DigitalInfo} from '../component/DigitalInfo';
import './ProductDetails.css'
import {Duration} from './Duration'

export const ProductDetails = props => {
    const {runtime, releaseDate} = props;
    return (
        <div className='product-details'>
            <span className='product-details-release'>
                <DigitalInfo
                    value={releaseDate}
                />
            </span>
            <Duration
                runtime={runtime}
            />
        </div>
    );
};