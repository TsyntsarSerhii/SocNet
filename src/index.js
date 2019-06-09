import './index.css';
import store from './state/state';
import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';


let rerenderAll = (state) => {
        ReactDOM.render(<App
                state={state}
                dispatch={store.dispatch.bind(store)} />,
                document.getElementById('root'));
}

rerenderAll(store.getState());
store.subscriber(rerenderAll);


