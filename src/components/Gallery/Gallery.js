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
    state = {
        loading: true
    };

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
    // get the name of a country
    getCountryName = (link) => {
        return countries[this.getCountryIndex(link)].name;
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
    // get the name of an album
    getAlbumName = (country, album) => {
        return countries[this.getCountryIndex(country)].albums[this.getAlbumIndex(country, album)].name;
    };

    //
    // hide spinner when image is loaded
    handleImageLoaded = () => {
        this.setState({ loading: false })
    };

    handlePrevImage = () => {
        let albumIndex = this.getAlbumIndex(this.props.match.params.country, this.props.match.params.album);
        let countryIndex = this.getCountryIndex(this.props.match.params.country);

        var prevPhotoIndex = parseInt(this.props.match.params.photo || 0, 10) - 1;
        var prevAlbumIndex = parseInt(albumIndex, 10) - 1;
        var prevCountryIndex = parseInt(countryIndex, 10) - 1;

        //
        // navigate previous photo
        let contextPath = this.getCountryLink(countryIndex) + '/' + this.getAlbumLink(countryIndex, albumIndex)  + '/';
        let imageIndex = prevPhotoIndex;

        if (prevPhotoIndex < 0) {
            if (prevAlbumIndex < 0) {
                if (prevCountryIndex < 0) {
                    //
                    // navigate to the last country
                    contextPath = this.getCountryLink(countries.length - 1) + '/' + this.getAlbumLink(countries.length - 1, countries[countries.length - 1].albums[countries[countries.length - 1].albums.length - 1].index) + '/';
                    imageIndex = countries[countries.length - 1].albums[countries[countries.length - 1].albums.length - 1].photos.length - 1;

                }
                else {
                    //
                    // navigate to previous country
                    contextPath = this.getCountryLink(prevCountryIndex) + '/' + this.getAlbumLink(prevCountryIndex, countries[prevCountryIndex].albums[countries[prevCountryIndex].albums.length - 1].index) + '/';
                    imageIndex = countries[prevCountryIndex].albums[countries[prevCountryIndex].albums.length - 1].photos.length - 1;
                }
            }
            else {
                //
                // navigate to previous album, last photo
                contextPath = this.getCountryLink(countryIndex) + '/' + this.getAlbumLink(countryIndex, prevAlbumIndex)  + '/';
                imageIndex = countries[countryIndex].albums[prevAlbumIndex].photos.length - 1;
            }
        }

        this.props.history.push('/gallery/' + contextPath + imageIndex);
    };

    handleNextImage = () => {
        let albumIndex = this.getAlbumIndex(this.props.match.params.country, this.props.match.params.album);
        let countryIndex = this.getCountryIndex(this.props.match.params.country);

        var nextPhotoIndex = parseInt(this.props.match.params.photo || 0, 10) + 1;
        var nextAlbumIndex = parseInt(albumIndex, 10) + 1;
        var nextCountryIndex = parseInt(countryIndex, 10) + 1;

        //
        // only update the image index of the current album
        let contextPath = this.getCountryLink(countryIndex) + '/' + this.getAlbumLink(countryIndex, albumIndex)  + '/';
        let imageIndex = nextPhotoIndex;

        if (nextPhotoIndex > countries[countryIndex].albums[albumIndex].photos.length - 1) {
            if (nextAlbumIndex > countries[countryIndex].albums.length - 1) {
                if (nextCountryIndex > countries.length - 1) {
                    //
                    // navigate to first country
                    contextPath = this.getCountryLink(0) + '/' + this.getAlbumLink(0, 0) + '/';
                    imageIndex = 0;
                }
                else {
                    //
                    // navigate to next country, first album
                    contextPath = this.getCountryLink(nextCountryIndex) + '/' + this.getAlbumLink(nextCountryIndex, 0) + '/';
                    imageIndex = 0;
                }
            }
            else {
                //
                // navigate to next album
                contextPath = this.getCountryLink(countryIndex) + '/' + this.getAlbumLink(countryIndex, nextAlbumIndex) + '/';
                imageIndex = 0;
            }
        }

        this.props.history.push('/gallery/' + contextPath + imageIndex);
    };

    handleKeyPress = (event) => {
        switch (event.code) {
            case 'ArrowLeft': this.handlePrevImage(); break;
            case 'ArrowRight': this.handleNextImage(); break;
            default: return;
        }
    };

    componentDidUpdate(prevProps) {
        console.log(prevProps.location.pathname);
        console.log(this.props.location.pathname);
        if (prevProps.location.pathname !== this.props.location.pathname) {
            this.setState({ loading: true });
        }
    }

    componentDidMount () {
        window.addEventListener('keydown', this.handleKeyPress);
    }

    componentWillUnmount () {
        window.removeEventListener('keydown', this.handleKeyPress);
    }

    render() {
        //
        // show/hide spinner
        let spinner = this.state.loading ? (
            <div className={styles.Spinner}>
                <div></div>
                <div></div>
            </div>
        ) : null;

        //
        // router params
        const p = this.props.match.params;
        let countryIndex = this.getCountryIndex(p.country);
        let countryName = this.getCountryName(p.country);
        let albumIndex = this.getAlbumIndex(p.country, p.album);
        let albumName = this.getAlbumName(p.country, p.album);
        let photoIndex = p.photo || 0;


        const headerStyles = this.props.showSidebar ? [styles.showSidebar] : [];

        return (
            <div className={styles.Gallery}>
                <img
                    className={styles.MainImage}
                    onLoad={this.handleImageLoaded}
                    alt={albumName + ', ' + countryName}
                    src={countries[countryIndex].albums[albumIndex].photos[photoIndex]}
                />
                <div className={styles.prevPhoto} onClick={this.handlePrevImage}></div>
                <div className={styles.nextPhoto} onClick={this.handleNextImage}></div>
                {spinner}
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

