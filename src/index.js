import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import state from './state/state'

ReactDOM.render(<App state={state} />, document.getElementById('root'));


