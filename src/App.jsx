import React from 'react';
import {Provider} from 'react-redux';
import {applyMiddleware, createStore} from 'redux';
import {composeWithDevTools} from 'redux-devtools-extension';
import thunk from 'redux-thunk';
import {reducer} from './store/reducers/raducer.js';
import {AppContainer} from './AppContainer';
import {ErrorBoundary} from './error/ErrorBoundary';
import './App.css';
import {persistReducer, persistStore} from 'redux-persist'
import storage from 'redux-persist/lib/storage'
import {PersistGate} from 'redux-persist/integration/react'

const persistConfig = {
    key: 'root',
    storage,
};

const persistedReducer = persistReducer(persistConfig, reducer);

const store = createStore(persistedReducer, composeWithDevTools(applyMiddleware(thunk)));

const persistor = persistStore(store);

export const App = () =>
    <div className="app">
        <ErrorBoundary>
            <Provider store={store}>
                <PersistGate loading={null} persistor={persistor}>
                    <AppContainer/>
                </PersistGate>
            </Provider>
        </ErrorBoundary>
    </div>;
