import React from 'react'
import { connect } from 'react-redux'
import Event from '../components/event'
import {
    setMenu,
    recoverShoppingCart,
    setLogged,
    getEvents,
    sumaryEvent,
    setMetodoPagoCompras,
    payEvent,
    setEventAlert,
    returnEventList,
    newMetodoPago,
    setCodePromo
} from '../actions'
import types from '../config/types'
let rfc
const mapState = state => {
    document.title = 'Load | Eventos'
    rfc = state.perfil.rfc
    return {
        active: state.event.active,
        visible: state.navigation.visible,
        logged: state.navigation.logged,
        events: state.event.events,
        event: state.event.event,
        loading: state.event.loading,
        view: state.event.view,
        query: state.event.query,
        alert: state.event.alert,
        metodos: state.pagos.metodos,
        rfc: state.shoppingCart.rfc
    }
}

const mapDispatch = dispatch => {
    dispatch(setMenu(false))
    dispatch(setLogged())
    dispatch(recoverShoppingCart())
    dispatch(getEvents())
    setTimeout(() => {
        dispatch({
            type: types.SET_SHOPPING_CART_RFC,
            value: rfc
        })
    }, 1200)
    return {
        sumaryEvent: event => dispatch(sumaryEvent(event)),
        setMetodoPagoCompras: id => dispatch(setMetodoPagoCompras(id)),
        payEvent: event => dispatch(payEvent(event)),
        setEventAlert: () => dispatch(setEventAlert()),
        returnEventList: () => dispatch(returnEventList()),
        newMetodoPago: () => dispatch(newMetodoPago()),
        setCodePromo: event => dispatch(setCodePromo(event))
    }
}

export default connect(
    mapState,
    mapDispatch
)(Event)
