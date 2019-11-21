import React from 'react';
import { ResultPanel } from './panel/ResultPanel';
import { ResultBody } from './body/ResultBody';

export const Result = props => {
    const { productSelected, genre, data } = props;
    return(
        <div className='result'>
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
