const initialState = {
    cardVerification: '',
    valid_card_verification: false,
    message_card_verification: '',
    card_number: '',
    max_card_number: 19,
    valid_card_number: false,
    message_card_number: '',
    cardType: 'CREDITO',
    expYear: '',
    valid_exp_year: false,
    message_exp_year: '',
    expMonth: '',
    valid_exp_month: false,
    message_exp_month: '',
    card_provider: '',
    metodos: [],
    card_verification_length: 3,
    registrando: false,
    card_holder: '',
    valid_card_holder: false,
    message_card_holder: '',
    conekta_count: 0
}

const pagos = (state = initialState, action) => {
    switch (action.type) {
        case 'SET_CONEKTA_COUNT':
            return {
                ...state,
                conekta_count: action.value
            }
        case 'SET_MAX_CARD_NUMBER':
            return {
                ...state,
                max_card_number: action.value
            }
        case 'SET_VALID_CARD_VERIFICATION':
            return {
                ...state,
                valid_card_verification: action.value
            }
        case 'SET_MESSAGE_CARD_VERIFICATION':
            return {
                ...state,
                message_card_verification: action.value
            }
        case 'SET_VALID_CARD_NUMBER':
            return {
                ...state,
                valid_card_number: action.value
            }
        case 'SET_MESSAGE_CARD_NUMBER':
            return {
                ...state,
                message_card_number: action.value
            }
        case 'SET_VALID_CARD_HOLDER':
            return {
                ...state,
                valid_card_holder: action.value
            }
        case 'SET_MESSAGE_CARD_HOLDER':
            return {
                ...state,
                message_card_holder: action.value
            }
        case 'SET_REGISTRANDO_METODO_PAGO':
            return {
                ...state,
                registrando: action.value
            }
        case 'SET_CARD_VERIFICATION_LENGTH':
            return {
                ...state,
                card_verification_length: action.value
            }
        case 'SET_METODO_PAGO':
            return {
                ...state,
                metodos: action.value
            }
        case 'SET_CARD_VERIFICATION':
            return {
                ...state,
                cardVerification: action.value
            }
        case 'SET_CARD_NUMBER':
            return {
                ...state,
                card_number: action.value
            }
        case 'SET_CARD_TYPE':
            return {
                ...state,
                cardType: action.value
            }
        case 'SET_EXP_YEAR':
            return {
                ...state,
                expYear: action.value
            }
        case 'SET_EXP_MONTH':
            return {
                ...state,
                expMonth: action.value
            }
        case 'SET_CARD_HOLDER':
            return {
                ...state,
                card_holder: action.value
            }
        case 'SET_CARD_PROVIDER':
            return {
                ...state,
                card_provider: action.value
            }
        default:
            return state
    }
}

export default pagos
