const initialState = {
    registrate: false,
    name: '',
    surname: '',
    email: '',
    birth: new Date(),
    sex: 'MASCULINO',
    size: tallas[0].id,
    intereses: false,
    registrate: false,
    interests: [],
    options: [],
    nickname: '',
    message_name_registration: '',
    message_surname_registration: '',
    message_nickname_registration: '',
    message_email_registration: '',
    message_birth_registration: '',
    valid_name_registration: false,
    valid_surname_registration: false,
    valid_nickname_registration: false,
    valid_email_registration: false,
    valid_birth_registration: false
}

const login = (state = initialState, action) => {
    switch (action.type) {
        case 'TOGGLE_MODAL_REGISTRO':
            return {
                ...state,
                modal: !state.modal
            }
        case 'SET_NOMBRE_REGISTRO':
            return {
                ...state,
                nombre: action.value
            }
        case 'SET_APELLIDO_REGISTRO':
            return {
                ...state,
                apellido: action.value
            }
        case 'SET_CORREO_REGISTRO':
            return {
                ...state,
                correo: action.value
            }
        case 'SET_NICKNAME_REGISTRO':
            return {
                ...state,
                nickname: action.value
            }
        case 'SET_SEXO_REGISTRO':
            return {
                ...state,
                sexo: action.value
            }
        case 'SET_FECHA_REGISTRO':
            return {
                ...state,
                fecha: action.value
            }
        case 'SET_TALLA_REGISTRO':
            return {
                ...state,
                talla: action.value
            }
        case 'RESET_FORM_LOGIN':
            return {
                ...state,
                registrate: false,
                intereses: false
            }
        case 'CHANGE_FORM_LOGIN':
            return {
                ...state,
                registrate: !state.registrate,
                intereses: false
            }
        case 'CHANGE_FORM_INTERESES':
            return {
                ...state,
                intereses: !state.intereses
            }
        case 'SET_CONSULTA_LOGIN':
            return {
                ...state,
                consulta: action.value
            }
        case 'SET_INTERESES_REGISTRO':
            return {
                ...state,
                interests: action.value
            }
        case 'GET_INTERESES_REGISTRO':
            return {
                ...state,
                opciones: action.value
            }
        default:
            return state
    }
}

export default login
