import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';

let postData = [
    { id: 1, message: 'WTF?!' },
    { id: 2, message: 'It`s new post!' }
]

let dialogsData = [
    { id: 1, name: 'Serh' },
    { id: 2, name: 'And' },
    { id: 3, name: 'Ih' },
    { id: 4, name: 'Pav' },
    { id: 5, name: 'Ole' }
]

let messagesData = [
    { id: 1, message: 'Hey' },
    { id: 2, message: 'man' },
    { id: 3, message: 'How are U?' },
    { id: 4, message: 'Duh...' }
]

ReactDOM.render(<App postData={postData} dialogsData={dialogsData} messagesData={messagesData} />, document.getElementById('root'));


