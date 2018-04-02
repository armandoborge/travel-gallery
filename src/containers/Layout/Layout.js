//
// from node_modules
import React, { Component, Fragment } from 'react';
import { Route, Switch, withRouter, Redirect } from 'react-router-dom';


//
// import navigation sections
import Gallery from '../../components/Gallery/Gallery'
import Home from '../../components/Home/Home'

//
// components import
import Sidebar from '../../components/UI/Sidebar/Sidebar';
import Avatar from '../../components/UI/Avatar/Avatar';
import Navigation from '../../components/UI/Navigation/Navigation';

//
// import countries
import countries from './Countries';

//
// styles import
import styles from './Layout.css'


class Layout extends Component {
    state = {
        countriesList: [],
        showSidebar: window.innerWidth >= 670
    };

    componentWillMount() {
        //
        // prepare the country data
        let countriesList = [];
        let a = 0;

        for (let c = 0; c < countries.length; c++) {
            //
            // add name
            countriesList[c] = {
                index: c,
                name: countries[c].name,
                link: countries[c].link,
                albums: []
            };
            //
            // add albums
            for (a = 0; a < countries[c].albums.length; a++) {
                countriesList[c].albums[a] = {
                    index: a,
                    name: countries[c].albums[a].name,
                    link: countries[c].albums[a].link
                }
            }
        }

        this.setState({
            countriesList: countriesList
        })
    }

    sidebarToggleHandler = () => {
        this.setState((prevState) => {
            return {showSidebar: !prevState.showSidebar}
        });
    };

    render() {
        const mainClasses = this.state.showSidebar ? [styles.Main, styles.showSidebar] : [styles.Main];
        return (
            <Fragment>
                <Sidebar
                    toggled={this.sidebarToggleHandler}
                    showSidebar={this.state.showSidebar}>
                    <Avatar />
                    <Navigation countries={this.state.countriesList} />
                </Sidebar>
                <main className={mainClasses.join(' ')}>
                    <Switch>
                        <Route path="/home" exact component={Home} />
                        <Route path="/gallery/:country/:album/:photo?" render={() => <Gallery countries={this.state.countriesList} />} />
                        <Redirect to="/home" />
                    </Switch>
                </main>
            </Fragment>
        )
    }
}

export default withRouter(Layout);