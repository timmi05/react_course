import React from 'react';
import DigitalInfo from '../component/DigitalInfo';
import './duration_and_release.css'

const DurationAndRelease = (props) => {
    const { runtime, release_date } = props;
    return (
         <div className='duration-and-release'>
            <span className='duration-and-release-release'>
                <DigitalInfo
                value = { release_date }
                />
            </span>
            <DigitalInfo
            value = { runtime }
            meaning = 'min'
            />
         </div>
    );
};

export default DurationAndRelease