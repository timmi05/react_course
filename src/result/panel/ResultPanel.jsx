import React from 'react';
import {ResultInfo} from './ResultInfo';
import ResultSort from './ResultSort';
import './ResultPanel.css'

export const ResultPanel = props =>
    <div className='result-panel'>
        <ResultInfo
            {...props}
        />
        <ResultSort/>
    </div>;
