import React from 'react'

import Imagen8 from '../../assets/load-workout-bar-about.jpg'
import Icon1 from '../../assets/load-icon-01.png'
import Icon2 from '../../assets/load-icon-02.png'
import Icon4 from '../../assets/load-icon-04.png'
import Icon7 from '../../assets/load-icon-07.png'

export default props => {
    return (
        <div className="nosotros-tabs-contenido">
            <div className="nosotros-tabs-contenido-imagen">
                <img src={Imagen8} alt="Load, Workout Bar" />
            </div>
            <div className="nosotros-tabs-contenido-descripcion">
                <h2>workout bar</h2>
                <p>
                    Espacio enfocado en entrenamiento funcional
                    que cuenta con equipo de high energy fitness,
                    dentro de un ambiente inmersivo (música y ambientación)
                    con guía de instructores especializados.
                </p>
                <h4>características para workout bar</h4>
                <div className="nosotros-tabs-contenido-caracteristicas">
                    <img
                        src={Icon2}
                        alt="load, icons"
                        className="icons-about"
                    />
                    <img
                        src={Icon1}
                        alt="load, icons"
                        className="icons-about"
                    />
                    <img
                        src={Icon4}
                        alt="load, icons"
                        className="icons-about"
                    />
                    <img
                        src={Icon7}
                        alt="load, icons"
                        className="icons-about"
                    />
                </div>
                <br />
                <a
                    onClick={() => {
                        props.setFilterClases(3)
                        props.history.push('/reservar')
                    }}
                    className="button-general btn"
                    type="button">
                    Reservar
                </a>
            </div>
        </div>
    )
}
