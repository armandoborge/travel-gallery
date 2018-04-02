//
// from node_modules
import React from 'react';
import { Link } from 'react-router-dom';

//
// CSS import
import styles from './Home.css'

//
// Images
import homeBackground from './home_bg.svg';

const home = (props) => {
    console.log(props.showSidebar);
    let homeBackgroundStyles = {
        background: 'url(' + homeBackground + ') center center / cover no-repeat'
    };

    const homeContentClasses = props.showSidebar ? [styles.HomeContent, styles.showSidebar] : [styles.HomeContent];

    return (
        <div className={styles.Home} style={homeBackgroundStyles}>
            <div className={homeContentClasses.join(' ')}>
                <h1>Fotos de Viaje</h1>
                <p>Luego de algún tiempo viajando decidí poner en Internet mis fotos favoritas de los lugares que he visitado. No logré encontrar un diseño web de mi gusto, así que he creado una aplicación en Javascript usando ReactJS para construir lo que tenía en mi mente y divertirme un poco en el proceso.</p>
                <p>El código fuente esta disponible en <a href="https://github.com/armandoborge/travel-gallery" target="_blank" rel="noopener noreferrer" title="Travel Gallery GitHub">GitHub</a>. En el camino iré haciendo mejoras y subiendo mas fotos.</p>
                <ul className={styles.Links}>
                    <li>
                        <a href="http://armandoborge.com/" target="_blank" title="Armando Borge" rel="noopener noreferrer">
                            <i className="fas fa-chess" />
                            <span>Mi Website</span>
                        </a>
                    </li>
                    <li>
                        <Link to='/gallery/argentina/el-calafate/'>
                            <i className="fas fa-globe" />
                            <span>Ir a Fotos</span>
                        </Link>
                    </li>
                    <li>
                        <a href="https://github.com/armandoborge/travel-gallery" target="_blank" title="Travel Gallery GitHub" rel="noopener noreferrer">
                            <i className="fas fa-code-branch" />
                            <span>GitHub</span>
                        </a>
                    </li>
                </ul>
            </div>
        </div>
    )
};

export default home;