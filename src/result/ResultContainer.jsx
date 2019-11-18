import React from 'react';
import ResultPanel from './panel/ResultPanel';
import ResultBody from './body/ResultBody';

const ResultContainer = props => {
    const { productSelected, genre, data } = props;
    return(
        <div className='result-container'>
             <ResultPanel
             productSelected = { productSelected }
             genre = { genre }
             data = { data }
              />
             <ResultBody
             data = { data }
             />
        </div>
    );
};

export default ResultContainer