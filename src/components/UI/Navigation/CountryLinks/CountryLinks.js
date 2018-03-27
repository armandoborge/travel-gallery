//
// from node_modules
import React, { Fragment } from 'react';
import { NavLink } from 'react-router-dom';

//
// CSS import

const countryLinks = (props) => {
    //
    // create place URL
    const getLocation = (place) => {
        return {
            pathname: '/gallery/' + props.country.link + '/' + place.link,
            state: {
                country: props.country.name,
                album: place.name,
                path: props.country.link + '/' + place.link + '/'
            }
        }
    };

    //
    // links for places inside a country object
    const links = Object.keys(props.country.places).map((ikey) => (
        <li key={props.country.places[ikey].link}>
            <NavLink to={getLocation(props.country.places[ikey])}>{props.country.places[ikey].name}</NavLink>
        </li>
    ));

    //
    // print navigation tree
    return (
        <Fragment>
            <h3>{props.country.name}</h3>
            <ul>
                {links}
            </ul>
        </Fragment>
    )
};

export default countryLinks;