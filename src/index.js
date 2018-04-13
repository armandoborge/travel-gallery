//
// from node_modules
import React from 'react';
import ReactDOM from 'react-dom';
import { BrowserRouter } from 'react-router-dom';

//
// Layout
import Layout from './containers/Layout/Layout'

//
// service worker
import registerServiceWorker from './registerServiceWorker';

const app = (
    <BrowserRouter>
        <Layout />
    </BrowserRouter>
);

//
// render app
ReactDOM.render(app, document.getElementById('root'));

//
// PWA register service worker
registerServiceWorker();
