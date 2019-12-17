import React from 'react';

export const DigitalInfo = props =>
    <span className='digital-info'>
        <span className='digital-info-value'>{props.value}</span>
        <span className='digital-info-meaning'>{props.meaning}</span>
    </span>;
