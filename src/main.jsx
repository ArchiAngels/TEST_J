import React from 'react';
import ReactDOM from 'react-dom';
import { Provider } from 'react-redux'

import App from './template/App.jsx';
import store from './app/store.js'
import './app/main.scss';

ReactDOM.render(
    <Provider store={store}>
        <App />  
    </Provider>,
    document.getElementById('root')
)