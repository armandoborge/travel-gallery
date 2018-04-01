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
                name: 'Parque Nacional Los Glaciares',
                link: 'los-glaciares'
            },
            {
                name: 'El Chaltén',
                link: 'el-chalten'
            },
            {
                name: 'Quebrada de las Conchas',
                link: 'las-conchas'
            },
            {
                name: 'Humahuaca',
                link: 'humahuaca'
            },
            {
                name: 'Purmamarca',
                link: 'purmamarca'
            },
            {
                name: 'Tilcara',
                link: 'tilcara'
            },
            {
                name: 'Serranías de Hornocal',
                link: 'hornocal'
            },
            {
                name: 'San Carlos de Bariloche',
                link: 'san-carlos-de-bariloche'
            },
            {
                name: 'Villa La Angostura',
                link: 'villa-la-angostura'
            },
            {
                name: 'Parque Nacional Lanin',
                link: 'lanin'
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
                name: 'Salinas Grandes',
                link: 'salinas-grandes'
            },
            {
                name: 'Paso de Jama',
                link: 'jama'
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
                name: 'Dunas de Concón',
                link: 'concon'
            },
            {
                name: 'Castro (Chiloé)',
                link: 'castro'
            },
            {
                name: 'Ancud (Chiloé)',
                link: 'ancud'
            },
            {
                name: 'Chonchi (Chiloé)',
                link: 'chonchi'
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
                name: 'Parque Nacional Chiloé',
                link: 'pn-chiloe'
            },
            {
                name: 'Antofagasta',
                link: 'antofagasta'
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
            },
            {
                name: 'Grutas de Cacahuamilpa',
                link: 'cacahuamilpa'
            },
            {
                name: 'Teotihuacan',
                link: 'teotihuacan'
            },
            {
                name: 'Hierve el Agua',
                link: 'hierve-el-agua'
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
                name: 'Masaya',
                link: 'masaya'
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
                name: 'Limón',
                link: 'limon'
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