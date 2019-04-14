import types from '../config/types'

const initialState = {
    active: '/contactanos',
    surname: '',
    mensaje: '',
    confirm: false,
    valid_nombre: false,
    valid_email: false,
    valid_surname: false,
    valid_mensaje: false,
    valid_confirm: false,
    message_nombre: '',
    message_email: '',
    message_surname: '',
    message_mensaje: '',
    message_confirm: '',
    nombre_contact: '',
    email: '',
    captcha: false
}

const contactanos = (state = initialState, action) => {
    switch (action.type) {
        case 'SET_CAPTCHA_CONTACT':
            return {
                ...state,
                captcha: action.value
            }
        case 'SET_SURNAME_CONTACT':
            return {
                ...state,
                surname: action.value
            }
        case 'SET_EMAIL_CONTACT':
            return {
                ...state,
                email: action.value
            }
        case 'SET_NAME_CONTACT':
            return {
                ...state,
                nombre_contact: action.value
            }
        case 'SET_MENSAJE_CONTACT':
            return {
                ...state,
                mensaje: action.value
            }
        case 'SET_TERMINOS_CONTACT':
            return {
                ...state,
                confirm: !state.confirm
            }
        case types.SET_CONTACT_NAME_VALID:
            return {
                ...state,
                valid_nombre: action.value
            }
        case 'SET_VALID_SURNAME_CONTACT':
            return {
                ...state,
                valid_surname: action.value
            }
        case 'SET_VALID_EMAIL_CONTACT':
            return {
                ...state,
                valid_email: action.value
            }
        case 'SET_VALID_MENSAJE_CONTACT':
            return {
                ...state,
                valid_mensaje: action.value
            }
        case 'SET_VALID_TERMINOS_CONTACT':
            return {
                ...state,
                valid_confirm: action.value
            }
        case 'SET_MESSAGE_NOMBRE_CONTACT':
            return {
                ...state,
                message_nombre: action.value
            }
        case 'SET_MESSAGE_SURNAME_CONTACT':
            return {
                ...state,
                message_surname: action.value
            }
        case 'SET_MESSAGE_EMAIL_CONTACT':
            return {
                ...state,
                message_email: action.value
            }
        case 'SET_MESSAGE_MSG_CONTACT':
            return {
                ...state,
                message_mensaje: action.value
            }
        case 'SET_MESSAGE_TERMINOS_CONTACT':
            return {
                ...state,
                message_confirm: action.value
            }
        default:
            return state
    }
}

export default contactanos
