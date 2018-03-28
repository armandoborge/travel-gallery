import React, { Component, Fragment } from 'react';
import { Route, Switch, withRouter, Redirect } from 'react-router-dom';

//
// import containers
import Layout from './containers/Layout/Layout'

//
// import navigation sections
import Gallery from './components/Gallery/Gallery'
import Home from './components/Home/Home'

class App extends Component {
    render() {
        return (
            <Fragment>
                <Layout>
                    <Switch>
                        <Route path="/home" exact component={Home} />
                        <Route path="/gallery" component={Gallery} />
                        <Redirect to="/home" />
                    </Switch>
                </Layout>
            </Fragment>
        );
    }
}

export default withRouter(App);
