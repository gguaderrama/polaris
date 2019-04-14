import { push } from 'connected-react-router'
import api from '../config/api'
import toastr from 'toastr'
import { types, endpoints } from '../config/constants'

export const setLogged = () => {
    return (dispatch, getState) => {
        const { correo } = getState().perfil
        if (sessionStorage.getItem('access_token')) {
            if (correo === '') {
                api.get(
                    endpoints.CUSTOMER_EMAIL +
                        sessionStorage.getItem('usermail')
                )
                    .then(res => {
                        console.log(res.data.data)
                        dispatch({
                            type: 'SET_RFC_PERFIL',
                            value: res.data.data.rfc
                        })
                        dispatch({
                            type: types.SET_ID_PERFIL,
                            value: res.data.data.id
                        })
                        dispatch({
                            type: types.SET_NOMBRE_PERFIL,
                            value: res.data.data.name
                        })
                        dispatch({
                            type: types.SET_APELLIDOS_PERFIL,
                            value: res.data.data.surname
                        })
                        dispatch({
                            type: types.SET_CORREO_PERFIL,
                            value: res.data.data.email
                        })
                        dispatch({
                            type: types.SET_TELEFONO_PERFIL,
                            value: res.data.data.phoneNumber
                        })
                        dispatch({
                            type: types.SET_TALLA_PERFIL,
                            value: res.data.data.shoesSize
                        })
                        dispatch({
                            type: types.SET_NICKNAME_PERFIL,
                            value: res.data.data.nickname
                        })
                        dispatch({
                            type: types.SET_NACIMIENTO_PERFIL,
                            value: res.data.data.birth
                        })
                        dispatch({
                            type: types.SET_GENERO_PERFIL,
                            value: res.data.data.gender
                        })
                    })
                    .catch(err => {
                        sessionStorage.clear()
                        toastr.error(
                            'Datos incorrectos, favor de verificarlos. (' +
                                err.response.data.message +
                                ')'
                        )
                        dispatch({
                            type: types.SET_CONSULTA_LOGIN,
                            value: false
                        })
                    })
            }
            dispatch({
                type: types.SET_LOGGED,
                value: true
            })
        } else {
            dispatch({
                type: types.SET_LOGGED,
                value: false
            })
        }
    }
}
export const toggle = () => {
    return {
        type: types.TOGGLE
    }
}
export const setMenu = value => {
    return {
        type: types.SET_MENU_NAVIGATION,
        value
    }
}
export const navigate = opcion => {
    return dispatch => {
        if (opcion.seccion === '') {
            sessionStorage.clear()
            dispatch(push('/login'))
        } else if (opcion.seccion === '/login') {
            dispatch({ type: 'RESET_FORM_LOGIN' })
            dispatch(push('/login'))
        } else if (opcion.seccion === '/eventos') {
            dispatch({
                type: 'SET_EVENT_VIEW',
                value: 'list' })
            dispatch(push('/eventos'))
        } else {
            dispatch(push(opcion.seccion))
        }
        if (
            opcion.seccion !== '/' &&
            opcion.seccion !== '/perfil' &&
            opcion.seccion !== '/carrito'
        ) {
            setTimeout(() => {
                dispatch({ type: types.SET_MENU_NAVIGATION, value: false })
            }, 150)
        }
    }
}
