import React, { Component, Fragment } from 'react';
import { Route, Switch, withRouter, Redirect } from 'react-router-dom';

//
// import containers
import Layout from './containers/Layout/Layout'

//
// import navigation sections
import Gallery from './components/Gallery/Gallery'
import Map from './components/Map/Map'

class App extends Component {
    render() {
        return (
            <Fragment>
                <Layout>
                    <Switch>
                        <Route path="/map" exact component={Map} />
                        <Route path="/gallery" component={Gallery} />
                        <Redirect to="/map" />
                    </Switch>
                </Layout>
            </Fragment>
        );
    }
}

export default withRouter(App);
