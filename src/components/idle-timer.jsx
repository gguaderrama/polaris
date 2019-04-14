import React, { Component } from 'react'
import IdleTimer from 'react-idle-timer'
import Routes from '../routes'
import Alert from './alerta'
import types from '../config/types'

export default class Inactivity extends Component {
    constructor(props) {
        super(props)
        this.state = {
            visible: false
        }
        this.idleTimer = null
        this.onAction = this.onAction.bind(this)
        this.onActive = this.onActive.bind(this)
        this.onIdle = this.onIdle.bind(this)
    }

    render() {
        return (
            <div>
                <IdleTimer
                    ref={ref => {
                        this.idleTimer = ref
                    }}
                    element={document}
                    onActive={this.onActive}
                    onIdle={this.onIdle}
                    onAction={this.onAction}
                    debounce={250}
                    timeout={1000 * 60 * 5}
                />
                <Routes />
                <Alert
                    type="exclamation"
                    visible={this.state.visible}
                    handleAlert={() => this.setState({ visible: false })}
                    title="¿Sigues ahí?"
                    message={'Tu sesión ha expirado debido a la inactividad.'}
                    btnText={'Iniciar sesión'}
                />
            </div>
        )
    }

    onAction(e) {
        //
    }

    onActive(e) {
        //
    }

    onIdle(e) {
        if (sessionStorage.getItem('access_token')) {
            this.setState({ visible: true })
            this.props.store.dispatch({ type: types.SET_LOGGED, value: false })
            this.props.store.dispatch({ type: 'SET_ID_PERFIL', value: '' })
            this.props.store.dispatch({ type: 'SET_NOMBRE_PERFIL', value: '' })
            this.props.store.dispatch({
                type: 'SET_APELLIDOS_PERFIL',
                value: ''
            })
            this.props.store.dispatch({ type: 'SET_CORREO_PERFIL', value: '' })
            this.props.store.dispatch({
                type: 'SET_TELEFONO_PERFIL',
                value: ''
            })
            this.props.store.dispatch({ type: 'SET_TALLA_PERFIL', value: '' })
            this.props.store.dispatch({
                type: 'SET_NICKNAME_PERFIL',
                value: ''
            })
            this.props.store.dispatch({
                type: 'SET_NACIMIENTO_PERFIL',
                value: ''
            })
            this.props.store.dispatch({ type: 'SET_GENERO_PERFIL', value: '' })
            this.props.store.dispatch({
                type: types.SET_SHOPPING_CART,
                value: []
            })
            this.props.store.dispatch({
                type: types.SET_SHOPPING_CART_SUBTOTAL,
                value: 0
            })
            this.props.store.dispatch({
                type: types.SET_SHOPPING_CART_TOTAL,
                value: 0
            })
            this.props.store.dispatch({
                type: types.SET_SHOPPING_CART_TAXES,
                value: 0
            })
            this.props.store.dispatch({
                type: types.SET_SHOPPING_CART_COUNT,
                value: 0
            })
            this.props.store.dispatch({
                type: types.SET_SHOPPING_CART_PAYMENT_METHOD,
                value: 0
            })
            this.props.history.push('/login')
            sessionStorage.clear()
        }
    }
}
