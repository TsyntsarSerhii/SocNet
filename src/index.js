import React from 'react';
import ReactDOM from 'react-dom';
import { BrowserRouter } from "react-router-dom";
import { Provider } from "react-redux"

import App from './App';
import store from "./state/redux-store";

import './index.scss';


ReactDOM.render(
        <BrowserRouter basename={process.env.PUBLIC_URL}>
                <Provider store={store}>
                        <App />
                </Provider>
        </BrowserRouter>, document.getElementById('root'));





