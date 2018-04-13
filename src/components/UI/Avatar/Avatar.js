//
// from node_modules
import React from 'react';
import { Link } from 'react-router-dom';

//
// CSS import
import styles from './Avatar.css'

const avatar = (props) => (
    <div className={styles.Avatar}>
        <img src={process.env.PUBLIC_URL + '/images/profiles/' + process.env.REACT_APP_PROFILE_IMG} alt={process.env.REACT_APP_PROFILE_NAME} />
        <Link to="/home" onClick={props.closed}>
            <h1>{process.env.REACT_APP_PROFILE_NAME}</h1>
            <p>{process.env.REACT_APP_APP_NAME}</p>
        </Link>
    </div>
);

export default avatar;