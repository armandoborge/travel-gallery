//
// from node_modules
import React, { Component, Fragment }  from 'react';
import GoogleMap from 'google-map-react';
import { fitBounds } from 'google-map-react/utils';


//
// CSS import
import styles from './Map.css'

class Map extends Component {
    render () {
        const mapOptions = {
            styles: [
                {
                    elementType: 'geometry',
                    stylers: [{color: '#242f3e'}]
                },
                {
                    elementType: 'labels.text.stroke',
                    stylers: [{color: '#242f3e'}]
                },
                {
                    elementType: 'labels.text.fill',
                    stylers: [{color: '#746855'}]
                },
                {
                    featureType: 'administrative.locality',
                    elementType: 'labels.text.fill',
                    stylers: [{color: '#E5F7FA'}]
                },
                {
                    featureType: 'poi',
                    elementType: 'labels.text.fill',
                    stylers: [{color: '#d59563'}]
                },
                {
                    featureType: 'poi.park',
                    elementType: 'geometry',
                    stylers: [{color: '#263c3f'}]
                },
                {
                    featureType: 'poi.park',
                    elementType: 'labels.text.fill',
                    stylers: [{color: '#6b9a76'}]
                },
                {
                    featureType: 'road',
                    elementType: 'geometry',
                    stylers: [{color: '#38414e'}]
                },
                {
                    featureType: 'road',
                    elementType: 'geometry.stroke',
                    stylers: [{color: '#212a37'}]
                },
                {
                    featureType: 'road',
                    elementType: 'labels.text.fill',
                    stylers: [{color: '#9ca5b3'}]
                },
                {
                    featureType: 'road.highway',
                    elementType: 'geometry',
                    stylers: [{color: '#746855'}]
                },
                {
                    featureType: 'road.highway',
                    elementType: 'geometry.stroke',
                    stylers: [{color: '#1f2835'}]
                },
                {
                    featureType: 'road.highway',
                    elementType: 'labels.text.fill',
                    stylers: [{color: '#f3d19c'}]
                },
                {
                    featureType: 'transit',
                    elementType: 'geometry',
                    stylers: [{color: '#2f3948'}]
                },
                {
                    featureType: 'transit.station',
                    elementType: 'labels.text.fill',
                    stylers: [{color: '#d59563'}]
                },
                {
                    featureType: 'water',
                    elementType: 'geometry',
                    stylers: [{color: '#17263c'}]
                },
                {
                    featureType: 'water',
                    elementType: 'labels.text.fill',
                    stylers: [{color: '#515c6d'}]
                },
                {
                    featureType: 'water',
                    elementType: 'labels.text.stroke',
                    stylers: [{color: '#17263c'}]
                },
                {
                    featureType: "administrative.country",
                    elementType: "geometry.stroke",
                    stylers: [{"color": "#4b6878"}]
                },
                {
                    featureType: 'administrative.country',
                    elementType: 'labels.text.fill',
                    stylers: [{color: '#E5F7FA'}]
                }
            ]
        };

        return (
            <Fragment>
                <GoogleMap
                    className={styles.Map}
                    defaultCenter={{lat: -3.6216964, lng: -27.8624725}}
                    defaultZoom={3}
                    options={mapOptions}
                />
            </Fragment>
        )
    }
}

export default Map;