import React from 'react'
import Navigation from '../../containers/navigation'
import Footer from '../footer'
import Mapa from './mapa'
import Direccion from './direccion'
import Form from './form'

export default props => {
    return (
        <div className={props.visible ? 'container menu' : 'container'}>
            <Navigation {...props} />
            <div className="contacto-panel-izquierdo">
                <Form {...props} />
            </div>
            <div className="contacto-panel-derecho">
                <Direccion {...props} />
                <Mapa {...props} />
            </div>
            <Footer {...props} />
        </div>
    )
}
