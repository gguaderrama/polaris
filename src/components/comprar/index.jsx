import React from 'react'
import Navigation from '../../containers/navigation'
import Footer from '../footer'
import Category from './categories'
import Loading from '../loading'
import Alert from '../alerta'

export default props => {
    return (
        <div className={props.visible ? 'container menu' : 'container'}>
            <Navigation {...props} />
            {props.loading ? <Loading /> : <Category {...props} />}
            <Footer {...props} />
            <Alert
                type="exclamation"
                visible={props.alert_membership}
                handleAlert={() => {props.setMembershipOption(false)}}
                onClick={() => {props.setMembershipOption(true)}}
                title="¡AVISO!"
                message={'Para este producto es necesario comprar '+
                'una Membresía ¿Deseas agregarla?'}
                btnText={'Agregar al carrito'}
            />
        </div>
    )
}
