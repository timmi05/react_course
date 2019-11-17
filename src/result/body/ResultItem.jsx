import React from 'react';
// import { ItemInfo } from './ItemInfo'
import ItemInfo from './ItemInfo'
import './result_item.css'

const ResultItem = (props) => {
    const { poster_path, title } = props;
    return (
         <div className='result-item'>
            <img className='result-item-cover' src={ poster_path } alt={ title }/>
         <ItemInfo {...props}/>
        </div>
    );
};

export default ResultItem
