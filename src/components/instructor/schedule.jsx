import React from 'react'
import Item from './schedule_item'

export default props => {
    return (
        <div className="columnas-clases">
            <div className="col-1">
                <h2>Clases</h2>
                <a onClick={() => props.history.push('/reservar')}>
                    Ver calendario completo
                </a>
            </div>
            <ul>
                {props.schedule.map((e, i) => {
                    return <Item key={i} data={e} {...props} />
                })}
            </ul>
        </div>
    )
}
