import React from 'react';
import {DigitalInfo} from '../component/DigitalInfo';

export const Duration = props => {
    const {runtime} = props;
    if (runtime === 0) {
        return (
            <a/>
        )
    }
    return (
        <DigitalInfo
            value={runtime}
            meaning=' min'
        />
    )
};