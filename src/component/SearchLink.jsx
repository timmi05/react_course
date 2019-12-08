import React from 'react';
import './SearchLink.css';

export const SearchLink = props => {
    if (!props.isProductSelected) {
        return (
            <a/>
        );
    }
    return (
        <a className='search-link' href='' onClick={props.moveToSearch}>search</a>
    )
};