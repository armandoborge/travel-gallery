//
// import from node_modules
import React, { Component } from 'react';

//
// CSS import
import styles from './Gallery.css'

let albumImages = [
    window.PUBLIC_URL + '/albums/chile/huerquehue/IMG_0118.JPG',
    window.PUBLIC_URL + '/albums/chile/huerquehue/IMG_5292.JPG',
    window.PUBLIC_URL + '/albums/chile/huerquehue/IMG_5309.JPG',
    window.PUBLIC_URL + '/albums/chile/huerquehue/IMG_5383.JPG',
    window.PUBLIC_URL + '/albums/chile/huerquehue/IMG_5400.JPG',
    window.PUBLIC_URL + '/albums/chile/huerquehue/IMG_5436.JPG',
    window.PUBLIC_URL + '/albums/chile/huerquehue/IMG_5421.JPG',
    window.PUBLIC_URL + '/albums/chile/huerquehue/IMG_5373.JPG'
];

class Gallery extends Component {
    state = {
        indexImage: 0
    };

    handlePrevImage = () => {
        this.setState((prevState) => {
            var currentIndex = prevState.indexImage;
            var nextIndex = currentIndex - 1;
            var indexImage = nextIndex < 0 ? albumImages.length - 1 : nextIndex;
            return {indexImage: indexImage}
        });
    };

    handleNextImage = () => {
        this.setState((prevState) => {
            var currentIndex = prevState.indexImage;
            var nextIndex = currentIndex + 1;
            var indexImage = nextIndex > (albumImages.length - 1) ? 0 : nextIndex;
            return {indexImage: indexImage}
        });
    };

    render() {
        //
        // this.props.location.state.path
        let galleryStyles = {
            background: 'url(' + albumImages[this.state.indexImage] + ') center center / cover no-repeat'
        };

        console.log(galleryStyles);

        return (
            <div className={styles.Gallery} style={galleryStyles}>
                <header>
                    <h1>{this.props.location.state.album}</h1>
                    <h3>{this.props.location.state.country}</h3>
                </header>
                <div className={styles.navLeft} onClick={this.handlePrevImage}>
                    <i className="fas fa-angle-left" />
                </div>
                <div className={styles.navRight} onClick={this.handleNextImage}>
                    <i className="fas fa-angle-right" />
                </div>
            </div>
        )
    }

}

export default Gallery;

