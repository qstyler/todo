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
        expect(actions.addTodo(text)).toEqual({
            type: Types.ADD_TODO,
            text,
        });
    });

    it('should generate toggle show completed', () => {
        expect(actions.toggleSearchAll()).toEqual({
            type: Types.TOGGLE_SEARCH_ALL,
        });
    });

    it('should generate toggle todo', () => {
        const id = 1337;
        expect(actions.toggleTodo(id)).toEqual({
            type: Types.TOGGLE_TODO,
            id
        });
    });
});