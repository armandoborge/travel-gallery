//
// from node_modules
import React from 'react';
import ReactDOM from 'react-dom';
import { BrowserRouter } from 'react-router-dom';

//
// Layout
import Layout from './containers/Layout/Layout'

const app = (
    <BrowserRouter>
        <Layout />
    </BrowserRouter>
);

//
// render app
ReactDOM.render(app, document.getElementById('root'));
