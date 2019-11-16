import React from 'react';
import ResultPanel from './panel/ResultPanel';
import ResultBody from './body/ResultBody';

const ResultContainer = (props) => {
    return(
     <div className="result-container">
         <ResultPanel
         {...props}
          />
         <ResultBody/>
    </div>
    )
}
export default ResultContainer