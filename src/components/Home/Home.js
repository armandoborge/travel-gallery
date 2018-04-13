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
    const homeLinks = process.env.REACT_APP_HOME_LINKS.map((linkObj, index) => {
        let link =  null;

        if (linkObj.isExternal) {
            link = (
                <a href={linkObj.url} target="_blank" title={linkObj.title} rel="noopener noreferrer">
                    <i className={linkObj.icon} />
                    <span>{linkObj.text}</span>
                </a>
            );
        }
        else {
            link = (
                <Link to={linkObj.url} title={linkObj.title}>
                    <i className={linkObj.icon} />
                    <span>{linkObj.text}</span>
                </Link>
            );
        }

        return (<li key={index}>{link}</li>)
    });

    return (
        <div className={styles.Home} style={homeBackgroundStyles}>
            <div className={homeContentClasses.join(' ')}>
                <h1>{process.env.REACT_APP_APP_NAME}</h1>
                <div dangerouslySetInnerHTML={{__html: process.env.REACT_APP_HOME_DESC}}></div>
                <ul className={styles.Links}>
                    {homeLinks}
                </ul>
            </div>
        </div>
    )
};

export default home;