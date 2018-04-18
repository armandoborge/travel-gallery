//
// from node_modules
import React from 'react';
import FontAwesomeIcon from '@fortawesome/react-fontawesome';

//
// CSS import
import styles from './Sidebar.css'

const sidebar = (props) => {
    const sidebarClasses = props.showSidebar ? [styles.sidebar, styles.showSidebar] : [styles.sidebar];

    return (
        <aside className={sidebarClasses.join(' ')}>
            <div className={styles.content}>
                {props.children}
            </div>
            <div className={styles.toggle} onClick={props.toggled}>
                {props.showSidebar ? <FontAwesomeIcon icon='plane' flip='horizontal' /> : <FontAwesomeIcon icon='plane' />}
            </div>
        </aside>
    )
};

export default sidebar;