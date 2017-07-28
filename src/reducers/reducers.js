import Types from '../actions/Types';

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
                action.todo
            ];
        case Types.ADD_TODOS:
            return [
                ...state,
                ...action.todos,
            ];
        case Types.UPDATE_TODO:
            return state
                .map(todo => ({
                        ...todo,
                        ...(todo.id === action.id ? action.updates : {}),
                    })
                );
        case Types.TODO_NOT_FOUND:
            return state.filter((todo) => todo.id !== action.id);
        default:
            return state;
    }
};

export const loading = (state = false, action) => {
    switch (action.type) {
        case Types.START_LOADING:
            return true;
        case Types.STOP_LOADING:
            return false;
        default:
            return state;
    }
};

export const authorized = (state = 'undefined', action) => {
    switch (action.type) {
        case Types.AUTHORIZED:
            return action.authorized;
        default:
            return state;
    }
};