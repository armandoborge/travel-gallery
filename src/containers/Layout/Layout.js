//
// from node_modules
import React, { Component } from 'react';
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
// styles import
import styles from './Layout.css'


class Layout extends Component {
    state = {
        showSidebar: window.innerWidth >= 670
    };

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
        const offlineBannerClasses = this.state.showSidebar ? [styles.connectionMessage, styles.showSidebar] : [styles.connectionMessage];
        const offlineMessage = !navigator.onLine ? (
            <div className={offlineBannerClasses.join(' ')}>
                <p>Connection lost... offline mode activated!</p>
            </div>
        ) : null;

        return (
            <div className={[styles['theme_' + process.env.REACT_APP_THEME] + ' ' + styles.LayoutContainer]}>
                {offlineMessage}
                <Sidebar
                    toggled={this.sidebarToggleHandler}
                    showSidebar={this.state.showSidebar}>
                    <Avatar closed={this.sidebarCloseHandler} />
                    <Navigation countries={process.env.REACT_APP_FOLDER_STRUCTURE} closed={this.sidebarCloseHandler} />
                </Sidebar>
                <main className={mainClasses.join(' ')}>
                    <Switch>
                        <Route path="/" exact render={() => <Home showSidebar={this.state.showSidebar} />} />
                        <Route path="/gallery/:country/:album/:photo?" render={() => <Gallery showSidebar={this.state.showSidebar} />} />
                        <Redirect to="/" />
                    </Switch>
                </main>
            </div>
        )
    }
}

export default withRouter(Layout);