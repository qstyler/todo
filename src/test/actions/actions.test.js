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

    describe('firebase actions tests', () => {

        beforeEach((done) => {

        });

        afterEach((done) => {

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

        it('should dispatch ADD_TODOS action', (done) => {
            const store = createMockStore();

            store
                .dispatch(actions.startAddTodos())
                .then(() => {
                    const storeActions = store.getActions();
                    expect(storeActions).toHaveLength(1);
                    expect(storeActions[0].type).toBe(Types.ADD_TODOS);
                    done();
                })
                .catch((err) => done.fail(err));
        });


        it('should call TODO_NOT_FOUND action on invalid id', (done) => {
            const store = createMockStore();
            const id = Math.ceil(999 * Math.random()).toString();

            return store
                .dispatch(actions.startSetTodoCompleted(id, true))
                .then(() => {
                    const storeActions = store.getActions();
                    expect(storeActions).toHaveLength(1);
                    expect(storeActions[0]).toMatchObject(actions.todoNotFound(id));
                    done();
                })
                .catch((e) => done.fail(e));
        });

        it('should call UPDATE_TODO action', async (done) => {
            const store = createMockStore({});
            const text = 'weeaboo 2';
            const completed = true;

            const id = await store
                .dispatch(actions.startAddTodo(text))
                .then(() => store.getActions()[0].todo.id);

            return store
                .dispatch(actions.startSetTodoCompleted(id, completed))
                .then(() => {
                    const storeActions = store.getActions();
                    expect(storeActions).toHaveLength(2);
                    expect(storeActions[1]).toMatchObject(actions.updateTodo(id, { completed }));
                    done();
                }).catch((e) => done.fail(e));
        });

    });


});