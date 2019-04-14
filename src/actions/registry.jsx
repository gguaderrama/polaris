import { push } from 'connected-react-router'
import api, { apiLogin, apiPassword } from '../config/api'
import qs from 'querystring'
import toastr from 'toastr'
import moment from 'moment'
import { regex } from '../config/constants'

const validateMail = regex.EMAIL

export const registro = () => {
    return (dispatch, getState) => {
        const {
            nombre,
            apellido,
            correo,
            fecha,
            sexo,
            talla,
            interests,
            nickname,
            acepto
        } = getState().login
        if (nombre === '') {
            toastr.warning('Ingresa tu <strong>Nombre<strong/>')
            return
        }
        if (talla === '') {
            toastr.warning(
                'Es necesario seleccionar <strong>talla de zapatos<strong/>'
            )
            return
        }
        if (apellido === '') {
            toastr.warning('Ingresa tus <strong>Apellidos<strong/>')
            return
        }
        if (nickname === '') {
            toastr.warning('Ingresa tu <strong>Nickname<strong/>')
            return
        }
        if (!validateMail.test(correo)) {
            toastr.warning(
                'Ingresa un <strong>formato de correo válido<strong/>'
            )
            return
        }
        if (!acepto) {
            toastr.warning('Es necesario aceptar términos')
            return
        }
        dispatch({ type: 'SET_CONSULTA_LOGIN', value: true })
        api.post('customer', {
            name: nombre,
            surname: apellido,
            email: correo,
            birth: moment(fecha).format('YYYY-MM-DD'),
            gender: sexo,
            shoesSize: talla,
            interests: interests,
            nickname
        })
            .then(() => {
                dispatch({ type: 'TOGGLE_MODAL_REGISTRO' })
                dispatch({ type: 'CHANGE_FORM_LOGIN' })
                dispatch({ type: 'SET_NOMBRE_REGISTRO', value: '' })
                dispatch({ type: 'SET_APELLIDO_REGISTRO', value: '' })
                dispatch({ type: 'SET_NICKNAME_REGISTRO', value: '' })
                dispatch({ type: 'SET_SEXO_REGISTRO', value: '' })
                dispatch({ type: 'SET_FECHA_REGISTRO', value: null })
                dispatch({ type: 'SET_CORREO_REGISTRO', value: '' })
                dispatch({ type: 'SET_TALLA_REGISTRO', value: 22 })
                dispatch({ type: 'SET_ACEPTO_REGISTRO' })
                dispatch({ type: 'SET_CONSULTA_LOGIN', value: false })
            })
            .catch(err => {
                dispatch({ type: 'SET_CONSULTA_LOGIN', value: false })
                toastr.error(err.response.data.message)
            })
    }
}
export const setNombreRegistro = event => {
    return (dispatch, getState) => {
        let valor = event.target.value
        const validate = new RegExp('^(?=.*[0-9])')
        if (validate.test(valor)) {
            dispatch({
                type: 'SET_MENSAJE_NOMBRE_LOGIN',
                value: 'Solo acepta letras'
            })
            dispatch({ type: 'SET_VALID_NAME_REGISTRATION', value: true })
            return
        } else {
            dispatch({ type: 'SET_MESSAGE_NAME_REGISTRATION', value: '' })
        }
        dispatch({
            type: 'SET_NOMBRE_REGISTRO',
            value: valor
        })
    }
}
export const setApellidoRegistro = event => {
    return (dispatch, getState) => {
        let valor = event.target.value
        const validate = new RegExp('^(?=.*[0-9])')
        if (validate.test(valor)) {
            dispatch({
                type: 'SET_MENSAJE_APELLIDO_LOGIN',
                value: 'Solo acepta letras'
            })
            dispatch({ type: 'SET_VALID_SURNAME_REGISTRATION', value: true })
            return
        } else {
            dispatch({ type: 'SET_MESSAGE_SURNAME_REGISTRATION', value: '' })
        }
        dispatch({
            type: 'SET_APELLIDO_REGISTRO',
            value: valor
        })
    }
}
export const setCorreoRegistro = event => {
    return dispatch => {
        let valor = event.target.value
        if (!validateMail.test(valor)) {
            dispatch({
                type: 'SET_MESSAGE_EMAIL_REGISTRATION',
                value: 'Ingresa un correo electrónico válido'
            })
            dispatch({ type: 'SET_VALID_EMAIL_REGISTRATION', value: true })
        } else {
            dispatch({ type: 'SET_MESSAGE_EMAIL_REGISTRATION', value: '' })
        }
        dispatch({
            type: 'SET_CORREO_REGISTRO',
            value: valor
        })
        dispatch({
            type: 'SET_CORREO_ALERT',
            value: valor
        })
    }
}
export const setNicknameRegistro = event => {
    return {
        type: 'SET_NICKNAME_REGISTRO',
        value: event.target.value
    }
}
export const setSexoRegistro = event => {
    return {
        type: 'SET_SEXO_REGISTRO',
        value: event.target.value
    }
}
export const setFechaRegistro = date => {
    return {
        type: 'SET_FECHA_REGISTRO',
        value: date
    }
}
export const setTallaRegistro = event => {
    return {
        type: 'SET_TALLA_REGISTRO',
        value: event.target.value
    }
}
export const setActivacionRegistro = event => {
    return {
        type: 'SET_ACTIVACION_REGISTRO',
        value: event.target.value
    }
}
export const setAceptoRegistro = value => {
    return {
        type: 'SET_ACEPTO_REGISTRO',
        value: value
    }
}
export const setOcupacionRegistro = event => {
    return {
        type: 'SET_OCUPACION_REGISTRO',
        value: event.target.value
    }
}
export const getInteresesRegistro = val => {
    return (dispatch, getState) => {
        api.get('interest').then(response => {
            dispatch({
                type: 'GET_INTERESES_REGISTRO',
                value: response.data.data
            })
        })
    }
}

export const setValidIntereses = val => {
    return dispatch => {
        dispatch({
            type: 'SET_VALID_INTERES'
        })
    }
}
export const setInteresesRegistro = val => {
    return (dispatch, getState) => {
        const { interests } = getState().login
        let busqueda = interests.map(e => e.id).indexOf(val)
        if (busqueda !== -1) {
            interests.splice(busqueda, 1)
        } else {
            interests.push({ id: val })
        }
        dispatch({
            type: 'SET_INTERESES_REGISTRO',
            value: interests
        })
    }
}
export const toggleModalRegistro = () => {
    return dispatch => {
        dispatch({ type: 'SET_CORREO_REGISTRO', value: '' })
        dispatch({ type: 'TOGGLE_MODAL_REGISTRO' })
    }
}
