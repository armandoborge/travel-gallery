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

//
// creating icons library
import fontawesome from '@fortawesome/fontawesome';
import faAngleLeft from '@fortawesome/fontawesome-free-solid/faAngleLeft';
import faAngleRigth from '@fortawesome/fontawesome-free-solid/faAngleRight';
import faPlane from '@fortawesome/fontawesome-free-solid/faPlane';
import faCode from '@fortawesome/fontawesome-free-solid/faCode';
import faCamera from '@fortawesome/fontawesome-free-solid/faCamera';
import faCodeBranch from '@fortawesome/fontawesome-free-solid/faCodeBranch';
import faHeart from '@fortawesome/fontawesome-free-solid/faHeart';
import faMeh from '@fortawesome/fontawesome-free-solid/faMeh';
fontawesome.library.add(faAngleLeft, faAngleRigth, faPlane, faCode, faCamera, faCodeBranch, faHeart, faMeh);

//
// CSS fonts
require('typeface-raleway');

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
