import configureMockStore from 'redux-mock-store';
import thunk from 'redux-thunk';

import * as actions from '../../actions/actions';

import firebase, { firebaseRef } from '../../firebase';
import { initialize } from '../../firebase/initialize';

const createMockStore = configureMockStore([thunk]);

describe('firebase actions tests', () => {

    const clearDatabase = function (done) {
        firebaseRef.child('users').remove()
            .then(() => {
                firebaseRef.child('users').push();
            })
            .then(done)
            .catch((err) => done.fail(err))
    };

    beforeAll((done) => {
        clearDatabase(done);
    });

    afterEach((done) => {
        clearDatabase(done);
    });

    afterAll(() => {
        firebase.database().goOffline();
    });


    it('should should create todo and catch child_added', async (done) => {

        const uid = 1;
        const store = createMockStore({
            auth: { uid }
        });

        const text = Math.random().toString();

        const todosRef = firebaseRef
            .child(`users/${uid}/todos`);

        todosRef
            .limitToLast(1)
            .on('child_added', (snapshot) => {
                try {
                    const updates = snapshot.val();
                    expect(updates).toMatchObject({
                        text
                    });
                    done();
                } catch (error) {
                    done.fail(error);
                }
                todosRef.off();
            });

        store
            .dispatch(actions.startAddTodo(text))
            .catch((e) => done.fail(e));
    });

    it('should dispatch ADD_TODOS action', (done) => {
        const uid = 1;
        const store = createMockStore({
            auth: { uid }
        });

        store
            .dispatch(initialize())
            .then(() => {
                const storeActions = store.getActions();
                expect(storeActions).toContainEqual(
                    expect.objectContaining(
                        actions.addTodos(
                            expect.any(Array)
                        )
                    )
                );
                done();
            })
            .catch((err) => done.fail(err));
    });


    it('should call TODO_NOT_FOUND action on invalid id', (done) => {
        const uid = 1;
        const store = createMockStore({
            auth: { uid }
        });
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

});
