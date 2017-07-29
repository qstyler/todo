import { firebaseRef } from './';
import {
    startLoading,
    stopLoading,
    addTodos,
    addTodo,
    updateTodo,
} from '../actions/actions';

export const initialize = () => (dispatch, getState) => {
    let newItems = false;

    const uid = getState().auth.uid;
    const todoRef = firebaseRef.child(`users/${uid}/todos`);

    dispatch(startLoading());

    todoRef.on('child_changed', (snapshot) => {
        const updates = snapshot.val();
        const id = snapshot.key;

        dispatch(updateTodo(id, updates));
    });

    todoRef.limitToLast(1).on('child_added', (snapshot) => {
        if (!newItems) return;
        const updates = snapshot.val();
        const id = snapshot.key;

        dispatch(addTodo({ id, ...updates }));
    });

    const update = (snapshot) => {
        const value = snapshot.val() || {};
        const items = Object.values(value);
        const ids = Object.keys(value);

        const todos = items.map((item, i) => ({ id: ids[i], ...item }));

        dispatch(addTodos(todos));
        setTimeout(() => dispatch(stopLoading()));

        newItems = true;
    };

    return todoRef.once('value').then(update);
};
