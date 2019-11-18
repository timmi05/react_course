import React from 'react';
import ResultInfo from './ResultInfo';
import ResultSort from './ResultSort';
import './result_panel.css'

const ResultPanel = props => {
    const { productSelected, genre, data } = props;
    return(
     <div className='result-panel'>
         <ResultInfo
         productSelected = {productSelected}
         genre = { genre }
         data = { data }
         />
         < ResultSort
         productSelected = { productSelected }
         />
    </div>
    )
};
export default ResultPanel