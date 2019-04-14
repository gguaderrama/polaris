import { push } from 'connected-react-router'
import api, { apiLogin, apiPassword } from '../config/api'
import qs from 'querystring'
import toastr from 'toastr'
import { regex } from '../config/constants'
import moment from 'moment'

const validateMail = regex.EMAIL

export const recoverPassword = () => {
    return (dispatch, getState) => {
        const { correo } = getState().perfil
        apiPassword.get('user/forgot/' + correo).then(response => {
            dispatch({
                type: 'SET_ALERT_CHANGE_PASS'
            })
        })
    }
}

export const setUserLogin = event => {
    return {
        type: 'SET_USER_LOGIN',
        value: event.target.value
    }
}
export const setPassLogin = event => {
    return {
        type: 'SET_PASS_LOGIN',
        value: event.target.value
    }
}
export const enterPassLogin = event => {
    return dispatch => {
        let code = event.keyCode ? event.keyCode : event.which
        if (code == 13) {
            dispatch(login())
        }
    }
}
export const changeFormLogin = () => {
    return dispatch => {
        dispatch({ type: 'SET_MENSAJE_PASS_LOGIN', value: '' })
        dispatch({ type: 'SET_VALID_PASS_LOGIN', value: false })
        dispatch({ type: 'SET_MENSAJE_USER_LOGIN', value: '' })
        dispatch({ type: 'SET_VALID_USER_LOGIN', value: false })
        dispatch({ type: 'SET_USER_LOGIN', value: '' })
        dispatch({ type: 'SET_PASS_LOGIN', value: '' })

        dispatch({ type: 'SET_NICKNAME_REGISTRO', value: '' })
        dispatch({ type: 'SET_NOMBRE_REGISTRO', value: '' })
        dispatch({ type: 'SET_NOMBRE_REGISTRO', value: '' })
        dispatch({ type: 'SET_APELLIDO_REGISTRO', value: '' })
        dispatch({ type: 'SET_CORREO_REGISTRO', value: '' })
        dispatch({ type: 'SET_FECHA_REGISTRO', value: null })
        dispatch({ type: 'SET_SEXO_REGISTRO', value: '' })
        dispatch({ type: 'SET_TALLA_REGISTRO', value: '' })
        dispatch({ type: 'SET_ACEPTO_REGISTRO', value: false })
        dispatch({ type: 'CHANGE_FORM_LOGIN', value: false })
        dispatch({ type: 'SET_INTERESES_REGISTRO', value: [] })
    }
}

export const changeFormIntereses = () => {
    return (dispatch, getState) => {
        let isLegal
        const {
            nickname,
            nombre,
            apellido,
            correo,
            fecha,
            sexo
        } = getState().login
        if (nickname == '') {
            dispatch({
                type: 'SET_VALID_NICKNAME_REGISTRATION',
                value: true
            })
            dispatch({
                type: 'VALID_MESSAGE_FORM',
                value: 'Es obligatorio llenar el campo'
            })
        } else {
            dispatch({
                type: 'SET_VALID_SURNAME_REGISTRATION',
                value: false
            })
        }

        if (nombre == '') {
            dispatch({
                type: 'SET_VALID_NAME_REGISTRATION',
                value: true
            })
            dispatch({
                type: 'SET_MENSAJE_NOMBRE_LOGIN',
                value: 'Es obligatorio llenar el campo'
            })
        } else {
            dispatch({
                type: 'SET_VALID_NAME_REGISTRATION',
                value: false
            })
            dispatch({
                type: 'SET_MENSAJE_NOMBRE_LOGIN',
                value: ''
            })
        }

        if (apellido == '') {
            dispatch({
                type: 'SET_VALID_SURNAME_REGISTRATION',
                value: true
            })
            dispatch({
                type: 'SET_MENSAJE_APELLIDO_LOGIN',
                value: 'Es obligatorio llenar el campo'
            })
        } else {
            dispatch({
                type: 'SET_VALID_SURNAME_REGISTRATION',
                value: false
            })
            dispatch({
                type: 'SET_MENSAJE_APELLIDO_LOGIN',
                value: ''
            })
        }

        if (sexo == '') {
            dispatch({
                type: 'SET_VALID_SEXO',
                value: true
            })
            dispatch({
                type: 'VALID_MESSAGE_SEXO',
                value: 'Es obligatorio seleccionar una opción'
            })
        } else {
            dispatch({
                type: 'SET_VALID_SEXO',
                value: false
            })
        }

        if (!validateMail.test(correo)) {
            if (correo == '') {
                dispatch({
                    type: 'SET_VALID_EMAIL_REGISTRATION',
                    value: true
                })
                dispatch({
                    type: 'VALID_MESSAGE_CORREO_FORM',
                    value: 'Es obligatorio llenar el campo'
                })
            } else {
                dispatch({
                    type: 'SET_VALID_EMAIL_REGISTRATION',
                    value: true
                })
                dispatch({
                    type: 'VALID_MESSAGE_CORREO_FORM',
                    value: ' Formato de correo incorrecto'
                })
            }
        } else {
            dispatch({
                type: 'SET_VALID_EMAIL_REGISTRATION',
                value: false
            })
        }
        if (fecha == null) {
            dispatch({
                type: 'SET_VALID_BIRTH_REGISTRATION',
                value: true
            })
            dispatch({
                type: 'VALID_MESSAGE_FORM',
                value: 'Es obligatorio llenar el campo'
            })
        } else {
            let age = moment().diff(moment(fecha, 'DD-MM-YYYY'), 'years')
            isLegal = age >= 18

            if (isLegal == false) {
                toastr.error(
                    'Lamentamos informarle que es necesario ' +
                        'ser mayor de edad para poder registrarse'
                )
            }

            dispatch({
                type: 'SET_VALID_BIRTH_REGISTRATION',
                value: false
            })
        }
        if (
            nombre != '' &&
            nickname != '' &&
            fecha != null &&
            validateMail.test(correo) == true &&
            apellido != '' &&
            sexo != '' &&
            isLegal != false
        ) {
            api.get('customer/valid/' + correo)
                .then(response => {
                    if (response.data.code == 200) {
                        dispatch({
                            type: 'CHANGE_FORM_INTERESES'
                        })
                    }
                })
                .catch(err => {
                    toastr.warning(err.response.data.message)
                })
        }
    }
}

export const setClaseReserva = event => {
    return {
        type: 'SET_CLASE_RESERVA',
        value: event.target.value
    }
}
export const setInstructorReserva = event => {
    return {
        type: 'SET_INSTRUCTOR_RESERVA',
        value: event.target.value
    }
}
export const setSucursalReserva = event => {
    return {
        type: 'SET_SUCURSAL_RESERVA',
        value: event.target.value
    }
}
export const login = () => {
    return (dispatch, getState) => {
        const { user, pass } = getState().login
        if (pass === '' && user == '') {
            dispatch({
                type: 'SET_MENSAJE_PASS_LOGIN',
                value: 'Es obligatorio llenar el campo'
            })
            dispatch({
                type: 'SET_MENSAJE_USER_LOGIN',
                value: 'Es obligatorio llenar el campo'
            })
            dispatch({ type: 'SET_VALID_USER_LOGIN', value: true })
            dispatch({ type: 'SET_VALID_PASS_LOGIN', value: true })
            return
        } else {
            dispatch({ type: 'SET_MENSAJE_USER_LOGIN', value: '' })
            dispatch({ type: 'SET_VALID_USER_LOGIN', value: false })
        }
        if (user === '') {
            dispatch({
                type: 'SET_MENSAJE_USER_LOGIN',
                value: 'Es obligatorio llenar el campo'
            })
            dispatch({ type: 'SET_VALID_USER_LOGIN', value: true })
            return
        } else {
            dispatch({ type: 'SET_MENSAJE_USER_LOGIN', value: '' })
            dispatch({ type: 'SET_VALID_USER_LOGIN', value: false })
        }

        if (pass === '') {
            dispatch({
                type: 'SET_MENSAJE_PASS_LOGIN',
                value: 'Es obligatorio llenar el campo'
            })
            dispatch({ type: 'SET_VALID_PASS_LOGIN', value: true })
        } else {
            dispatch({ type: 'SET_MENSAJE_PASS_LOGIN', value: '' })
            dispatch({ type: 'SET_VALID_PASS_LOGIN', value: false })
        }
        if (!validateMail.test(user)) {
            dispatch({
                type: 'SET_MENSAJE_USER_LOGIN',
                value: 'Formato de correo incorrecto'
            })
            dispatch({ type: 'SET_VALID_USER_LOGIN', value: true })
            return
        } else {
            dispatch({ type: 'SET_MENSAJE_USER_LOGIN', value: '' })
            dispatch({ type: 'SET_VALID_USER_LOGIN', value: false })
        }
        dispatch({ type: 'SET_CONSULTA_LOGIN', value: true })
        apiLogin
            .post(
                'login',
                qs.stringify({
                    grant_type: 'password',
                    username: user,
                    password: pass
                })
            )
            .then(response => {
                sessionStorage.setItem(
                    'access_token',
                    response.data.access_token
                )
                sessionStorage.setItem('usermail', response.data.user.username)
                dispatch({ type: 'SET_USER_LOGIN', value: '' })
                dispatch({ type: 'SET_PASS_LOGIN', value: '' })
                api.get('customer/email/' + response.data.user.username)
                    .then(res => {
                        sessionStorage.setItem(
                            'nickname',
                            res.data.data.nickname
                        )
                        dispatch({
                            type: 'SET_RFC_PERFIL',
                            value: res.data.data.rfc
                        })
                        dispatch({
                            type: 'SET_ID_PERFIL',
                            value: res.data.data.id
                        })
                        dispatch({
                            type: 'SET_NOMBRE_PERFIL',
                            value: res.data.data.name
                        })
                        dispatch({
                            type: 'SET_APELLIDOS_PERFIL',
                            value: res.data.data.surname
                        })
                        dispatch({
                            type: 'SET_CORREO_PERFIL',
                            value: res.data.data.email
                        })
                        dispatch({
                            type: 'SET_TELEFONO_PERFIL',
                            value: res.data.data.phoneNumber
                        })
                        dispatch({
                            type: 'SET_TALLA_PERFIL',
                            value: res.data.data.shoesSize
                        })
                        dispatch({
                            type: 'SET_NICKNAME_PERFIL',
                            value: res.data.data.nickname
                        })
                        dispatch({
                            type: 'SET_NACIMIENTO_PERFIL',
                            value: res.data.data.birth
                        })
                        dispatch({
                            type: 'SET_GENERO_PERFIL',
                            value: res.data.data.gender
                        })
                        dispatch({ type: 'SET_MENU_OPTIONS' })
                        dispatch({ type: 'SET_CONSULTA_LOGIN', value: false })
                        dispatch(push('/perfil'))
                    })
                    .catch(err => {
                        sessionStorage.clear()
                        toastr.error(err.response.data.message)
                        dispatch({ type: 'SET_CONSULTA_LOGIN', value: false })
                    })
            })
            .catch(err => {
                toastr.error(err.response.data.message)
                dispatch({ type: 'SET_CONSULTA_LOGIN', value: false })
            })
    }
}

export const setForgotPassword = () => {
    return {
        type: 'SET_FORGOT_PASSWORD'
    }
}
export const setForgotEmail = event => {
    return {
        type: 'SET_FORGOT_EMAIL',
        value: event.target.value
    }
}
export const toggleModalForgotPassword = () => {
    return {
        type: 'SET_MODAL_FORGOT_PASSWORD'
    }
}
export const sendForgotPassword = () => {
    return (dispatch, getState) => {
        const { user } = getState().login
        if (user == '') {
            dispatch({
                type: 'SET_MENSAJE_USER_LOGIN',
                value: 'Es obligatorio llenar el campo'
            })
            dispatch({ type: 'SET_VALID_USER_LOGIN', value: true })
            return
        } else {
            dispatch({ type: 'SET_MENSAJE_USER_LOGIN', value: '' })
            dispatch({ type: 'SET_VALID_USER_LOGIN', value: false })
        }
        if (!validateMail.test(user)) {
            dispatch({
                type: 'SET_MENSAJE_USER_LOGIN',
                value: 'Formato de correo incorrecto'
            })
            dispatch({ type: 'SET_VALID_USER_LOGIN', value: true })
            return
        } else {
            dispatch({ type: 'SET_MENSAJE_USER_LOGIN', value: '' })
            dispatch({ type: 'SET_VALID_USER_LOGIN', value: false })
        }
        dispatch({ type: 'SET_QUERY_FORGOT_PASSWORD', value: true })
        apiPassword
            .get('user/forgot/' + user)
            .then(response => {
                dispatch({ type: 'SET_QUERY_FORGOT_PASSWORD', value: false })
                dispatch({ type: 'SET_MESSAGE_FORGOT_EMAIL', value: '' })
                dispatch({ type: 'SET_VALID_FORGOT_EMAIL', value: false })
                dispatch({ type: 'SET_MODAL_FORGOT_PASSWORD', value: true })
                dispatch({ type: 'SET_USER_LOGIN', value: '' })
                dispatch({ type: 'SET_FORGOT_PASSWORD' })
            })
            .catch(err => {
                if (err.response.data.code == '400') {
                    toastr.warning(err.response.data.message)
                }
                dispatch({
                    type: 'SET_MESSAGE_FORGOT_EMAIL',
                    value: err.response.data.message
                })
                dispatch({ type: 'SET_VALID_FORGOT_EMAIL', value: true })
                dispatch({ type: 'SET_QUERY_FORGOT_PASSWORD', value: false })
            })
    }
}
