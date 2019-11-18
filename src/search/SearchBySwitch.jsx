import React, { useState } from 'react';
import Button from '../component/Button'
import './search_by_switch.css';

const SearchBYSwitch = () => {

    const [disabled, setDisabled] = useState(false);

    const handleSubmit1 = () => {
        setDisabled(true);
    };

    const handleSubmit2 = () => {
        setDisabled(false);
    };

    return (
        <div className='search-by-switch'>
            <span className='search-by-switch-label'>SEARCH BY </span>
            <div className = 'search-by-switch-buttons'>
                <Button
                label = 'TITLE'
                classes = 'search-by-switch-button search-by-switch-left-button'
                handleSubmit = { handleSubmit1 }
                disabled = { disabled }
                />
                <Button
                label = 'GENRE'
                classes = 'search-by-switch-button search-by-switch-right-button'
                handleSubmit = {handleSubmit2}
                disabled = {!disabled}
                />
            </div>
        </div>
    );
};

export default SearchBYSwitch