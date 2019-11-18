import React from 'react';
import './item_info.css'

const ItemInfo = props => {
     const { title, tagline, release_date } = props;
     return (
          <div className='item-info'>
            <div className='item-info-title-year'>
                <div className='item-info-title'> { title } </div>
                <span className='item-info-release-year'>{ release_date }</span>
            </div>
            <div className='item-info-tagline'>
                { tagline }
             </div>
         </div>
     );
 };

export default ItemInfo