import Types from './Types';
import firebase, { firebaseRef, githubProvider } from '../firebase';
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

export const startAddTodo = (text) => (dispatch, getState) => {
    const todo = newTodo(text);

    const uid = getState().auth.uid;

    return firebaseRef
        .child(`users/${uid}/todos`)
        .push(todo);
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

export const startSetTodoCompleted = (id, completed) => async (dispatch, getState) => {

    const uid = getState().auth.uid;

    const todoRef = firebaseRef
        .child(`users/${uid}/todos/${id}`);

    const exists = await todoRef
        .once('value')
        .then((snapshot) => snapshot.exists());

    if (exists) {
        const updates = {
            completed,
            completedAt: completed ? moment().unix() : null,
        };

        return todoRef.update(updates)
    } else {
        return dispatch(todoNotFound(id));
    }
};

export const startLogin = () => () => {
    return firebase
        .auth()
        .signInWithPopup(githubProvider)
};

export const startLogout = () => () => {
    return firebase
        .auth()
        .signOut()
};

export const startLoading = () => ({ type: Types.START_LOADING });

export const stopLoading = () => ({ type: Types.STOP_LOADING });

export const authorize = (auth) => ({
    type: Types.AUTHORIZE,
    auth
});

export const unauthorize = () => ({
    type: Types.UNAUTHORIZE,
});