import { push } from 'connected-react-router'
import api, { apiLogin, apiPassword } from '../config/api'
import messages from '../config/messages'
import toastr from 'toastr'
import { regex } from '../config/constants'
import types from '../config/types'

const validateMail = regex.EMAIL

export const setNameContact = event => {
    return dispatch => {
        let valor = event.target.value
        const validate = new RegExp('^(?=.*[0-9])')
        if (validate.test(valor)) {
            dispatch({
                type: types.SET_CONTACT_NAME_VALID,
                value: true
            })
            dispatch({
                type: 'SET_MESSAGE_NOMBRE_CONTACT',
                value: 'Solo acepta letras'
            })
            return
        } else {
            dispatch({
                type: 'SET_CONTACT_NAME_VALID',
                value: false
            })
            dispatch({
                type: 'SET_MESSAGE_NOMBRE_CONTACT',
                value: ''
            })

            dispatch({ type: 'SET_NAME_CONTACT', value: event.target.value })
        }
    }
}
export const setSurnameContact = event => {
    return dispatch => {
        let valor = event.target.value
        const validate = new RegExp('^(?=.*[0-9])')
        if (validate.test(valor)) {
            dispatch({
                type: 'SET_VALID_SURNAME_CONTACT',
                value: true
            })
            dispatch({
                type: 'SET_MESSAGE_SURNAME_CONTACT',
                value: 'Solo acepta letras'
            })
            return
        } else {
            dispatch({
                type: 'SET_VALID_SURNAME_CONTACT',
                value: false
            })
            dispatch({
                type: 'SET_MESSAGE_SURNAME_CONTACT',
                value: ''
            })

            dispatch({ type: 'SET_SURNAME_CONTACT', value: event.target.value })
        }
    }
}
export const setEmailContact = event => {
    return dispatch => {
        if (!validateMail.test(event.target.value)) {
            dispatch({
                type: 'SET_VALID_EMAIL_CONTACT',
                value: true
            })
            dispatch({
                type: 'SET_MESSAGE_EMAIL_CONTACT',
                value: 'Debe introducir un correo válido'
            })
        } else {
            dispatch({
                type: 'SET_VALID_EMAIL_CONTACT',
                value: false
            })
            dispatch({
                type: 'SET_MESSAGE_EMAIL_CONTACT',
                value: ''
            })
        }
        dispatch({
            type: 'SET_EMAIL_CONTACT',
            value: event.target.value
        })
    }
}
export const setMessageContact = event => {
    return dispatch => {
        if (event.target.value.length == 0) {
            dispatch({
                type: 'SET_VALID_MENSAJE_CONTACT',
                value: true
            })
            dispatch({
                type: 'SET_MESSAGE_MSG_CONTACT',
                value: 'El campo es obligatorio'
            })
        } else {
            dispatch({
                type: 'SET_VALID_MENSAJE_CONTACT',
                value: false
            })
            dispatch({
                type: 'SET_MESSAGE_MSG_CONTACT',
                value: ''
            })
        }
        dispatch({
            type: 'SET_MENSAJE_CONTACT',
            value: event.target.value
        })
    }
}
export const setTerminosContact = () => {
    return {
        type: 'SET_TERMINOS_CONTACT'
    }
}
export const setValidateCaptcha = () => {
    return dispatch => {
        dispatch({
            action: 'SET_CAPTCHA_CONTACT',
            value: true
        })
    }
}
export const clearValues = () => {
    return (dispatch, getState) => {
        dispatch({
            type: 'SET_TERMINOS_CONTACT',
            value: ''
        })
        dispatch({
            type: 'SET_EMAIL_CONTACT',
            value: ''
        })
        dispatch({
            type: 'SET_NAME_CONTACT',
            value: ''
        })
        dispatch({
            type: 'SET_SURNAME_CONTACT',
            value: ''
        })
        dispatch({
            type: 'SET_MENSAJE_CONTACT',
            value: ''
        })
    }
}

export const saveContact = () => {
    return (dispatch, getState) => {
        const {
            surname,
            mensaje,
            confirm,
            email,
            nombre_contact
        } = getState().contactanos

        if (mensaje.length == 0) {
            dispatch({
                type: 'SET_VALID_MENSAJE_CONTACT',
                value: true
            })
            dispatch({
                type: 'SET_MESSAGE_MSG_CONTACT',
                value: 'El campo es obligatorio'
            })
        } else {
            dispatch({
                type: 'SET_VALID_MENSAJE_CONTACT',
                value: false
            })
            dispatch({
                type: 'SET_MESSAGE_MSG_CONTACT',
                value: ''
            })
        }
        if (surname == '') {
            dispatch({
                type: 'SET_VALID_SURNAME_CONTACT',
                value: true
            })
            dispatch({
                type: 'SET_MESSAGE_SURNAME_CONTACT',
                value: 'El campo es obligatorio'
            })
        } else {
            dispatch({
                type: 'SET_VALID_SURNAME_CONTACT',
                value: false
            })
            dispatch({
                type: 'SET_MESSAGE_SURNAME_CONTACT',
                value: ''
            })
        }
        if (nombre_contact == '') {
            dispatch({
                type: 'SET_CONTACT_NAME_VALID',
                value: true
            })
            dispatch({
                type: 'SET_MESSAGE_NOMBRE_CONTACT',
                value: 'El campo es obligatorio'
            })
        } else {
            dispatch({
                type: 'SET_CONTACT_NAME_VALID',
                value: false
            })
            dispatch({
                type: 'SET_MESSAGE_NOMBRE_CONTACT',
                value: ''
            })
        }
        if (!validateMail.test(email)) {
            dispatch({
                type: 'SET_VALID_EMAIL_CONTACT',
                value: true
            })
            dispatch({
                type: 'SET_MESSAGE_EMAIL_CONTACT',
                value: 'Debe introducir un correo válido'
            })
        } else {
            dispatch({
                type: 'SET_VALID_EMAIL_CONTACT',
                value: false
            })
            dispatch({
                type: 'SET_MESSAGE_EMAIL_CONTACT',
                value: ''
            })
        }
        if (
            nombre_contact == '' ||
            !validateMail.test(email) ||
            mensaje == ''
        ) {
            return
        }
        if (!confirm) {
            toastr.warning('Debe aceptar el aviso de privacidad')
            return
        }
        let captcha = grecaptcha.getResponse()
        if (captcha == '') {
            toastr.warning(messages.CAPTCHA)
            return
        }
        api.post('contactUs', {
            email: email,
            message: mensaje,
            surname: surname,
            name: nombre_contact
        })
            .then(response => {
                dispatch(clearValues())
                toastr.success(response.data.message)
                grecaptcha.reset()
            })
            .catch(err => {
                // toastr.success(err.response.data.message)
            })
    }
}
