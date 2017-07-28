import * as actions from '../../actions/actions';
import Types from '../../actions/Types';

describe('actions test suite', () => {
    it('should set search text', () => {
        const searchText = 'weeaboo';
        expect(actions.setSearchText(searchText)).toEqual({
            type: Types.SET_SEARCH_TEXT,
            searchText,
        });
    });

    it('should generate add todo', () => {
        const text = 'be happy';
        expect(actions.addTodo({ text })).toMatchObject({
            type: Types.ADD_TODO,
            todo: { text },
        });
    });

    it('should generate add todoS', () => {
        const todos = ['don\'t worry', 'be happy'];
        expect(actions.addTodos(todos)).toEqual({
            type: Types.ADD_TODOS,
            todos,
        });
    });

    it('should generate toggle show completed', () => {
        expect(actions.toggleSearchAll()).toEqual({
            type: Types.TOGGLE_SEARCH_ALL,
        });
    });

});