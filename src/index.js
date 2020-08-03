import React from 'react';
import ReactDom from 'react-dom';
import { createStore, applyMiddleware } from 'redux';
import rootReducer from './reducers/index';
import thunkMiddleware from 'redux-thunk';
import { Provider } from 'react-redux'
import { createLogger } from 'redux-logger';

const loggerMiddleware = createLogger();

const store = createStore(
    rootReducer,
    applyMiddleware(
        thunkMiddleware,
        loggerMiddleware
    )
);

ReactDom.render(
    <Provider store={store}>
        <App />                 
    </Provider>,
    document.getElementById('root')
);