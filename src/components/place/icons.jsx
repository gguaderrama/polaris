import React from 'react'
import Bicycle1 from 'assets/bicycle1.png'

export default props => {
    return (
        <div className="reserva-dis">
            <span className="indicator2">
                <img src={Bicycle1} alt="bibicleta Load" className="bicycle" />
            </span>
            <p className="disponible">Disponible</p>
            <span className="indicator1">
                <img src={Bicycle1} alt="bibicleta Load" className="bicycle" />
            </span>
            <p className="ocupado">Ocupado</p>
            <span className="indicator3">
                <img src={Bicycle1} alt="bibicleta Load" className="bicycle" />
            </span>
            <p className="disponible">Tu lugar seleccionado</p>
        </div>
    )
}
