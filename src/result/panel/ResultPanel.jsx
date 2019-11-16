import React from 'react';
import ResultInfo from './ResultInfo';
import ResultSort from './ResultSort';

const ResultPanel = (props) => {

    const { productSelected, genre } = props;
    const count = productSelected ? null : '5';
    const SortContent = productSelected ? () => <a/> : ResultSort;
    return(
     <div className="result-panel">
         <ResultInfo count = { count} {...props}/><SortContent {...props} />
    </div>
    )
}
export default ResultPanel