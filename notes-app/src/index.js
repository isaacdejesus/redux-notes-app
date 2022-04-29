import React from 'react';
import ReactDOM from 'react-dom/client';
import App from './App';
import { createStore } from 'redux'
import { Provider } from 'react-redux'
import { configureStore } from '@reduxjs/toolkit'
import filterReducer from './reducers/filterReducer.js'
import noteService from './services/notes.js'
import noteReducer, {setNotes} from './reducers/noteReducer.js'
const store = configureStore({
    reducer: {
        notes: noteReducer,
        filter: filterReducer
    }
})
noteService.getAll().then(notes => 
    store.dispatch(setNotes(notes))
)
const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
    <Provider store={store}>
    <App />
    </Provider>
);

