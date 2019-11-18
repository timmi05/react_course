import React from 'react';
import './search_link.css';

const SearchLink = props => {
    const { productSelected } = props;

    if ( productSelected ) {
    return (
            <a  className='search-link' href=''>search</a>
        )
    }
    return (
        <a/>
    );
};

export default SearchLink