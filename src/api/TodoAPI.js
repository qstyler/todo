const setTodos = (todos) => {
    if (Array.isArray(todos)) {
        localStorage.setItem('todos', JSON.stringify(todos));
    }
};

const getTodos = () => JSON.parse(localStorage.getItem('todos') || '[]');

export default { setTodos, getTodos };

