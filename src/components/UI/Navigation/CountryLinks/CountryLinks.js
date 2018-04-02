//
// from node_modules
import React, { Fragment } from 'react';
import { NavLink } from 'react-router-dom';

const countryLinks = (props) => {
    //
    // create place URL
    const getLocation = (album) => {
        return '/gallery/' + props.country.link + '/' + album + '/'
    };

    //
    // links for albums inside a country object
    const links = Object.keys(props.country.albums).map((index) => (
        <li key={index}>
            <NavLink to={getLocation(props.country.albums[index].link)}>{props.country.albums[index].name}</NavLink>
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