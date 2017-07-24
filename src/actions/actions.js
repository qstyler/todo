import Types from './Types';

export const setSearchText = (searchText) => ({
    type: Types.SET_SEARCH_TEXT,
    searchText
});

export const addTodo = (text) => ({
    type: Types.ADD_TODO,
    text
});

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