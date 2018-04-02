//
// from node-modules
import React from 'react';

//
// components import
import CountryLinks from './CountryLinks/CountryLinks';

//
// CSS import
import styles from './Navigation.css'

const navigation = (props) => {
    const countriesMenu = Object.keys(props.countries).map((index) => {
        return (
            <li key={index}>
                <CountryLinks country={props.countries[index]} closed={props.closed} />
            </li>
        );
    });

    return (
        <nav className={styles.Navigation}>
            <ul>
                {countriesMenu}
            </ul>
        </nav>
    )
};

export default navigation;