import { combineReducers, createStore } from 'redux';
import { devToolsEnhancer } from 'redux-devtools-extension';
import * as reducers from '../reducers/reducers';

export const configure = () => {
    const reducer = combineReducers(reducers);

    return createStore(reducer, devToolsEnhancer());
};