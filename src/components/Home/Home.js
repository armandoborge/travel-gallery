//
// from node_modules
import React from 'react';

//
// CSS import
import styles from './Home.css'

const home = () => {
    return (
        <div className={styles.Home}>
            <div className={styles.HomeContent}>
                <h1>Mis Fotos de Viajes</h1>
                <p>Software y viajes: así nace este proyecto, luego de algún tiempo viajando decidí poner en Internet mis fotografías favoritas de los lugares que he visitado.</p>
                <p>No logré encontrar un diseño web de mi gusto, así que he creado una aplicación en Javascript usando ReactJS para construir lo que tenía en mi mente y a la vez divertirme un poco en el proceso.</p>
                <p>El código fuente esta disponible en GitHub. En el camino iré mejorando el código y subiendo mas fotos.</p>
                <p>Espero lo disfrutes!</p>
            </div>
            
        </div>
    )
};

export default home;