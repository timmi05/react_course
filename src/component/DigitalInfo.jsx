import React from 'react';
import './digital_info.css';

const DigitalInfo = (props) => {
    const { value, meaning } = props;
    return (
         <span className="digital-info">
            <span className="digital-info-value">{ value }</span>
            <span className="digital-info-meaning">{ meaning }</span>
        </span>
    );
}

export default DigitalInfo