//
// import from node_modules
import React, { Component } from 'react';
import { withRouter } from 'react-router-dom';

//
// CSS import
import styles from './Gallery.css'

//
// get photos context
const imagesContext = require.context('../../photos/', true);

class Gallery extends Component {
    state = {
        countryIndex: 0,
        albumIndex: 0,
        photoIndex: 0,
        imagesList: []
    };

    //
    // takes a link identifier as parameter
    getCountryIndex = (country) => {
        for (let i = 0; i < this.props.countries.length; i++) {
            if (this.props.countries[i].link === country) {
                return i;
            }
        }
        return 0;
    };

    //
    // takes a index value as parameter
    getCountryLink = (countryIndex) => {
        return this.props.countries[countryIndex].link;
    };

    //
    // takes links identifier as parameters
    getAlbumIndex = (country, album) => {
        let indexCountry = this.getCountryIndex(country);
        for (let i = 0; i < this.props.countries[indexCountry].albums.length; i++) {
            if (this.props.countries[indexCountry].albums[i].link === album) {
                return i;
            }
        }
        return 0;
    };

    //
    // takes index values as parameters
    getAlbumLink = (countryIndex, albumIndex) => {
        return this.props.countries[countryIndex].albums[albumIndex].link;
    };

    handlePrevImage = () => {
        this.setState((prevState) => {
            var prevPhotoIndex = parseInt(prevState.photoIndex, 10) - 1;
            var prevAlbumIndex = parseInt(prevState.albumIndex, 10) - 1;
            var prevCountryIndex = parseInt(prevState.countryIndex, 10) - 1;

            if (prevPhotoIndex < 0) {
                if (prevAlbumIndex < 0) {
                    if (prevCountryIndex < 0) {
                        //
                        // navigate to the last country
                        let contextPath = this.getCountryLink(this.props.countries.length - 1) + '/' + this.getAlbumLink(this.props.countries.length - 1, this.props.countries[this.props.countries.length - 1].albums[this.props.countries[this.props.countries.length - 1].albums.length - 1].index) + '/';
                        let imagesCounter = imagesContext.keys().filter(img => {return img.indexOf(contextPath) > -1});
                        let imageIndex = imagesCounter.length - 1;

                        this.props.history.push('/gallery/' + contextPath + imageIndex);
                    }
                    else {
                        //
                        // navigate to previous country
                        let contextPath = this.getCountryLink(prevCountryIndex) + '/' + this.getAlbumLink(prevCountryIndex, this.props.countries[prevCountryIndex].albums[this.props.countries[prevCountryIndex].albums.length - 1].index) + '/';
                        let imagesCounter = imagesContext.keys().filter(img => {return img.indexOf(contextPath) > -1});
                        let imageIndex = imagesCounter.length - 1;

                        this.props.history.push('/gallery/' + contextPath + imageIndex);
                    }
                }
                else {
                    //
                    // navigate to previous album, last photo
                    let contextPath = this.getCountryLink(this.state.countryIndex) + '/' + this.getAlbumLink(this.state.countryIndex, prevAlbumIndex)  + '/';
                    let imagesCounter = imagesContext.keys().filter(img => {return img.indexOf(contextPath) > -1});
                    let imageIndex = imagesCounter.length - 1;

                    this.props.history.push('/gallery/' + contextPath + imageIndex);
                }
            }
            else {
                //
                // next photo
                this.props.history.push('/gallery/' + this.getCountryLink(this.state.countryIndex) + '/' + this.getAlbumLink(this.state.countryIndex, this.state.albumIndex)  + '/' + prevPhotoIndex);
            }
        });
    };

    handleNextImage = () => {
        this.setState((prevState) => {
            var nextPhotoIndex = parseInt(prevState.photoIndex, 10) + 1;
            var nextAlbumIndex = parseInt(prevState.albumIndex, 10) + 1;
            var nextCountryIndex = parseInt(prevState.countryIndex, 10) + 1;

            if (nextPhotoIndex > prevState.imagesList.length - 1) {
                if (nextAlbumIndex > this.props.countries[this.state.countryIndex].albums.length - 1) {
                    if (nextCountryIndex > this.props.countries.length - 1) {
                        //
                        // navigate to first country
                        this.props.history.push(
                            '/gallery/' + this.getCountryLink(0) + '/' + this.getAlbumLink(0, 0) + '/' + 0
                        );
                    }
                    else {
                        //
                        // navigate to next country, first album
                        this.props.history.push(
                            '/gallery/' + this.getCountryLink(nextCountryIndex) + '/' + this.getAlbumLink(nextCountryIndex, 0) + '/' + 0
                        );
                    }
                }
                else {
                    //
                    // navigate to next album
                    this.props.history.push(
                        '/gallery/' + this.getCountryLink(this.state.countryIndex) + '/' + this.getAlbumLink(this.state.countryIndex, nextAlbumIndex) + '/' + 0
                    );
                }
            }
            else {
                //
                // only update the image index of the current album
                this.props.history.push('/gallery/' + this.getCountryLink(this.state.countryIndex) + '/' + this.getAlbumLink(this.state.countryIndex, this.state.albumIndex)  + '/' + nextPhotoIndex);
            }
        });
    };

    handleKeyPress = (event) => {
        switch (event.code) {
            case 'ArrowLeft': this.handlePrevImage(); break;
            case 'ArrowRight': this.handleNextImage(); break;
            default: return;
        }
    };

    setGallery = (config) => {
        let contextPath = config.country + '/' + config.album + '/';

        this.setState({
            countryIndex: this.getCountryIndex(config.country),
            albumIndex: this.getAlbumIndex(config.country, config.album),
            photoIndex: config.photo ? config.photo : 0,
            imagesList: imagesContext.keys().filter(img => {
                return img.indexOf(contextPath) > -1
            })
        });
    };

    componentWillReceiveProps(nextProps) {
        if (nextProps.location.pathname !== this.props.location.pathname) {
            this.setGallery(nextProps.match.params)
        }
    }

    componentWillMount() {
        this.setGallery(this.props.match.params);
    }

    componentDidMount () {
        window.addEventListener('keydown', this.handleKeyPress);
    }

    componentWillUnmount () {
        window.removeEventListener('keydown', this.handleKeyPress);
    }

    render() {
        let galleryStyles = {
            background: 'url(' + imagesContext(this.state.imagesList[this.state.photoIndex]) + ') center center / cover no-repeat'
        };

        return (
            <div className={styles.Gallery} style={galleryStyles}>
                <header>
                    <h1>{this.props.countries[this.state.countryIndex].name}</h1>
                    <h3>{this.props.countries[this.state.countryIndex].albums[this.state.albumIndex].name}</h3>
                    <div className={styles.navLeft} onClick={this.handlePrevImage}>
                        <i className="fas fa-angle-left" />
                    </div>
                    <div className={styles.navRight} onClick={this.handleNextImage}>
                        <i className="fas fa-angle-right" />
                    </div>
                </header>
                <div className={styles.prevPhoto} onClick={this.handlePrevImage}></div>
                <div className={styles.nextPhoto} onClick={this.handleNextImage}></div>
            </div>
        )
    }
}

export default withRouter(Gallery);

