import React from 'react';
import { HeaderContainer } from './HeaderContainer';
import { Result } from './result/Result';
import { AppLabel } from './component/AppLabel';
import './AppContainer.css';

export const AppContainer = props => {
    const { productSelected, genre, data } = props;
    return(
        <div className='app-container'>
             <HeaderContainer
             productSelected = { productSelected }
             />
             <Result
             productSelected = { productSelected }
             genre = { genre }
             data = { data }
             />
             <div className='app-container-lower-panel'>
                < AppLabel />
             </div>
        </div>
    )
};
