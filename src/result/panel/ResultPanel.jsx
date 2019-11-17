import React from 'react';
import ResultInfo from './ResultInfo';
import ResultSort from './ResultSort';
import './result_panel.css'

const ResultPanel = (props) => {
    const { productSelected } = props;
    const count = productSelected ? null : props.data.length;
    const SortContent = productSelected ? () => <a/> : ResultSort;
    return(
     <div className='result-panel'>
         <ResultInfo
         count = { count}
         {...props}/>
         <SortContent
         {...props}
         />
    </div>
    )
};
export default ResultPanel