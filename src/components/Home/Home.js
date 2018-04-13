//
// from node_modules
import React from 'react';
import { Link } from 'react-router-dom';

//
// CSS import
import styles from './Home.css'

//
// Images
import homeBackground from './home_bg.svg';

const home = (props) => {
    let homeBackgroundStyles = {
        background: 'url(' + homeBackground + ') center center / cover no-repeat'
    };

    const homeContentClasses = props.showSidebar ? [styles.HomeContent, styles.showSidebar] : [styles.HomeContent];

    return (
        <div className={styles.Home} style={homeBackgroundStyles}>
            <div className={homeContentClasses.join(' ')}>
                <h1>{process.env.REACT_APP_APP_NAME}</h1>
                <div dangerouslySetInnerHTML={{__html: process.env.REACT_APP_HOME_DESC}}></div>
                <ul className={styles.Links}>
                    <li>
                        <a href="http://armandoborge.com/" target="_blank" title="Armando Borge" rel="noopener noreferrer">
                            <i className="fas fa-code" />
                            <span>About Me</span>
                        </a>
                    </li>
                    <li>
                        <Link to='/gallery/argentina/el-cafayate/'>
                            <i className="fas fa-camera" />
                            <span>Pictures</span>
                        </Link>
                    </li>
                    <li>
                        <a href="https://github.com/armandoborge/travel-gallery" target="_blank" title="Travel Gallery GitHub" rel="noopener noreferrer">
                            <i className="fas fa-code-branch" />
                            <span>GitHub</span>
                        </a>
                    </li>
                </ul>
            </div>
        </div>
    )
};

export default home;