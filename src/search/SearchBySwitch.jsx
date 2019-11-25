import React, { useState } from 'react';
import { Button } from '../component/Button'
import './SearchBySwitch.css';

export const SearchBySwitch = () => {

    const [disabled, setDisabled] = useState(false);

    const SearchByTitle = () => {
        setDisabled(true);
    };

    const SearchByGenre = () => {
        setDisabled(false);
    };

    return (
        <div className='search-by-switch'>
            <span className='search-by-switch-label'>SEARCH BY </span>
            <div className = 'search-by-switch-buttons'>
                <Button
                label = 'TITLE'
                classes = 'search-by-switch-button search-by-switch-left-button'
                onClick = { SearchByTitle }
                disabled = { disabled }
                />
                <Button
                label = 'GENRE'
                classes = 'search-by-switch-button search-by-switch-right-button'
                onClick = { SearchByGenre }
                disabled = { !disabled }
                />
            </div>
        </div>
    );
};
