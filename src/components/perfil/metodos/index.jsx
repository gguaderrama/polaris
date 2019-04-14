import React from 'react'
import List from './list'
import Form from './form'

export default props => {
    return (
        <div className="metodo-pago">
            <div className="metodo-info">
                <List {...props} />
                <Form {...props} />
            </div>
        </div>
    )
}
