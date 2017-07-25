import Types from './Types';
import { firebaseRef } from '../firebase/index';
import moment from 'moment';

const newTodo = (text) => ({
    completed: false,
    text: text,
    createdAt: moment().unix(),
    completedAt: null,
});

export const setSearchText = (searchText) => ({
    type: Types.SET_SEARCH_TEXT,
    searchText
});

export const addTodo = (todo) => ({
    type: Types.ADD_TODO,
    todo
});

export const startAddTodo = (text) => (dispatch) => {
    const todo = newTodo(text);
    const todoRef = firebaseRef.child('todos').push(todo);

    return todoRef.then(() => {
        dispatch(addTodo({
            id: todoRef.key,
            ...todo,
        }))
    });
};

export const addTodos = (todos) => ({
    type: Types.ADD_TODOS,
    todos
});

export const toggleSearchAll = () => ({
    type: Types.TOGGLE_SEARCH_ALL,
});

export const toggleTodo = (id) => ({
    type: Types.TOGGLE_TODO,
    id,
});