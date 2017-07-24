import Types from '../actions/Types';
import uuid from 'uuid/v4';
import moment from 'moment';

export const searchText = (state = '', action) => {
    switch (action.type) {
        case Types.SET_SEARCH_TEXT:
            return action.searchText;
        default:
            return state;
    }
};

export const searchAll = (state = false, action) => {
    switch (action.type) {
        case Types.TOGGLE_SEARCH_ALL:
            return !state;
        default:
            return state;
    }
};

export const todos = (state = [], action) => {
    switch (action.type) {
        case Types.ADD_TODO:
            return [
                ...state,
                {
                    id: uuid(),
                    completed: false,
                    text: action.text,
                    createdAt: moment().unix(),
                    completedAt: undefined,
                }
            ];
        case Types.TOGGLE_TODO:
            return state.map(todo => ({
                    ...todo,
                    completed: !!(todo.id === action.id ^ todo.completed),
                completedAt: todo.id === action.id
                    ? todo.completed ? undefined : moment().unix()
                    : todo.completed,
                })
            );
        default:
            return state;
    }
};