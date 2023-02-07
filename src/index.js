import React from 'react';
import ReactDOM from 'react-dom/client';
import { Provider } from 'react-redux';
import './index.css';
import App from './app';
import reduxStore from "./store/redux";

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
    <Provider store={reduxStore}>
        <App/>
    </Provider>
);
