import React from 'react';
import ReactDOM from 'react-dom';
import {Provider} from 'react-redux'
import configureStore from './shared/store/configureStore'
import App from './containers/app/app';

import './style.scss';


const store = configureStore();

ReactDOM.render(
    <Provider store={store}>
        <App />
    </Provider>, document.getElementById('app'));