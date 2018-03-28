//
// from node_modules
import React, { Component, Fragment } from 'react';

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

    render() {
        const mainClasses = this.state.showSidebar ? [styles.Main, styles.showSidebar] : [styles.Main];
        return (
            <Fragment>
                <Sidebar
                    toggled={this.sidebarToggleHandler}
                    showSidebar={this.state.showSidebar}>
                    <Avatar />
                    <Navigation />
                </Sidebar>
                <main className={mainClasses.join(' ')}>{this.props.children}</main>
            </Fragment>
        )
    }
}

export default Layout;