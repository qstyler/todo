import { combineReducers, createStore, compose, applyMiddleware } from 'redux';
import { devToolsEnhancer } from 'redux-devtools-extension';
import thunk from 'redux-thunk';

import * as reducers from '../reducers/reducers';


export const configure = () => {
    const reducer = combineReducers(reducers);

    return createStore(reducer, compose(
        applyMiddleware(thunk),
        devToolsEnhancer(),
    ));
};