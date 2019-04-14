import React from 'react'
import moment from 'moment'

export default props => {
    return (
        <div>
            <div className="event-card-new">
                <div className="img-event">
                    <img src={props.item.url} alt="" className="event-back" />
                </div>
                <div className="event-container">
                    <div className="event-price">
                        <p>
                            {props.item.product.price[0].price === 0
                                ? 'Sin costo'
                                : '$ ' + props.item.product.price[0].price}
                        </p>
                    </div>
                    <h2 className="event-title">
                        {props.item.name.toUpperCase()}
                    </h2>
                    <h3 className="event-date">
                        {moment(
                            props.item.atDay + ' ' + props.item.atTime + ':00'
                        ).format('DD-MM-YYYY | hh:mm ')}
                    </h3>
                    <p className="event-description">
                        {props.item.description}
                    </p>
                    <div className="event-buy">
                        <button
                            className="login-boton"
                            onClick={() => {
                                props.logged
                                    ? props.sumaryEvent(props.item)
                                    : props.history.push('/login')
                            }}>
                            {props.item.product.price[0].price === 0
                                ? 'Inscríbete'
                                : 'Comprar entrada'}
                        </button>
                    </div>
                    <div className="event-footer">
                        <p>
                            Capacidad:{' '}
                            {props.item.capacity === 0
                                ? 'Libre'
                                : props.item.capacity}
                        </p>
                        <p>Registrados: {props.item.bussy}</p>
                        <p>Duración: {props.item.durationTime} mins.</p>
                    </div>
                </div>
            </div>
        </div>
    )
}
