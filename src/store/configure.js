import { combineReducers, createStore, compose, applyMiddleware } from 'redux';
import { devToolsEnhancer } from 'redux-devtools-extension';
import thunk from 'redux-thunk';

import * as reducers from '../reducers/reducers';
import { addTodos as addTodosAction } from '../actions/actions';
import TodoAPI from '../api/TodoAPI';


export const configure = () => {
    const reducer = combineReducers(reducers);

    const store = createStore(reducer, compose(
        applyMiddleware(thunk),
        devToolsEnhancer(),
    ));

    store.subscribe(() => {
        const state = store.getState();

        TodoAPI.setTodos(state.todos);
    });

    const initialTodos = TodoAPI.getTodos();

    store.dispatch(addTodosAction(initialTodos));

    return store;
};