import React from 'react'
import { connect } from 'react-redux'
import Password from '../components/password'
import {
    setPassPassword,
    setConfirmarPassword,
    setEnviar,
    setTokenPassword,
    toggleModalPassword,
    getValidToken,
    redirectLogin,
    setModalPassword
} from '../actions'
import { startOfWeekWithOptions } from 'date-fns/esm/fp'

const mapState = state => {
    return {
        pass: state.password.pass,
        confirmar: state.password.confirmar,
        modal: state.password.modal,
        consulta: state.password.consulta,
        valid: state.password.valid,
        loading: state.password.loading,
        validcharacters: state.password.validcharacters,
        message_characters: state.password.message_characters,
        confirm: state.password.confirm,
        message_confirm: state.password.message_confirm,
        alert_password_confirm: state.password.alert_password_confirm,
        modal_value: state.password.modal_value
    }
}

const mapDispatch = (dispatch, props) => {
    dispatch(setTokenPassword(props.match.params.token))
    dispatch(setModalPassword(props.match.params.modal_value))
    dispatch(getValidToken())
    return {
        setPassPassword: event => dispatch(setPassPassword(event)),
        setConfirmarPassword: event => dispatch(setConfirmarPassword(event)),
        setEnviar: () => dispatch(setEnviar()),
        toggleModalPassword: () => dispatch(toggleModalPassword()),
        redirectLogin: () => dispatch(redirectLogin())
    }
}

export default connect(
    mapState,
    mapDispatch
)(Password)
