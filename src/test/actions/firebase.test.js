import configureMockStore from 'redux-mock-store';
import thunk from 'redux-thunk';
import { EventEmitter } from 'events';

import * as actions from '../../actions/actions';

import { firebaseRef } from '../../firebase';
import { initialize } from '../../firebase/initialize';

const createMockStore = configureMockStore([thunk]);

describe('firebase actions tests', () => {

    it('should not be happening omg', (done) => {
        const emitter = new EventEmitter;

        emitter.on('whatever', () => {
            try {
                expect({ a: 1 }).toMatchObject({ a: 1 });
                done();
            } catch (e) {
                done.fail(e);
            }
        });

        emitter.emit('whatever');
    });

    const clearDatabase = function (done) {
        firebaseRef.child('todos').remove()
            .then(() => {
                firebaseRef.child('todos').push();
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


    it('should should create todo and catch child_added', async (done) => {

        const store = createMockStore({});
        const text = Math.random().toString();

        firebaseRef
            .child('todos')
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
                firebaseRef.child('todos').off();
            });

        store
            .dispatch(actions.startAddTodo(text))
            .catch((e) => done.fail(e));
    });

    it('should dispatch ADD_TODOS action', (done) => {
        const store = createMockStore();

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

});
