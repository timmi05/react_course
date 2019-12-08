import React from 'react';
import HeaderContainer from './HeaderContainer';
import Result from './result/Result';
import {AppLabel} from './component/AppLabel';
import './AppContainer.css';

export const AppContainer = () =>
    <div className='app-container'>
        <HeaderContainer/>
        <Result/>
        <div className='app-container-lower-panel'>
            < AppLabel/>
        </div>
    </div>;