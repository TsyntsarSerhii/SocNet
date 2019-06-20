import './index.css';
import store from "./state/redux-store";
import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import { BrowserRouter } from "react-router-dom";
import { Provider } from "./StoreContext"

let rerenderAll = (state) => {
        ReactDOM.render(
                <BrowserRouter>
                        <Provider store={store}>
                                <App />
                        </Provider>
                </BrowserRouter>,
                document.getElementById('root'));
}

rerenderAll(store.getState());
store.subscribe(() => {
        let state = store.getState();
        rerenderAll(state);
});


