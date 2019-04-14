import types from '../config/types'

const initialState = {
    active: '/comprar',
    categorias: [],
    productos: [],
    loading: true,
    compras: [],
    giftName: '',
    giftEmail: '',
    valid_gift_name: false,
    valid_gift_email: false,
    message_gift_name: '',
    message_gift_email: '',
    gift_names: [],
    gift_emails: [],
    alert_membership: false
}

const comprar = (state = initialState, action) => {
    switch (action.type) {
        case types.SET_ALERT_MEMBERSHIP:
            return {
                ...state,
                alert_membership: action.value
            }
        case types.SET_MESSAGE_GIFT_NAME:
            return {
                ...state,
                message_gift_name: action.value
            }
        case types.SET_MESSAGE_GIFT_EMAIL:
            return {
                ...state,
                message_gift_email: action.value
            }
        case types.SET_VALID_GIFT_NAME:
            return {
                ...state,
                valid_gift_name: action.value
            }
        case types.SET_VALID_GIFT_EMAIL:
            return {
                ...state,
                valid_gift_email: action.value
            }
        case 'SET_VALID_GIFT_EMAIL':
            return {
                ...state,
                valid_gift_name: action.value
            }
        case 'SET_GIFT_NAME':
            return {
                ...state,
                giftName: action.value
            }
        case 'SET_GIFT_EMAIL':
            return {
                ...state,
                giftEmail: action.value
            }
        case 'SET_GIFT_NAMES':
            return {
                ...state,
                gift_names: action.value
            }
        case 'SET_GIFT_EMAILS':
            return {
                ...state,
                gift_emails: action.value
            }
        case 'SET_HISTORIAL_COMPRAS':
            return {
                ...state,
                compras: action.value
            }

        case 'SET_CATEGORIAS_COMPRAS':
            return {
                ...state,
                categorias: action.value
            }

        case 'SET_PRODUCTOS_COMPRAS':
            return {
                ...state,
                productos: action.value
            }
        case 'SET_LOADING_COMPRAS':
            return {
                ...state,
                loading: action.value
            }
        default:
            return state
    }
}

export default comprar
