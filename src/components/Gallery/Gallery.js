//
// import from node_modules
import React, { Component } from 'react';
import { withRouter } from 'react-router-dom';

//
// CSS import
import styles from './Gallery.css'

class Gallery extends Component {
    state = {
        countryIndex: 0,
        albumIndex: 0,
        photoIndex: 0,
        imagesList: [],
        loading: true
    };

    //
    // init state
    constructor(props) {
        super(props);
        //
        // initialize gallery using router params
        this.setGallery(props.match.params);
    }

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
        var prevPhotoIndex = parseInt(this.state.photoIndex, 10) - 1;
        var prevAlbumIndex = parseInt(this.state.albumIndex, 10) - 1;
        var prevCountryIndex = parseInt(this.state.countryIndex, 10) - 1;

        if (prevPhotoIndex < 0) {
            if (prevAlbumIndex < 0) {
                if (prevCountryIndex < 0) {
                    //
                    // navigate to the last country
                    let contextPath = this.getCountryLink(this.props.countries.length - 1) + '/' + this.getAlbumLink(this.props.countries.length - 1, this.props.countries[this.props.countries.length - 1].albums[this.props.countries[this.props.countries.length - 1].albums.length - 1].index) + '/';
                    let imageIndex = this.props.countries[this.props.countries.length - 1].albums[this.props.countries[this.props.countries.length - 1].albums.length - 1].photos.length - 1;

                    this.props.history.push('/gallery/' + contextPath + imageIndex);
                }
                else {
                    //
                    // navigate to previous country
                    let contextPath = this.getCountryLink(prevCountryIndex) + '/' + this.getAlbumLink(prevCountryIndex, this.props.countries[prevCountryIndex].albums[this.props.countries[prevCountryIndex].albums.length - 1].index) + '/';
                    let imageIndex = this.props.countries[prevCountryIndex].albums[this.props.countries[prevCountryIndex].albums.length - 1].photos.length - 1;

                    this.props.history.push('/gallery/' + contextPath + imageIndex);
                }
            }
            else {
                //
                // navigate to previous album, last photo
                let contextPath = this.getCountryLink(this.state.countryIndex) + '/' + this.getAlbumLink(this.state.countryIndex, prevAlbumIndex)  + '/';
                let imageIndex = this.props.countries[this.state.countryIndex].albums[prevAlbumIndex].photos.length - 1;

                this.props.history.push('/gallery/' + contextPath + imageIndex);
            }
        }
        else {
            //
            // next photo
            this.props.history.push('/gallery/' + this.getCountryLink(this.state.countryIndex) + '/' + this.getAlbumLink(this.state.countryIndex, this.state.albumIndex)  + '/' + prevPhotoIndex);
        }
    };

    handleNextImage = () => {
        var nextPhotoIndex = parseInt(this.state.photoIndex, 10) + 1;
        var nextAlbumIndex = parseInt(this.state.albumIndex, 10) + 1;
        var nextCountryIndex = parseInt(this.state.countryIndex, 10) + 1;

        if (nextPhotoIndex > this.state.imagesList.length - 1) {
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
            this.props.history.push(
                '/gallery/' + this.getCountryLink(this.state.countryIndex) + '/' + this.getAlbumLink(this.state.countryIndex, this.state.albumIndex)  + '/' + nextPhotoIndex
            );
        }
    };

    handleKeyPress = (event) => {
        switch (event.code) {
            case 'ArrowLeft': this.handlePrevImage(); break;
            case 'ArrowRight': this.handleNextImage(); break;
            default: return;
        }
    };

    setGallery = (config) => {
        let img = new Image();
        let countryIndex = this.getCountryIndex(config.country);
        let albumIndex = this.getAlbumIndex(config.country, config.album);

        let stateObj = {
            loading: false,
            countryIndex: countryIndex,
            albumIndex: albumIndex,
            photoIndex: config.photo ? config.photo : 0,
            imagesList: this.props.countries[countryIndex].albums[albumIndex].photos
        };
        //
        // wait for image load
        img.src = stateObj.imagesList[stateObj.photoIndex];
        img.onload = () => {
            this.setState(stateObj);
        }
    };

    static getDerivedStateFromProps() {
        return {
            loading: true
        };
    }

    getSnapshotBeforeUpdate(prevProps) {
        if (prevProps.location.pathname !== this.props.location.pathname) {
            this.setGallery(this.props.match.params);
        }
        return null;
    }

    componentDidUpdate() {
        //
        // do nothing
    }

    componentDidMount () {
        window.addEventListener('keydown', this.handleKeyPress);
    }

    componentWillUnmount () {
        window.removeEventListener('keydown', this.handleKeyPress);
    }

    render() {
        let galleryStyles = {
            background: 'url(' + this.state.imagesList[this.state.photoIndex] + ') center center / cover no-repeat'
        };

        let spinner = null;
        if (this.state.loading) {
            spinner = (
                <div className={styles.Spinner}>
                    <div></div>
                    <div></div>
                </div>
            )
        }

        const headerStyles = this.props.showSidebar ? [styles.showSidebar] : [];

        return (
            <div className={styles.Gallery} style={galleryStyles}>
                {spinner}
                <header className={headerStyles.join(' ')}>
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

