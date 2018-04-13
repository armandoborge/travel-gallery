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
                <p>After some time traveling with my girlfriend I decided to create a <Link to='/gallery/argentina/el-cafayate/'>photo gallery</Link> of my favorite places. I couldn't find a design of my liking, so I created an application in Javascript using <a href="https://reactjs.org/" target="_blank" rel="noopener noreferrer" title="React">React</a> to build what I had in my mind and have a little fun in the process.</p>
                <p>The source code is available on <a href="https://github.com/armandoborge/travel-gallery" target="_blank" rel="noopener noreferrer" title="Travel Gallery GitHub">GitHub</a>.<br/>On the way I'll be making improvements and uploading more pictures.</p>
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