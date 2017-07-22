const setTodos = (todos) => {
    if (Array.isArray(todos)) {
        localStorage.setItem('todos', JSON.stringify(todos));
    }
};

const getTodos = () => {
    const todos = JSON.parse(localStorage.getItem('todos') || '[]');
    return Array.isArray(todos) ? todos : [];
};

export default { setTodos, getTodos };

