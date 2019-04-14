import React from 'react'
import moment from 'moment'
import Detail from './detail'
import List from './list'

export default props => {
    return (
        <div>
            {!props.detalleHistorialCompras ? (
                <List {...props} />
            ) : (
                <Detail {...props} />
            )}
        </div>
    )
}
