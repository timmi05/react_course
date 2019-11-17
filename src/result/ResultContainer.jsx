import React from 'react';
import ResultPanel from './panel/ResultPanel';
import ResultBody from './body/ResultBody';

const ResultContainer = (props) =>
     <div className='result-container'>
         <ResultPanel
         {...props}
          />
         <ResultBody
         {...props}
         />
    </div>;

export default ResultContainer