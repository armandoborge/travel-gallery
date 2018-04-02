//
// from node_modules
import React from 'react';
import { Link } from 'react-router-dom';

//
// CSS import
import styles from './Avatar.css'

//
// Images
import profileImage from './avatar.jpg';


const avatar = (props) => (
    <div className={styles.Avatar}>
        <img src={profileImage} alt="Armando Borge" />
        <Link to="/home" onClick={props.closed}>
            <h1>Armando Borge</h1>
            <p>Fotos de Viaje</p>
        </Link>
    </div>
);

export default avatar;