//
// from node_modules
import React from 'react';

//
// CSS import
import styles from './Sidebar.css'

const sidebar = (props) => {
    const sidebarClasses = props.showSidebar ? [styles.sidebar, styles.showSidebar] : [styles.sidebar];
    const toggleIcon = props.showSidebar ? 'fas fas fa-plane fa-rotate-180' : 'fas fas fa-plane';

    return (
        <aside className={sidebarClasses.join(' ')}>
            <div className={styles.content}>
                {props.children}
            </div>
            <div className={styles.toggle} onClick={props.toggled}>
                <i className={toggleIcon} />
            </div>
        </aside>
    )
};

export default sidebar;