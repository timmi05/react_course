import React, {useState} from 'react';
import {Button} from '../component/Button'
import './SearchBySwitch.css';

export const SearchBySwitch = props => {

    const [disabled, setDisabled] = useState(props.searchByTitleDisabled);

    const searchByTitle = () => {
        setDisabled(true);
        props.searchByTitle()
    };

    const searchByGenre = () => {
        setDisabled(false);
        props.searchByGenre()
    };

    return (
        <div className='search-by-switch'>
            <span className='search-by-switch-label'>SEARCH BY </span>
            <div className='search-by-switch-buttons'>
                <Button
                    label='TITLE'
                    classes='search-by-switch-button search-by-switch-left-button'
                    onClick={searchByTitle}
                    disabled={disabled}
                />
                <Button
                    label='GENRE'
                    classes='search-by-switch-button search-by-switch-right-button'
                    onClick={searchByGenre}
                    disabled={!disabled}
                />
            </div>
        </div>
    );
};
