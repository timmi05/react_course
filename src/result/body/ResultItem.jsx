import React from 'react';
import ItemInfo from './ItemInfo'
import './result_item.css'

const ResultItem = (props) => {

    const { poster_path } = props;
    return (
         <div className='result-item'>
         <img className='result-item-cover' src={ poster_path }/>
         <ItemInfo {...props}/>
        </div>
    );
}

export default ResultItem
