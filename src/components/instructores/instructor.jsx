import React from 'react'

export default props => {
    let imagen = ''
    let query = props.values.listImages.map(e => e.avatarType).indexOf('AVATAR')
    if (query !== -1) {
        imagen = props.values.listImages[query].url
    }
    return (
        <div
            id={`instructor-${props.id}`}
            onMouseOver={e => {
                props.activarInstructor(props.values.id)
            }}
            className={`instructor ${
                parseInt(props.values.id) == props.activo ? 'activo' : ''
            }`}
        >
            <h2>{props.values.id}</h2>
            <h4>
                {props.values.name} {props.values.surname}
            </h4>
            <button
                onClick={() =>
                    props.history.push('coach/detalle/' + props.values.id)
                }
            >
                ver más
            </button>
            <div className="img-contenedor">
                <img src={imagen} alt="instructor" />
            </div>
        </div>
    )
}
