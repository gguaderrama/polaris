import React from 'react'

export default props => {
    return (
        <button
            onClick={() => props.handleSelectPlace(props.match.params.id)}
            disabled={props.reservando}
            className="button-general">
            {props.reservando ? 'Reservando' : 'Reservar'}
        </button>
    )
}
