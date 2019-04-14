import { push } from 'connected-react-router'
import api from '../config/api'
import toastr from 'toastr'
import moment from 'moment'
import { cleanAll } from '.'
import * as loadImage from 'blueimp-load-image'
import types from '../config/types'

export const setDateCalendarProximas = val => {
    return {
        type: 'SET_DATE_CALENDAR_PROXIMAS',
        value: val
    }
}
export const setDateCalendarPasadas = val => {
    return {
        type: 'SET_DATE_CALENDAR_PASADAS',
        value: val
    }
}
export const setTabPerfil = tab => {
    return dispatch => {
        dispatch(cleanAll())
        dispatch({
            type: 'SET_TAB_PERFIL',
            value: tab
        })
    }
}
export const setModalFace = val => {
    return dispatch => {
        dispatch({
            type: 'SET_VALID_MODAL_FACE',
            value: true
        })
        dispatch({
            type: 'SET_MODAL_FACE',
            value: val
        })
    }
}
export const setValidModalFace = val => {
    return {
        type: 'SET_VALID_MODAL_FACE',
        value: val
    }
}
export const setModalAvatar = val => {
    return {
        type: 'SET_MODAL_AVATAR',
        value: val
    }
}
export const setNombrePerfil = event => {
    return {
        type: 'SET_NOMBRE_PERFIL',
        value: event.target.value
    }
}
export const setApellidosPerfil = event => {
    return {
        type: 'SET_APELLIDOS_PERFIL',
        value: event.target.value
    }
}
export const setRfcPerfil = event => {
    return {
        type: 'SET_RFC_PERFIL',
        value: event.target.value
    }
}
export const setTelefonoPerfil = event => {
    return {
        type: 'SET_TELEFONO_PERFIL',
        value: event.target.value
    }
}
export const setTallaPerfil = event => {
    return {
        type: 'SET_TALLA_PERFIL',
        value: event.target.value
    }
}
export const setCorreoPerfil = event => {
    return {
        type: 'SET_CORREO_PERFIL',
        value: event.target.value
    }
}
export const setMensajePerfil = event => {
    return {
        type: 'SET_MENSAJE_PERFIL',
        value: event.target.value
    }
}
export const setNicknamePerfil = event => {
    return {
        type: 'SET_NICKNAME_PERFIL',
        value: event.target.value
    }
}
export const getAvatar = () => {
    return dispatch => {
        api.get('avatar')
            .then(response => {})
            .catch(err => {})
    }
}
export const updateAvatar = () => {
    return dispatch => {
        api.get('avatar')
            .then(response => {})
            .catch(err => {})
    }
}
export const logOut = () => {
    return dispatch => {
        sessionStorage.clear()
        dispatch({ type: 'SET_LOGGED', value: false })
        dispatch({ type: 'SET_ID_PERFIL', value: '' })
        dispatch({ type: 'SET_NOMBRE_PERFIL', value: '' })
        dispatch({ type: 'SET_APELLIDOS_PERFIL', value: '' })
        dispatch({ type: 'SET_CORREO_PERFIL', value: '' })
        dispatch({ type: 'SET_TELEFONO_PERFIL', value: '' })
        dispatch({ type: 'SET_TALLA_PERFIL', value: '' })
        dispatch({ type: 'SET_NICKNAME_PERFIL', value: '' })
        dispatch({ type: 'SET_NACIMIENTO_PERFIL', value: '' })
        dispatch({ type: 'SET_GENERO_PERFIL', value: '' })
        dispatch({ type: types.SET_SHOPPING_CART, value: { orderItems: [] } })
        dispatch({ type: types.SET_SHOPPING_CART_SUBTOTAL, value: 0 })
        dispatch({ type: types.SET_SHOPPING_CART_TOTAL, value: 0 })
        dispatch({ type: types.SET_SHOPPING_CART_TAXES, value: 0 })
        dispatch({ type: types.SET_SHOPPING_CART_COUNT, value: 0 })
        dispatch({ type: types.SET_SHOPPING_CART_PAYMENT_METHOD, value: 0 })
        dispatch(push('/login'))
    }
}
export const editarPerfil = () => {
    return (dispatch, getState) => {
        const {
            nombre,
            apellidos,
            correo,
            genero,
            talla,
            nacimiento,
            nickname,
            telefono,
            rfc,
            id
        } = getState().perfil
        dispatch({ type: 'SET_CONSULTA_PERFIL', value: true })

        if (nickname == '') {
            dispatch({
                type: 'SET_VALID_NICKNAME',
                value: true
            })
            dispatch({
                type: 'SET_VALID_MESSAGE_NICKANAME',
                value: 'Es obligatorio llenar el campo'
            })
        }

        if (telefono == '') {
            dispatch({
                type: 'SET_VALID_TELEFONO',
                value: true
            })
            dispatch({
                type: 'SET_VALID_MESSAGE_TELEFONO',
                value: 'Es obligatorio llenar el campo'
            })
        }

        const validate = new RegExp('^[0-9]*$')
        let telefono_clear = telefono.trim()
        if (telefono != '' && validate.test(telefono_clear) == false) {
            dispatch({ type: 'SET_CONSULTA_PERFIL', value: false })
            dispatch({
                type: 'SET_VALID_TELEFONO',
                value: true
            })
            dispatch({
                type: 'SET_VALID_MESSAGE_TELEFONO',
                value: 'Solo debe agregar números'
            })
        }
        if (
            validate.test(telefono_clear) == true &&
            telefono.length < 10 &&
            telefono != ''
        ) {
            dispatch({ type: 'SET_CONSULTA_PERFIL', value: false })
            dispatch({
                type: 'SET_VALID_TELEFONO',
                value: true
            })
            dispatch({
                type: 'SET_VALID_MESSAGE_TELEFONO',
                value: 'El teléfono debe tener minimo 10 digitos'
            })
        }
        if (
            nickname == '' ||
            telefono == '' ||
            validate.test(telefono_clear) == false ||
            telefono.length < 10
        ) {
            dispatch({ type: 'SET_CONSULTA_PERFIL', value: false })
            return
        } else {
            dispatch({
                type: 'SET_VALID_NICKNAME',
                value: false
            })
            dispatch({
                type: 'SET_VALID_MESSAGE_NICKANAME',
                value: ''
            })
            dispatch({
                type: 'SET_VALID_TELEFONO',
                value: false
            })
            dispatch({
                type: 'SET_VALID_MESSAGE_TELEFONO',
                value: ''
            })
        }

        api.put('customer/', {
            name: nombre,
            surname: apellidos,
            phoneNumber: telefono,
            email: correo,
            birth: nacimiento,
            gender: genero,
            shoesSize: talla,
            rfc: rfc ? rfc.toUpperCase() : '',
            interests: [],
            nickname
        })
            .then(response => {
                console.log(response.data.data.name)
                dispatch({
                    type: 'SET_NOMBRE_PERFIL',
                    value: response.data.data.name
                })
                dispatch({
                    type: 'SET_APELLIDOS_PERFIL',
                    value: response.data.data.surname
                })
                dispatch({
                    type: 'SET_CORREO_PERFIL',
                    value: response.data.data.email
                })
                dispatch({
                    type: 'SET_TELEFONO_PERFIL',
                    value: response.data.data.phoneNumber
                })
                dispatch({
                    type: 'SET_TALLA_PERFIL',
                    value: response.data.data.shoesSize
                })
                dispatch({
                    type: 'SET_NICKNAME_PERFIL',
                    value: response.data.data.nickname
                })
                dispatch({
                    type: 'SET_NACIMIENTO_PERFIL',
                    value: response.data.data.birth
                })
                dispatch({
                    type: 'SET_GENERO_PERFIL',
                    value: response.data.data.gender
                })
                dispatch({ type: 'SET_CONSULTA_PERFIL', value: false })
                toastr.success('Datos actualizados correctamente.')
            })
            .catch(err => {
                toastr.error(err.response.data.message)
                dispatch({ type: 'SET_CONSULTA_PERFIL', value: false })
            })
    }
}
export const getDetalleCompra = compra => {
    return dispatch => {
        dispatch({
            type: 'GET_DETALLE_COMPRA',
            value: compra
        })
        dispatch({
            type: 'SET_DETALLE_HISTORIAL_COMPRAS',
            value: true
        })
    }
}
export const setDetalleHistorialCompras = val => {
    return {
        type: 'SET_DETALLE_HISTORIAL_COMPRAS',
        value: val
    }
}
export const setAlertChangePass = () => {
    return {
        type: 'SET_ALERT_CHANGE_PASS'
    }
}
export const setLoadingProximasPerfil = val => {
    return {
        type: 'SET_LOADING_PROXIMAS_PERFIL',
        value: val
    }
}
export const setLoadingPasadasPerfil = val => {
    return {
        type: 'SET_LOADING_PASADAS_PERFIL',
        value: val
    }
}
export const setLoadingProximas = val => {
    return {
        type: 'SET_LOADING_CALENDAR',
        value: val
    }
}
export const getProximasPerfil = () => {
    return (dispatch, getState) => {
        const { dateProximas } = getState().perfil
        api.get(
            'schedule/bycustomer/' +
                moment(dateProximas)
                    .startOf('isoWeek')
                    .format('YYYY-MM-DD') +
                '/' +
                6
        )
            .then(response => {
                dispatch({
                    type: 'GET_PROXIMAS_PERFIL',
                    value: response.data.data
                })
                dispatch({
                    type: 'SET_LOADING_PROXIMAS_PERFIL',
                    value: false
                })
            })
            .catch(err => {
                toastr.warning(err.response.data.message)
            })
    }
}
export const getPasadasPerfil = () => {
    return (dispatch, getState) => {
        const { datePasadas } = getState().perfil
        api.get(
            'schedule/bycustomer/' +
                moment(datePasadas)
                    .startOf('isoWeek')
                    .format('YYYY-MM-DD') +
                '/' +
                6
        )
            .then(response => {
                dispatch({
                    type: 'GET_PASADAS_PERFIL',
                    value: response.data.data
                })
                dispatch({
                    type: 'SET_LOADING_PASADAS_PERFIL',
                    value: false
                })
            })
            .catch(err => {
                toastr.warning(err.response.data.message)
            })
    }
}
export const setAvatarFile = e => {
    return dispatch => {
        const loadImageOptions = {
            maxHeight: 620,
            maxWidth: 800,
            crop: true,
            canvas: true
        }
        let file = e.target.files[0]
        loadImage.parseMetaData(file, data => {
            if (data.exif && data.exif.get('Orientation')) {
                loadImageOptions.orientation = data.exif.get('Orientation')
            }
            loadImage(file, (canvas) => {
                let final = canvas.toDataURL(file.type)
                dispatch({
                    type: 'SET_AVATAR_FILE',
                    name: file.name,
                    size: file.size,
                    tipo: file.type,
                    ext: file.name
                        .split('.')
                        .pop()
                        .toLowerCase(),
                    data: final.split('base64,').pop()
                })
            }, loadImageOptions)
        })
    }
}
export const setFaceFile = e => {
    return dispatch => {
        const loadImageOptions = {
            maxHeight: 620,
            maxWidth: 800,
            crop: true,
            canvas: true
        }
        let file = e.target.files[0]
        loadImage.parseMetaData(file, data => {
            if (data.exif && data.exif.get('Orientation')) {
                loadImageOptions.orientation = data.exif.get('Orientation')
            }
            loadImage(file, (canvas) => {
                let final = canvas.toDataURL(file.type)
                dispatch({
                    type: 'SET_FACE_FILE',
                    name: file.name,
                    size: file.size,
                    tipo: file.type,
                    ext: file.name
                        .split('.')
                        .pop()
                        .toLowerCase(),
                    data: final.split('base64,').pop()
                })
            }, loadImageOptions)
        })
    }
}
export const setAvatarFileCamera = val => {
    return dispatch => {
        let image = val.substr(5)
        dispatch({
            type: 'SET_AVATAR_FILE',
            name: 'camera',
            size: '9',
            tipo: image.split(';base64,').shift(),
            ext: 'jpg',
            data: image.split(';base64,').pop()
        })
    }
}
export const setFaceFileCamera = val => {
    return dispatch => {
        let image = val.substr(5)
        dispatch({
            type: 'SET_FACE_FILE',
            name: 'camera',
            size: '9',
            tipo: image.split(';base64,').shift(),
            ext: 'jpg',
            data: image.split(';base64,').pop()
        })
    }
}
export const clearAvatarFile = () => {
    return {
        type: 'SET_AVATAR_FILE',
        name: '',
        size: '',
        tipo: '',
        ext: '',
        data: ''
    }
}
export const clearFaceFile = () => {
    return {
        type: 'SET_FACE_FILE',
        name: '',
        size: '',
        tipo: '',
        ext: '',
        data: ''
    }
}
export const saveAvatarPerfil = () => {
    return (dispatch, getState) => {
        dispatch({ type: 'SET_AVATAR_LOADING', value: true })
        let config = {
            onUploadProgress: progressEvent => {
                let percentCompleted = Math.floor(
                    (progressEvent.loaded * 100) / progressEvent.total
                )
                dispatch({
                    type: 'SET_UPLOAD_PROGRESS_AVATAR',
                    value: percentCompleted
                })
            }
        }
        const {
            avatarName,
            avatarSize,
            avatarType,
            avatarExt,
            avatarData
        } = getState().perfil
        api.post(
            'avatar',
            {
                avatar: avatarData,
                extention: avatarExt,
                mimeType: avatarType,
                name: avatarName,
                size: avatarSize == 0 ? '9' : avatarSize
            },
            config
        )
            .then(() => {
                dispatch(clearAvatarFile())
                dispatch({
                    type: 'SET_MODAL_AVATAR',
                    value: false
                })
                dispatch({
                    type: 'SET_UPLOAD_PROGRESS_AVATAR',
                    value: 0
                })
                dispatch({ type: 'SET_AVATAR_LOADING', value: false })
                dispatch(getAvatarPerfil())
            })
            .catch(err => {
                toastr.error(
                    'Hubo un error al cargar tu imagen, inténtalo nuevamente.'
                )
                dispatch(clearAvatarFile())
                dispatch({ type: 'SET_AVATAR_LOADING', value: false })
                dispatch({
                    type: 'SET_UPLOAD_PROGRESS_AVATAR',
                    value: 0
                })
                toastr.warning(err.response.data.message)
            })
    }
}
export const saveFacePerfil = () => {
    return (dispatch, getState) => {
        dispatch({ type: 'SET_FACE_LOADING', value: true })
        const {
            faceName,
            faceSize,
            faceType,
            faceExt,
            faceData
        } = getState().perfil
        api.post('recognition', {
            recognition: faceData,
            extention: faceExt,
            mimeType: faceType,
            name: faceName,
            size: faceSize
        })
            .then(response => {
                dispatch(clearFaceFile())
                dispatch({
                    type: 'SET_MODAL_FACE',
                    value: false
                })
                dispatch({ type: 'SET_FACE_LOADING', value: false })
                dispatch(getFacePerfil())
            })
            .catch(err => {
                dispatch({
                    type: 'SET_MODAL_FACE',
                    value: false
                })
                toastr.error(err.response.data.message)
                dispatch({ type: 'SET_FACE_LOADING', value: false })
            })
    }
}
export const getAvatarPerfil = () => {
    return dispatch => {
        if (sessionStorage.getItem('access_token')) {
            api.get('avatar').then(response => {
                dispatch({
                    type: 'SET_AVATAR',
                    value:
                        'data:' +
                        response.data.data.mimeType +
                        ';base64,' +
                        response.data.data.avatar
                })
            })
        }
    }
}
export const getFacePerfil = () => {
    return dispatch => {
        api.get('recognition')
            .then(response => {
                dispatch({
                    type: 'SET_FACE',
                    value:
                        'data:' +
                        response.data.data.mimeType +
                        ';base64,' +
                        response.data.data.recognition
                })
            })
            .catch(err => {})
    }
}
