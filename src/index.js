import './index.css';
import state from './state/state';
import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import { addPost, updateNewPostText, subscriber } from './state/state';


let rerenderAll = () => {
    ReactDOM.render(<App
        state={state}
        addPost={addPost}
        updateNewPostText={updateNewPostText} />,
        document.getElementById('root'));
}

rerenderAll(state);
subscriber(rerenderAll);


 