//
// from node_modules
import React from 'react';
import ReactDOM from 'react-dom';
import { BrowserRouter } from 'react-router-dom';

//
// load app and basic styles
import App from './App';
import './index.css'

const app = (
    <BrowserRouter>
        <App />
    </BrowserRouter>
);

//
// render app
ReactDOM.render(app, document.getElementById('root'));
