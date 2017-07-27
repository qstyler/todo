import Types from './Types';
import { firebaseRef } from '../firebase';
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

export const startAddTodos = () => (dispatch) => {
    const todoRef = firebaseRef.child('todos');

    dispatch(startLoading());

    return todoRef
        .once('value')
        .then((snapshot) => {
            if (snapshot.exists()) {
                const value = snapshot.val();
                const items = Object.values(value);
                const ids = Object.keys(value);

                const todos = items.map((item, i) => ({ id: ids[i], ...item }));

                dispatch(addTodos(todos));
                setTimeout(() => dispatch(stopLoading()))
            }
        });
};

export const addTodos = (todos) => ({
    type: Types.ADD_TODOS,
    todos
});

export const toggleSearchAll = () => ({
    type: Types.TOGGLE_SEARCH_ALL,
});

export const updateTodo = (id, updates) => ({
    type: Types.UPDATE_TODO,
    id,
    updates,
});

export const todoNotFound = (id) => ({
    type: Types.TODO_NOT_FOUND,
    id
});

export const startSetTodoCompleted = (id, completed) => async (dispatch) => {
    const todoRef = firebaseRef.child(`todos/${id}`);

    const exists = await todoRef
        .once('value')
        .then((snapshot) => snapshot.exists());

    if (exists) {
        const updates = {
            completed,
            completedAt: completed ? moment().unix() : null,
        };

        return await todoRef
            .update(updates)
            .then(() => dispatch(updateTodo(id, { completed })))
    } else {
        return dispatch(todoNotFound(id));
    }
};

export const startLoading = () => ({ type: Types.START_LOADING });
export const stopLoading = () => ({ type: Types.STOP_LOADING });