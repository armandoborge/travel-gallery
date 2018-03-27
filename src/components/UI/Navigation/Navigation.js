//
// from node_modules
import React from 'react';

//
// CSS import
import styles from './Navigation.css'

const navigation = () => (
    <nav className={styles.Navigation}>
        <ul>
            <li>
                <h3>Argentina</h3>
                <ul>
                    <li>El Calafate</li>
                    <li>San Carlos de Bariloche</li>
                    <li>San Mart&iacute;n de los Andes</li>
                    <li>Villa La Angostura</li>
                    <li>El Cafayate</li>
                    <li>Salta</li>
                    <li>Jujuy</li>
                </ul>
            </li>
            <li>
                <h3>Chile</h3>
                <ul>
                    <li>Santiago</li>
                    <li>Valparaiso</li>
                    <li>Chiloe</li>
                    <li>Puc&oacute;n</li>
                    <li>Huerquehue</li>
                    <li>Antofagasta</li>
                </ul>
            </li>
            <li>
                <h3>Costa Rica</h3>
                <ul>
                    <li>Playa  Santa Teresa</li>
                    <li>Playa Grande</li>
                </ul>
            </li>
            <li>
                <h3>Nicaragua</h3>
                <ul>
                    <li>Isla de Ometepe</li>
                    <li>Granada</li>
                    <li>Masaya</li>
                </ul>
            </li>
            <li>
                <h3>Panam&aacute;</h3>
                <ul>
                    <li>Ciudad de Panam&aacute;</li>
                </ul>
            </li>
            <li>
                <h3>M&eacute;xico</h3>
                <ul>
                    <li>Ciudad de M&eacute;xico</li>
                    <li>Taxco de Guerrero</li>
                    <li>Oaxaca</li>
                    <li>San Jose del Pacifico</li>
                    <li>San Miguel de Allende</li>
                    <li>Guanajuato</li>
                </ul>
            </li>
        </ul>
    </nav>
);

export default navigation;