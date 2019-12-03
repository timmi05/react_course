import React, { useState }  from 'react';
import { SearchBySwitch } from './SearchBySwitch';
import { Button } from '../component/Button'
import './SearchPanel.css';

export const SearchPanel = () => {

    const [value, setValue] = useState('');
    const [disabled, setDisabled] = useState(false);

    const handleChange = event => {
      setValue(event.target.value);
    };

    const handleSubmit = () => {
      setDisabled(true);
    };

    return (
        <div className='search-panel'>
           <div className='search-panel-label'>FINED YOUR MOVIE</div>
           <div className='search-panel-main'>
               <input className='search-panel-input' type='text' value={ value } onChange={ handleChange } />
               <Button
               label = 'SEARCH'
               classes = 'search-panel-button'
               onClick = { handleSubmit }
               disabled = { disabled }
               />
           </div>
           <SearchBySwitch/>
        </div>
    );
};
