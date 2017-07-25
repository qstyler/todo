import firebase from 'firebase';

try {
    const config = {
        apiKey: 'AIzaSyAnr2X_oy9yILUdlcMbzaA-384rLCmHc0Q',
        authDomain: 'todo-a5dc0.firebaseapp.com',
        databaseURL: 'https://todo-a5dc0.firebaseio.com',
        projectId: 'todo-a5dc0',
        storageBucket: 'todo-a5dc0.appspot.com',
        messagingSenderId: '942866682609',
    };

    firebase.initializeApp(config);
} catch (e) {}

export const firebaseRef = firebase.database().ref();
export default firebase;