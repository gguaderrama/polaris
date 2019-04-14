import React from 'react'
import moment from 'moment'

export default props => {
    return (
        <li>
            <div className="col">
                <h3>{props.data.discipline.name}</h3>
                <p>{moment(props.data.atDay).format('LL')}</p>
                <p>{props.data.atTime} hrs</p>
                <a
                    onClick={() => {
                        moment(props.data.atDay + ' ' + props.data.atTime) >
                        moment()
                            ? props.logged
                                ? props.history.push(
                                    '/reservar/clases/lugares/' +
                                          props.data.id
                                )
                                : props.history.push('/login')
                            : ''
                    }}
                    className="button-general"
                    type="button">
                    Reservar
                </a>
            </div>
        </li>
    )
}
