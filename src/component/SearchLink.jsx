import React from 'react';
import './SearchLink.css';

export const SearchLink = props => {
    const { productSelected } = props;

    if ( !productSelected ) {
        return (
            <a/>
        );
    }
    return (
            <a  className='search-link' href=''>search</a>
        )
};