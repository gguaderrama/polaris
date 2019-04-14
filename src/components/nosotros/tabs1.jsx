import React from 'react'

import Imagen2 from '../../assets/load-ciclyng-about.jpg'
import Icon1 from '../../assets/load-icon-01.png'
import Icon4 from '../../assets/load-icon-04.png'
import Icon5 from '../../assets/load-icon-05.png'
import Icon6 from '../../assets/load-icon-06.png'

export default props => {
    return (
        <div className="nosotros-tabs-contenido">
            <div className="nosotros-tabs-contenido-imagen">
                <img src={Imagen2} alt="Load, quienes somos" />
            </div>
            <div className="nosotros-tabs-contenido-descripcion">
                <h2>¡Sabemos cómo pedalear!</h2>
                <p>
                Clase de indoor cycling al beat de la música.
                Su objetivo es coordinar el pedaleo con el ritmo
                de cada canción para crear una energía y frecuencia
                cardiaca similar en todos los participantes.
                </p>
                <h4>características para cycling</h4>
                <div className="nosotros-tabs-contenido-caracteristicas">
                    <img
                        src={Icon1}
                        className="icons-about"
                        alt="load, icons"
                    />
                    <img
                        src={Icon6}
                        className="icons-about"
                        alt="load, icons"
                    />
                    <img
                        src={Icon5}
                        className="icons-about"
                        alt="load, icons"
                    />
                    <img
                        src={Icon4}
                        className="icons-about"
                        alt="load, icons"
                    />
                </div>
                <br />
                <a
                    onClick={() => {
                        props.setFilterClases(2)
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
