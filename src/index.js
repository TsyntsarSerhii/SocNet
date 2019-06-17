import './index.css';
import store from "./state/redux-store";
import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import { BrowserRouter } from "react-router-dom";


let rerenderAll = (state) => {
        ReactDOM.render(
                <BrowserRouter>
                        <App
                                state={state}
                                dispatch={store.dispatch.bind(store)}
                                store={store} />
                </BrowserRouter>,
                document.getElementById('root'));
}

rerenderAll(store.getState());
store.subscribe (() => {
        let state = store.getState();
        rerenderAll(state);
});


