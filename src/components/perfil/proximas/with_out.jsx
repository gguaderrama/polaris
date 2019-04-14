import React from 'react'

export default props => {
    return (
        <div className="proximas_clases">
            <p className="number">0</p>
            <h4>Clases disponibles</h4>
            <h5>No tienes próximas clases</h5>
            <br />
            <br />
            <button
                onClick={() => props.history.push('/reservar')}
                className="btn"
                style={{ width: '300px' }}>
                Reservar
            </button>
            <br />
            <br />
            <br />
        </div>
    )
}
