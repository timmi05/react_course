import React from 'react';
import DigitalInfo from '../component/DigitalInfo';

const DurationAndRelease = (props) =>{
    const { runtime, release_date } = props;
    return (
         <div className="duration-and-release">
            <DigitalInfo
            value = { runtime }
            meaning = 'year'
            />
            <DigitalInfo
            value = {runtime}
            meaning = 'min'
            />
         </div>
    );
}

export default DurationAndRelease