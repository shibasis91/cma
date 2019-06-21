import React from 'react';
import ReactDOM from 'react-dom';
import App from './src/components/App';
import { Provider } from 'react-redux';

import "./styles/style";
import store from './src/store';

ReactDOM.render(
    <Provider store={store}>
        <App />
    </Provider>, 
    document.getElementById('root')
);