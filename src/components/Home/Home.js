//
// from node_modules
import React from 'react';
import { Link } from 'react-router-dom';

//
// CSS import
import styles from './Home.css'

const home = () => {
    let firstPhotoSet = {
        pathname: '/gallery/argentina/el-calafate',
        state: {
            country: 'Argentina',
            album: 'El Calafate',
            path:  'argentina/el-calafate'
        }
    };

    return (
        <div className={styles.Home}>
            <div className={styles.HomeContent}>
                <h1>Mis Fotos de Viajes</h1>
                <p>Software y viajes: así nace este proyecto, luego de algún tiempo viajando decidí poner en Internet mis fotografías favoritas de los lugares que he visitado.</p>
                <p>No logré encontrar un diseño web de mi gusto, así que he creado una aplicación en Javascript usando ReactJS para construir lo que tenía en mi mente y a la vez divertirme un poco en el proceso.</p>
                <p>El código fuente esta disponible en <a href="https://github.com/armandoborge/travel-gallery" target="_blank" title="Travel Gallery GitHub">GitHub</a>. En el camino iré mejorando el código y subiendo mas fotos.</p>
                <p>Espero lo disfrutes!</p>
                <ul className={styles.Links}>
                    <li>
                        <a href="http://armandoborge.com/" target="_blank" title="Armando Borge">
                            <i className="fab fa-fort-awesome-alt" />
                            <span>Mi Website</span>
                        </a>
                    </li>
                    <li>
                        <Link to={firstPhotoSet}>
                            <i className="fas fa-images" />
                            <span>Ir a Fotos</span>
                        </Link>
                    </li>
                    <li>
                        <a href="https://github.com/armandoborge/travel-gallery" target="_blank" title="Travel Gallery GitHub">
                            <i className="fab fa-github" />
                            <span>GitHub</span>
                        </a>
                    </li>
                </ul>
            </div>
        </div>
    )
};

export default home;