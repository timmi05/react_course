import React from 'react';
import HeaderContainer from './HeaderContainer';
import ResultContainer from './result/ResultContainer';
import AppLabel from './component/AppLabel';
import './app_container.css';

const AppContainer = () => {
     const productSelected = true;
     const genre = productSelected ? 'Drama' : null;
     return(
         <div className="app-container">
             <HeaderContainer
             productSelected = { productSelected }
             />
             <ResultContainer
             productSelected = { productSelected }
             genre = { genre }
             />
             <div className="app-container-lower-panel">
                < AppLabel />
             </div>
        </div>
    )
}

export default AppContainer