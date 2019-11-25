import React, { useState } from 'react';
import { Button } from '../../component/Button'
import './ResultSort.css'

export const ResultSort = props => {

    const { productSelected } = props;
    const [disabled, setDisabled] = useState(false);

    const SortByReleaseDate = () => {
        setDisabled(true);
    };

    const SortByRating = () => {
        setDisabled(false);
    };

    if ( productSelected )
    return(
        <a/>
    );

    return (
        <span className='result-sort'>
        <label className='result-sort-label'>SORT BY </label>
            <div className='result-sort-buttons'>
                <Button
                label = 'RELEASE DATE'
                classes = 'result-sort-button result-sort-left-button'
                onClick = { SortByReleaseDate }
                disabled = { disabled }
                />
                <Button
                label = 'RATING'
                classes = 'result-sort-button result-sort-right-button'
                onClick = { SortByRating }
                disabled = { !disabled }
                />
            </div>
        </span>
      );
};
