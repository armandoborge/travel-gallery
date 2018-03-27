//
// from node-modules
import React from 'react';

//
// components import
import CountryLinks from './CountryLinks/CountryLinks';

//
// CSS import
import styles from './Navigation.css'

const countries = [
    {
        name: 'Argentina',
        link: 'argentina',
        places: [
            {
                name: 'El Calafate',
                link: 'el-calafate'
            },
            {
                name: 'San Carlos de Bariloche',
                link: 'san-carlos-de-bariloche'
            },
            {
                name: 'San Martín de los Andes',
                link: 'san-martin-de-los-andes'
            },
            {
                name: 'El Cafayate',
                link: 'el-cafayate'
            },
            {
                name: 'Salta',
                link: 'salta'
            },
            {
                name: 'Jujuy',
                link: 'jujuy'
            }
        ]
    },
    {
        name: 'Chile',
        link: 'chile',
        places: [
            {
                name: 'Santiago',
                link: 'santiago'
            },
            {
                name: 'Valparaiso',
                link: 'valparaiso'
            },
            {
                name: 'Chiloé',
                link: 'chiloe'
            },
            {
                name: 'Pucón',
                link: 'pucon'
            },
            {
                name: 'Parque Nacional Huerquehue',
                link: 'huerquehue'
            },
            {
                name: 'Antofagasta',
                link: 'antofagasta'
            }
        ]
    },
    {
        name: 'Costa Rica',
        link: 'costa-rica',
        places: [
            {
                name: 'Playa Santa Teresa',
                link: 'santa-teresa'
            },
            {
                name: 'Playa Grande',
                link: 'playa-grande'
            },
            {
                name: 'Alajuela',
                link: 'alajuela'
            }
        ]
    },
    {
        name: 'Nicaragua',
        link: 'nicaragua',
        places: [
            {
                name: 'Isla de Ometepe',
                link: 'ometepe'
            },
            {
                name: 'Granada',
                link: 'granada'
            },
            {
                name: 'Masaya',
                link: 'masaya'
            }
        ]
    },
    {
        name: 'México',
        link: 'mexico',
        places: [
            {
                name: 'San Jose del Pacifico',
                link: 'san-jose-del-pacifico'
            },
            {
                name: 'San Miguel de Allende',
                link: 'san-miguel-de-allende'
            },
            {
                name: 'Ciudad de México',
                link: 'ciudad-de-mexico'
            },
            {
                name: 'Guanajuato',
                link: 'guanajuato'
            },
            {
                name: 'Oaxaca',
                link: 'oaxaca'
            },
            {
                name: 'Taxco',
                link: 'taxco'
            }
        ]
    },
    {
        name: 'Panamá',
        link: 'panama',
        places: [
            {
                name: 'Ciudad de Panamá',
                link: 'ciudad-de-panama'
            }
        ]
    }
];

const navigation = () => {
    const countriesMenu = countries.map((country, index) => {
        return (
            <li key={index}>
                <CountryLinks country={country} />
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