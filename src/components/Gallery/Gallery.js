//
// import from node_modules
import React, { Component } from 'react';

//
// CSS import
import styles from './Gallery.css'

//
// get photos context
const imagesContext = require.context('../../photos/', true);

class Gallery extends Component {
    state = {
        indexImage: 0,
        imagesList: []
    };

    handlePrevImage = () => {
        this.setState((prevState) => {
            var currentIndex = prevState.indexImage;
            var nextIndex = currentIndex - 1;
            var indexImage = nextIndex < 0 ? this.state.imagesList.length - 1 : nextIndex;
            return {indexImage: indexImage}
        });
    };

    handleNextImage = () => {
        this.setState((prevState) => {
            var currentIndex = prevState.indexImage;
            var nextIndex = currentIndex + 1;
            var indexImage = nextIndex > (this.state.imagesList.length - 1) ? 0 : nextIndex;
            return {indexImage: indexImage}
        });
    };

    componentWillReceiveProps(nextProps) {
        if (nextProps.location.state.path !== this.props.location.state.path) {
            this.setState({
                indexImage: 0,
                imagesList: imagesContext.keys().filter(img => {
                    return img.indexOf(nextProps.location.state.path) > -1
                })
            });
        }
    }

    componentWillMount() {
        this.setState({
            imagesList: imagesContext.keys().filter(img => {
                return img.indexOf(this.props.location.state.path) > -1
            })
        });
    }

    render() {
        let galleryStyles = {
            background: 'url(' + imagesContext(this.state.imagesList[this.state.indexImage]) + ') center center / cover no-repeat'
        };

        return (
            <div className={styles.Gallery} style={galleryStyles}>
                <header>
                    <h1>{this.props.location.state.album}</h1>
                    <h3>{this.props.location.state.country}</h3>
                    <div className={styles.navLeft} onClick={this.handlePrevImage}>
                        <i className="fas fa-angle-left" />
                    </div>
                    <div className={styles.navRight} onClick={this.handleNextImage}>
                        <i className="fas fa-angle-right" />
                    </div>
                </header>
            </div>
        )
    }
}

export default Gallery;

