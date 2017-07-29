import * as reducers from '../../reducers/reducers';
import Types from '../../actions/Types';
import df from 'deep-freeze';

describe('reducers test suite', () => {
    describe('search text reducer', () => {
        it('should set search text', () => {
            const searchText = 'weeaboo';
            const action = {
                type: Types.SET_SEARCH_TEXT,
                searchText,
            };

            expect(reducers.searchText(df(''), df(action))).toBe(searchText);
        });

        it('should NOT set search text', () => {
            const initialText = 'definitely not a weeaboo';
            const searchText = 'weeaboo';
            const action = {
                type: Math.random().toString(),
                searchText,
            };

            expect(reducers.searchText(df(initialText), df(action))).toBe(initialText);
        });
    });

    describe('search all reducer suite', () => {
        it('should toggle search all', () => {
            const action = {
                type: Types.TOGGLE_SEARCH_ALL,
            };

            expect(reducers.searchAll(df(false), df(action))).toBeTruthy();
        });

        it('should not toggle search all', () => {
            const action = {
                type: Math.random().toString(),
            };

            expect(reducers.searchAll(df(false), df(action))).toBeFalsy();
        });
    });

    describe('todo reducer', () => {
        it('should add new todo', () => {
            const text = 'weeaboo';
            const action = {
                type: Types.ADD_TODO,
                todo: { text },
            };

            const actual = reducers.todos(df([]), df(action));

            expect(actual).toHaveLength(1);
            expect(actual[0].text).toBe(text);
        });

        it('should update todo', () => {
            let id = 1337;

            const todos = [{
                id,
                completed: true,
            }];

            const action = {
                type: Types.UPDATE_TODO,
                updates: { completed: false }
            };

            const res = reducers.todos(df(todos), df({ id, ...action }));

            expect(res[0].completed).toBeFalsy();
            expect(res[0].completedAt).toBeUndefined();

            id += 1;
            const res2 = reducers.todos(df(todos), df({ id, ...action }));
            expect(res2[0].completed).toBeTruthy();

        });
    });

    it('should add new todo_S_', () => {
        const todos = [
            { text: 'don\'t worry' },
            { text: 'be happy' },
        ];

        const action = {
            type: Types.ADD_TODOS,
            todos,
        };

        const res = reducers.todos(df([]), df(action));

        expect(res).toHaveLength(2);

        expect(res[0]).toHaveProperty('text', todos[0].text);
        expect(res[1]).toHaveProperty('text', todos[1].text);

    });

    it('should add new todo_S_', () => {
        const todos = [
            { id: 1, text: 'don\'t worry' },
            { id: 2, text: 'be happy' },
        ];

        const action = {
            type: Types.TODO_NOT_FOUND,
            id: 1,
        };

        const res = reducers.todos(df(todos), df(action));

        expect(res).toHaveLength(1);
        expect(res[0]).toMatchObject(todos[1]);

    });

    it('should just start or stop loading and no switching', () => {
        expect(reducers.loading(true, { type: Types.START_LOADING })).toBeTruthy();
        expect(reducers.loading(false, { type: Types.START_LOADING })).toBeTruthy();

        expect(reducers.loading(true, { type: Types.STOP_LOADING })).toBeFalsy();
        expect(reducers.loading(false, { type: Types.STOP_LOADING })).toBeFalsy();

        expect(reducers.loading(true, { type: 'whatever' })).toBeTruthy();
        expect(reducers.loading(false, { type: 'whatever' })).toBeFalsy();
    });

    describe('auth reducer tests suite', () => {

        it('should return waiting state on empty auth', () => {
            expect(reducers.auth(undefined, { type: 'whatever' })).toMatchObject({ waiting: true });
        });

        it('should just return the state', () => {
            expect(reducers.auth(undefined, { type: 'whatever' })).toMatchObject({ waiting: true });
        });

    });

});