//
// import from node_modules
import React, { Component } from 'react';
import { withRouter } from 'react-router-dom';

//
// CSS import
import styles from './Gallery.css'

//
// countries constant
const countries = process.env.REACT_APP_FOLDER_STRUCTURE;

class Gallery extends Component {
    //
    // init state
    constructor(props) {
        super(props);
        //
        // get config from router params
        let config = this.props.match.params;
        //
        // fill state
        this.state = {
            countryIndex: this.getCountryIndex(config.country),
            albumIndex: this.getAlbumIndex(config.country, config.album),
            photoIndex: config.photo ? config.photo : 0,
            loading: true
        };
    }

    //
    // takes a link identifier as parameter
    getCountryIndex = (country) => {
        for (let i = 0; i < countries.length; i++) {
            if (countries[i].link === country) {
                return i;
            }
        }
        return 0;
    };

    //
    // takes a index value as parameter
    getCountryLink = (countryIndex) => {
        return countries[countryIndex].link;
    };

    //
    // takes links identifier as parameters
    getAlbumIndex = (country, album) => {
        let indexCountry = this.getCountryIndex(country);
        for (let i = 0; i < countries[indexCountry].albums.length; i++) {
            if (countries[indexCountry].albums[i].link === album) {
                return i;
            }
        }
        return 0;
    };

    //
    // takes index values as parameters
    getAlbumLink = (countryIndex, albumIndex) => {
        return countries[countryIndex].albums[albumIndex].link;
    };

    //
    // hide spinner when image is loaded
    handleImageLoaded = () => {
        this.setState({ loading: false })
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
                    let contextPath = this.getCountryLink(countries.length - 1) + '/' + this.getAlbumLink(countries.length - 1, countries[countries.length - 1].albums[countries[countries.length - 1].albums.length - 1].index) + '/';
                    let imageIndex = countries[countries.length - 1].albums[countries[countries.length - 1].albums.length - 1].photos.length - 1;

                    this.props.history.push('/gallery/' + contextPath + imageIndex);
                }
                else {
                    //
                    // navigate to previous country
                    let contextPath = this.getCountryLink(prevCountryIndex) + '/' + this.getAlbumLink(prevCountryIndex, countries[prevCountryIndex].albums[countries[prevCountryIndex].albums.length - 1].index) + '/';
                    let imageIndex = countries[prevCountryIndex].albums[countries[prevCountryIndex].albums.length - 1].photos.length - 1;

                    this.props.history.push('/gallery/' + contextPath + imageIndex);
                }
            }
            else {
                //
                // navigate to previous album, last photo
                let contextPath = this.getCountryLink(this.state.countryIndex) + '/' + this.getAlbumLink(this.state.countryIndex, prevAlbumIndex)  + '/';
                let imageIndex = countries[this.state.countryIndex].albums[prevAlbumIndex].photos.length - 1;

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

        if (nextPhotoIndex > countries[this.state.countryIndex].albums[this.state.albumIndex].photos.length - 1) {
            if (nextAlbumIndex > countries[this.state.countryIndex].albums.length - 1) {
                if (nextCountryIndex > countries.length - 1) {
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
        let countryIndex = this.getCountryIndex(config.country);
        let albumIndex = this.getAlbumIndex(config.country, config.album);

        this.setState({
            loading: true,
            countryIndex: countryIndex,
            albumIndex: albumIndex,
            photoIndex: config.photo ? config.photo : 0
        });
    };

    componentDidUpdate(prevProps) {
        if (prevProps.location.pathname !== this.props.location.pathname) {
            this.setGallery(this.props.match.params);
        }
    }

    componentDidMount () {
        window.addEventListener('keydown', this.handleKeyPress);
    }

    componentWillUnmount () {
        window.removeEventListener('keydown', this.handleKeyPress);
    }

    render() {
        let spinner = !this.state.loading ? null : (
            <div className={styles.Spinner}>
                <div></div>
                <div></div>
            </div>
        );

        let countryName = countries[this.state.countryIndex].name;
        let albumName = countries[this.state.countryIndex].albums[this.state.albumIndex].name;
        const headerStyles = this.props.showSidebar ? [styles.showSidebar] : [];

        return (
            <div className={styles.Gallery}>
                {spinner}
                <img
                    className={styles.MainImage}
                    onLoad={this.handleImageLoaded}
                    alt={countryName + ' ' + albumName}
                    src={countries[this.state.countryIndex].albums[this.state.albumIndex].photos[this.state.photoIndex]}
                />
                <div className={styles.prevPhoto} onClick={this.handlePrevImage}></div>
                <div className={styles.nextPhoto} onClick={this.handleNextImage}></div>
                <header className={headerStyles.join(' ')}>
                    <h1>{countryName}</h1>
                    <h3>{albumName}</h3>
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

export default withRouter(Gallery);

