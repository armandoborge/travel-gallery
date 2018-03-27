import React, { Component } from 'react';

//
// CSS import
import styles from './Gallery.css'

class Gallery extends Component {
    render() {
        console.log(this.props.location);

        return (
            <div className={styles.Gallery}>
                <p>Gallery</p>
            </div>
        )
    }

}

export default Gallery;