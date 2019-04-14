const activaciones = [
    { id: 'Baja', name: 'Baja' },
    { id: 'Intermedia', name: 'Intermedia' },
    { id: 'Alta', name: 'Alta' }
]
const estudios = [
    { id: 'Medio Superior', name: 'Medio Superior' },
    { id: 'Superior', name: 'Superior' },
    { id: 'Postgrado', name: 'Postgrado' }
]
const ocupaciones = [
    { id: 'Empleado', name: 'Empleado' },
    { id: 'Empresario', name: 'Empresario' },
    { id: 'Emprendedor', name: 'Emprendedor' }
]
const tallas = [
    { id: 21, name: '' },
    { id: 22, name: '22' },
    { id: 23, name: '23' },
    { id: 24, name: '24' },
    { id: 25, name: '25' },
    { id: 26, name: '26' },
    { id: 27, name: '27' },
    { id: 28, name: '28' },
    { id: 29, name: '29' },
    { id: 30, name: '30' },
    { id: 31, name: '31' },
    { id: 32, name: '32' }
]
const initialState = {
    active: '/login',
    user: '',
    pass: '',
    registrate: false,
    nombre: '',
    apellido: '',
    correo: '',
    correo_alert: '',
    fecha: null,
    sexo: '',
    talla: tallas[0].id,
    activacion: activaciones[0].id,
    estudio: estudios[0].id,
    ocupacion: ocupaciones[0].id,
    intereses: false,
    registrate: false,
    consulta: false,
    interests: [],
    modal: false,
    opciones: [],
    activaciones,
    estudios,
    ocupaciones,
    tallas,
    nickname: '',
    message_user_login: '',
    message_pass_login: '',
    message_name_registration: '',
    message_surname_registration: '',
    message_nickname_registration: '',
    message_email_registration: '',
    message_birth_registration: '',
    valid_user_login: false,
    valid_pass_login: false,
    valid_name_registration: false,
    valid_surname_registration: false,
    valid_nickname_registration: false,
    valid_email_registration: false,
    valid_birth_registration: false,
    acepto: false,
    forgot_password: false,
    forgot_email: '',
    valid_forgot_email: false,
    message_forgot_email: '',
    query_forgot_password: false,
    modal_forgot_password: false,
    valid_message_form: '',
    message_surname: '',
    message_name: '',
    valid_message: false,
    valid_sexo: false,
    valid_message_sexo: '',
    valid_message_correo: '',
    valid_interes: false
}

const login = (state = initialState, action) => {
    switch (action.type) {
        case 'VALID_MESSAGE':
            return {
                ...state,
                valid_message: action.value
            }
        case 'VALID_MESSAGE_CORREO_FORM':
            return {
                ...state,
                valid_message_correo: action.value
            }
        case 'VALID_MESSAGE_FORM':
            return {
                ...state,
                valid_message_form: action.value
            }
        case 'SET_MODAL_FORGOT_PASSWORD':
            return {
                ...state,
                modal_forgot_password: !state.modal_forgot_password
            }
        case 'SET_QUERY_FORGOT_PASSWORD':
            return {
                ...state,
                query_forgot_password: action.value
            }
        case 'SET_VALID_FORGOT_EMAIL':
            return {
                ...state,
                valid_forgot_email: action.value
            }
        case 'SET_MESSAGE_FORGOT_EMAIL':
            return {
                ...state,
                message_forgot_email: action.value
            }
        case 'SET_FORGOT_EMAIL':
            return {
                ...state,
                forgot_email: action.value
            }
        case 'SET_FORGOT_PASSWORD':
            return {
                ...state,
                forgot_password: !state.forgot_password
            }
        case 'TOGGLE_MODAL_REGISTRO':
            return {
                ...state,
                modal: !state.modal
            }
        case 'SET_VALID_SEXO':
            return {
                ...state,
                valid_sexo: action.value
            }
        case 'VALID_MESSAGE_SEXO':
            return {
                ...state,
                valid_message_sexo: action.value
            }
        case 'SET_NOMBRE_REGISTRO':
            return {
                ...state,
                nombre: action.value,
                valid_name_registration: false
            }
        case 'SET_APELLIDO_REGISTRO':
            return {
                ...state,
                apellido: action.value,
                valid_surname_registration: false
            }
        case 'SET_CORREO_REGISTRO':
            return {
                ...state,
                correo: action.value,
                valid_email_registration: false
            }
        case 'SET_CORREO_ALERT':
            return {
                ...state,
                correo_alert: action.value
            }
        case 'SET_NICKNAME_REGISTRO':
            return {
                ...state,
                nickname: action.value,
                valid_nickname_registration: false
            }
        case 'SET_SEXO_REGISTRO':
            return {
                ...state,
                sexo: action.value
            }
        case 'SET_FECHA_REGISTRO':
            return {
                ...state,
                fecha: action.value,
                valid_birth_registration: false
            }
        case 'SET_ACEPTO_REGISTRO':
            return {
                ...state,
                acepto: action.value
            }
        case 'SET_TALLA_REGISTRO':
            return {
                ...state,
                talla: action.value
            }
        case 'SET_ACTIVACION_REGISTRO':
            return {
                ...state,
                activacion: action.value
            }
        case 'SET_ESTUDIOS_REGISTRO':
            return {
                ...state,
                estudio: action.value
            }
        case 'SET_OCUPACION_REGISTRO':
            return {
                ...state,
                ocupacion: action.value
            }
        case 'SET_USER_LOGIN':
            return {
                ...state,
                user: action.value
            }
        case 'SET_VALID_USER_LOGIN':
            return {
                ...state,
                valid_user_login: action.value
            }
        case 'SET_MENSAJE_USER_LOGIN':
            return {
                ...state,
                message_user_login: action.value
            }
        case 'SET_PASS_LOGIN':
            return {
                ...state,
                pass: action.value
            }
        case 'SET_VALID_PASS_LOGIN':
            return {
                ...state,
                valid_pass_login: action.value
            }
        case 'SET_MENSAJE_PASS_LOGIN':
            return {
                ...state,
                message_pass_login: action.value
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
        case 'SET_VALID_INTERES':
            return {
                ...state,
                valid_interes: !state.valid_interes
            }
        case 'GET_INTERESES_REGISTRO':
            return {
                ...state,
                opciones: action.value
            }
        case 'SET_MENSAJE_NOMBRE_LOGIN':
            return {
                ...state,
                message_name: action.value
            }
        case 'SET_MENSAJE_APELLIDO_LOGIN':
            return {
                ...state,
                message_surname: action.value
            }
        case 'SET_MESSAGE_NAME_REGISTRATION':
            return {
                ...state,
                message_name_registration: action.value
            }
        case 'SET_VALID_NAME_REGISTRATION':
            return {
                ...state,
                valid_name_registration: action.value
            }
        case 'SET_MESSAGE_SURNAME_REGISTRATION':
            return {
                ...state,
                message_surname_registration: action.value
            }
        case 'SET_VALID_SURNAME_REGISTRATION':
            return {
                ...state,
                valid_surname_registration: action.value
            }
        case 'SET_MESSAGE_NICKNAME_REGISTRATION':
            return {
                ...state,
                message_nickname_registration: action.value
            }
        case 'SET_VALID_NICKNAME_REGISTRATION':
            return {
                ...state,
                valid_nickname_registration: action.value
            }
        case 'SET_MESSAGE_EMAIL_REGISTRATION':
            return {
                ...state,
                message_email_registration: action.value
            }
        case 'SET_VALID_EMAIL_REGISTRATION':
            return {
                ...state,
                valid_email_registration: action.value
            }
        case 'SET_MESSAGE_BIRTH_REGISTRATION':
            return {
                ...state,
                message_email_registration: action.value
            }
        case 'SET_VALID_BIRTH_REGISTRATION':
            return {
                ...state,
                valid_birth_registration: action.value
            }
        default:
            return state
    }
}

export default login
