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


const avatar = () => (
    <div className={styles.Avatar}>
        <img src={profileImage} alt="Armando Borge" />
        <Link to="/map">
            <h1>Armando Borge</h1>
            <p>Travel Gallery</p>
        </Link>
    </div>
);

export default avatar;