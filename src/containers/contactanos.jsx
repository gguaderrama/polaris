import React from 'react'
import { connect } from 'react-redux'
import Contactanos from '../components/contactanos'
import {
    recoverShoppingCart,
    setLogged,
    setNameContact,
    setSurnameContact,
    setEmailContact,
    setMessageContact,
    setTerminosContact,
    saveContact,
    setValidateCaptcha
} from '../actions'

const mapState = state => {
    document.title = 'Load | Contactanos'
    return {
        active: state.contactanos.active,
        visible: state.navigation.visible,
        nombre_contact: state.contactanos.nombre_contact,
        email: state.contactanos.email,
        surname: state.contactanos.surname,
        mensaje: state.contactanos.mensaje,
        confirm: state.contactanos.confirm,
        valid_nombre: state.contactanos.valid_nombre,
        valid_email: state.contactanos.valid_email,
        valid_surname: state.contactanos.valid_surname,
        valid_mensaje: state.contactanos.valid_mensaje,
        message_nombre: state.contactanos.message_nombre,
        message_email: state.contactanos.message_email,
        message_surname: state.contactanos.message_surname,
        message_mensaje: state.contactanos.message_mensaje,
        message_confirm: state.contactanos.message_confirm
    }
}

const mapDispatch = dispatch => {
    dispatch(setLogged())
    dispatch(recoverShoppingCart())
    return {
        saveContact: () => dispatch(saveContact()),
        setNameContact: event => dispatch(setNameContact(event)),
        setSurnameContact: event => dispatch(setSurnameContact(event)),
        setEmailContact: event => dispatch(setEmailContact(event)),
        setMessageContact: event => dispatch(setMessageContact(event)),
        setTerminosContact: () => dispatch(setTerminosContact()),
        setValidateCaptcha: () => dispatch(setValidateCaptcha())
    }
}

export default connect(
    mapState,
    mapDispatch
)(Contactanos)
