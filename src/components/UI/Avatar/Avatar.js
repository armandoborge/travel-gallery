//
// from node_modules
import React from 'react';

//
// CSS import
import styles from './Avatar.css'

//
// Images
import profileImage from './avatar.jpg';


const avatar = () => (
    <div className={styles.Avatar}>
        <img src={profileImage} alt="Armando Borge" />
        <h1>Armando Borge</h1>
        <p>Travel Gallery</p>
    </div>
);

export default avatar;