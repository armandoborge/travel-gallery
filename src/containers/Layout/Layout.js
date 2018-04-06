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
import countriesNames from './Countries';

//
// styles import
import styles from './Layout.css'

let countries = process.env.REACT_APP_FOLDER_STRUCTURE;

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
        let p = 0;

        //
        // add countries
        Object.keys(countries).map((c) => {
            countriesList[c] = {
                index: c,
                name: countriesNames[0][Object.keys(countries[c])[0]],
                link: Object.keys(countries[c])[0],
                albums: []
            };
            //
            // add albums
            for (a = 0; a < countries[c][countriesList[c].link].length; a++) {
                countriesList[c].albums[a] = {
                    index: a,
                    name: countriesNames[0][Object.keys(countries[c][countriesList[c].link][a])[0]],
                    link: Object.keys(countries[c][countriesList[c].link][a])[0],
                    photos: countries[c][countriesList[c].link][a][Object.keys(countries[c][countriesList[c].link][a])[0]]
                };
                //
                // add photos
                for (p = 0; p < countriesList[c].albums[a].photos.length; p++) {
                    countriesList[c].albums[a].photos[p] = '/photos/' + countriesList[c].link + '/' + countriesList[c].albums[a].link + '/' + countriesList[c].albums[a].photos[p]
                }
            }

            return false;
        });

        this.setState({
            countriesList: countriesList
        })
    }

    sidebarToggleHandler = () => {
        this.setState((prevState) => {
            return {showSidebar: !prevState.showSidebar}
        });
    };

    sidebarCloseHandler = () => {
        if (window.innerWidth < 670) {
            this.setState({ showSidebar: false });
        }
    };

    render() {
        const mainClasses = this.state.showSidebar ? [styles.Main, styles.showSidebar] : [styles.Main];
        return (
            <Fragment>
                <Sidebar
                    toggled={this.sidebarToggleHandler}
                    showSidebar={this.state.showSidebar}>
                    <Avatar closed={this.sidebarCloseHandler} />
                    <Navigation countries={this.state.countriesList} closed={this.sidebarCloseHandler} />
                </Sidebar>
                <main className={mainClasses.join(' ')}>
                    <Switch>
                        <Route path="/home" exact render={() => <Home showSidebar={this.state.showSidebar} />} />
                        <Route path="/gallery/:country/:album/:photo?" render={() => <Gallery countries={this.state.countriesList} showSidebar={this.state.showSidebar} />} />
                        <Redirect to="/home" />
                    </Switch>
                </main>
            </Fragment>
        )
    }
}

export default withRouter(Layout);