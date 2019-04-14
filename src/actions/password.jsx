import { apiPassword } from '../config/api'
import { push } from 'connected-react-router'
import toastr from 'toastr'

export const getValidToken = () => {
    return (dispatch, getState) => {
        const { token } = getState().password
        apiPassword
            .get('user/valid/' + token)
            .then(response => {
                dispatch({ type: 'SET_VALID_TOKEN', value: true })
                dispatch({ type: 'SET_LOADING_PASSWORD', value: false })
            })
            .catch(err => {
                dispatch({ type: 'SET_VALID_TOKEN', value: false })
                dispatch({ type: 'SET_LOADING_PASSWORD', value: false })
            })
    }
}
export const setPassPassword = event => {
    return {
        type: 'SET_PASS_PASSWORD',
        value: event.target.value
    }
}
export const setConfirmarPassword = event => {
    return {
        type: 'SET_CONFIRMAR_PASSWORD',
        value: event.target.value
    }
}
export const setTokenPassword = value => {
    return {
        type: 'SET_TOKEN_PASSWORD',
        value
    }
}

export const setModalPassword = value => {
    return {
        type: 'SET_MODAL_PASSWORD',
        value: value
    }
}

export const toggleModalPassword = () => {
    return {
        type: 'TOGGLE_MODAL_PASSWORD'
    }
}
export const setEnviar = () => {
    return (dispatch, getState) => {
        const { pass, confirmar, token } = getState().password
        const validate = new RegExp('^(?=.*[a-z])(?=.*[A-Z])(?=.*[0-9])')

        if (confirmar === '') {
            dispatch({
                type: 'SET_VALID_CONFIRM',
                value: true
            })
            dispatch({
                type: 'SET_MESSAGE_CONFIRM',
                value: 'Es obligatorio llenar el campo'
            })
        } else {
            dispatch({
                type: 'SET_VALID_CONFIRM',
                value: false
            })
            dispatch({
                type: 'SET_MESSAGE_CONFIRM',
                value: ''
            })
        }
        if (pass === '') {
            dispatch({
                type: 'SET_VALID_CHARACTERS',
                value: true
            })
            dispatch({
                type: 'SET_MESSAGE_CHARACTERS',
                value: 'Es obligatorio llenar el campo'
            })
        }
        if (pass != '') {
            dispatch({
                type: 'SET_VALID_CHARACTERS',
                value: false
            })
            dispatch({
                type: 'SET_MESSAGE_CHARACTERS',
                value: ''
            })
        }

        if (pass.length < 8) {
            dispatch({
                type: 'SET_VALID_CHARACTERS',
                value: true
            })
            if (pass == '') {
                dispatch({
                    type: 'SET_MESSAGE_CHARACTERS',
                    value: 'Es obligatorio seleccionar el campo'
                })
            } else {
                dispatch({
                    type: 'SET_MESSAGE_CHARACTERS',
                    value: 'Ingresa almenos 8 caracteres'
                })
            }
        }
        if (!validate.test(pass)) {
            toastr.warning(
                'Debe de tener al menos una minúscula, ' +
                    'una mayúscula y un número'
            )
            return
        }
        dispatch({
            type: 'SET_VALID_CHARACTERS',
            value: false
        })
        dispatch({
            type: 'SET_MESSAGE_CHARACTERS',
            value: ''
        })
        if (confirmar !== pass) {
            dispatch({
                type: 'SET_VALID_CONFIRM',
                value: true
            })
            if (confirmar == '') {
                dispatch({
                    type: 'SET_MESSAGE_CONFIRM',
                    value: 'Es obligatorio llenar el campo'
                })
            } else {
                dispatch({
                    type: 'SET_MESSAGE_CONFIRM',
                    value: 'Las contraseñas no coinciden'
                })
            }
            return
        }
        dispatch({ type: 'SET_CONSULTA_PASSWORD', value: true })
        apiPassword
            .put('user/changepassword/' + token, {
                password: pass
            })
            .then(response => {
                dispatch({ type: 'TOGGLE_MODAL_PASSWORD' })
                dispatch({ type: 'SET_PASS_PASSWORD', value: '' })
                dispatch({ type: 'SET_CONFIRMAR_PASSWORD', value: '' })
                dispatch({ type: 'SET_CONSULTA_PASSWORD', value: false })
                dispatch({ type: 'SET_ALERT_PASSWORD_CONFIRM', value: true })
                // dispatch(push('/login'))
            })
            .catch(err => {
                dispatch({ type: 'SET_CONSULTA_PASSWORD', value: false })
                toastr.error(err.response.data.message)
            })
    }
}

export const redirectLogin = () => {
    return dispatch => {
        dispatch({ type: 'SET_ALERT_PASSWORD_CONFIRM', value: false })
        dispatch(push('/login'))
    }
}
