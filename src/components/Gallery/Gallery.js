//
// import from node_modules
import React, { Component, Fragment } from 'react';

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

    handleKeyPress = (event) => {
        switch (event.code) {
            case 'ArrowLeft': this.handlePrevImage(); break;
            case 'ArrowRight': this.handleNextImage(); break;
            default: return;
        }
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

    componentDidMount () {
        window.addEventListener('keydown', this.handleKeyPress);
    }

    componentWillUnmount () {
        window.removeEventListener('keydown', this.handleKeyPress);
    }

    render() {
        let galleryStyles = {
            background: 'url(' + imagesContext(this.state.imagesList[this.state.indexImage]) + ') center center / cover no-repeat'
        };

        var navButtons = null;
        if (this.state.imagesList.length > 1) {
            navButtons = (
                <Fragment>
                    <div className={styles.navLeft} onClick={this.handlePrevImage}>
                        <i className="fas fa-angle-left" />
                    </div>
                    <div className={styles.navRight} onClick={this.handleNextImage}>
                        <i className="fas fa-angle-right" />
                    </div>
                </Fragment>
            );
        }

        return (
            <div className={styles.Gallery} style={galleryStyles}>
                <header>
                    <h1>{this.props.location.state.album}</h1>
                    <h3>{this.props.location.state.country}</h3>
                    {navButtons}
                </header>
                <div className={styles.prevPhoto} onClick={this.handlePrevImage}></div>
                <div className={styles.nextPhoto} onClick={this.handleNextImage}></div>
            </div>
        )
    }
}

export default Gallery;

