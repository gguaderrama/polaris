const initialState = {
    pass: '',
    confirmar: '',
    token: '',
    consulta: false,
    modal: false,
    valid: true,
    loading: true,
    validcharacters: false,
    message_characters: '',
    confirm: false,
    message_confirm: '',
    alert_password_confirm: false,
    modal_value: ''
}

const password = (state = initialState, action) => {
    switch (action.type) {
        case 'SET_ALERT_PASSWORD_CONFIRM':
            return {
                ...state,
                alert_password_confirm: action.value
            }
        case 'SET_VALID_CONFIRM':
            return {
                ...state,
                confirm: action.value
            }
        case 'SET_VALID_CHARACTERS':
            return {
                ...state,
                validcharacters: action.value
            }
        case 'SET_MESSAGE_CONFIRM':
            return {
                ...state,
                message_confirm: action.value
            }
        case 'SET_MESSAGE_CHARACTERS':
            return {
                ...state,
                message_characters: action.value
            }
        case 'SET_LOADING_PASSWORD':
            return {
                ...state,
                loading: action.value
            }
        case 'SET_VALID_TOKEN':
            return {
                ...state,
                valid: action.value
            }
        case 'TOGGLE_MODAL_PASSWORD':
            return {
                ...state,
                modal: !state.modal
            }
        case 'SET_PASS_PASSWORD':
            return {
                ...state,
                pass: action.value
            }
        case 'SET_CONFIRMAR_PASSWORD':
            return {
                ...state,
                confirmar: action.value
            }
        case 'SET_TOKEN_PASSWORD':
            return {
                ...state,
                token: action.value
            }
        case 'SET_MODAL_PASSWORD':
            return {
                ...state,
                modal_value: action.value
            }

        case 'SET_CONSULTA_PASSWORD':
            return {
                ...state,
                consulta: action.value
            }
        default:
            return state
    }
}

export default password
