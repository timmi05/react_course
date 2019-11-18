import React, { useState } from 'react';
import Button from '../../component/Button'
import './result_sort.css'

const ResultSort = props => {

    const { productSelected } = props;
    const [disabled, setDisabled] = useState(false);

    const handleSubmit1 = () => {
        setDisabled(true);
    };

    const handleSubmit2 = () => {
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
                handleSubmit = { handleSubmit1 }
                disabled = { disabled }
                />
                <Button
                label = 'RATING'
                classes = 'result-sort-button result-sort-right-button'
                handleSubmit = { handleSubmit2 }
                disabled = { !disabled }
                />
            </div>
        </span>
      );
};

export default ResultSort