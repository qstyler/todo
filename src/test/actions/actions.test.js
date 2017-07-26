import configureMockStore from 'redux-mock-store';
import thunk from 'redux-thunk';

import * as actions from '../../actions/actions';
import Types from '../../actions/Types';


const createMockStore = configureMockStore([thunk]);

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

    it('should should create todo and dispatch add todo', (done) => {

        const store = createMockStore({});
        const text = 'weeaboo';

        return store
            .dispatch(actions.startAddTodo(text))
            .then(() => {
                const storeActions = store.getActions();
                expect(storeActions).toHaveLength(1);
                expect(storeActions[0]).toMatchObject(actions.addTodo({ text }));
                done();
            })
            .catch((e) => done.fail(e));
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

    it('should generate toggle todo', () => {
        const id = 1337;
        expect(actions.toggleTodo(id)).toEqual({
            type: Types.TOGGLE_TODO,
            id
        });
    });


});