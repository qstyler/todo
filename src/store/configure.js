import { combineReducers, createStore } from 'redux';
import { devToolsEnhancer } from 'redux-devtools-extension';

import * as reducers from '../reducers/reducers';
import { addTodos as addTodosAction } from '../actions/actions';
import TodoAPI from '../api/TodoAPI';


export const configure = () => {
    const reducer = combineReducers(reducers);

    const store = createStore(reducer, devToolsEnhancer());

    store.subscribe(() => {
        const state = store.getState();

        console.log('setting todos:', state.todos);
        TodoAPI.setTodos(state.todos);
    });

    const initialTodos = TodoAPI.getTodos();

    store.dispatch(addTodosAction(initialTodos));

    return store;
};