import moment from 'moment'

const tabs = [
    'perfil',
    'próximas clases',
    'historial de clases',
    'historial de compras',
    'métodos de pago'
]

const tallas = [
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
    active: '/perfil',
    tabs: tabs,
    tab: tabs[0],
    modal: false,
    modalFace: false,
    consulta: false,
    nickname: '',
    nombre: '',
    apellidos: '',
    telefono: '',
    talla: tallas[0].id,
    correo: '',
    pass: '',
    confirmar: '',
    mensaje: '',
    mensajecorfirma: '',
    nacimiento: '',
    genero: '',
    id: '',
    tallas,
    rfc: '',
    detalleHistorialCompras: false,
    detalleCompra: {},
    alert_change_pass: false,
    dateProximas: moment(),
    datePasadas: moment(),
    proximas: [],
    pasadas: [],
    loadingProximas: true,
    loadingPasadas: true,
    avatarName: '',
    avatarSize: '',
    avatarType: '',
    avatarExt: '',
    avatarData: '',
    avatarLoading: false,
    avatar: '',
    faceName: '',
    faceSize: '',
    faceType: '',
    faceExt: '',
    faceData: '',
    faceLoading: false,
    face: '',
    valid_telefono: false,
    message_telefono: '',
    valid_nickname: false,
    message_nickname: '',
    validModalFace: false,
    uploadProgressAvatar: 0
}

const perfil = (state = initialState, action) => {
    switch (action.type) {
        case 'SET_UPLOAD_PROGRESS_AVATAR':
            return {
                ...state,
                uploadProgressAvatar: action.value
            }
        case 'SET_DATE_CALENDAR_PROXIMAS':
            return {
                ...state,
                dateProximas: action.value
            }
        case 'SET_DATE_CALENDAR_PASADAS':
            return {
                ...state,
                datePasadas: action.value
            }
        case 'SET_VALID_TELEFONO':
            return {
                ...state,
                valid_telefono: action.value
            }
        case 'SET_VALID_NICKNAME':
            return {
                ...state,
                valid_nickname: action.value
            }
        case 'SET_VALID_MESSAGE_NICKANAME':
            return {
                ...state,
                message_nickname: action.value
            }
        case 'SET_VALID_MESSAGE_TELEFONO':
            return {
                ...state,
                message_telefono: action.value
            }
        case 'SET_FACE_LOADING':
            return {
                ...state,
                faceLoading: action.value
            }
        case 'SET_FACE':
            return {
                ...state,
                face: action.value
            }
        case 'SET_FACE_FILE':
            return {
                ...state,
                faceName: action.name,
                faceSize: action.size,
                faceType: action.tipo,
                faceExt: action.ext,
                faceData: action.data
            }
        case 'SET_AVATAR_LOADING':
            return {
                ...state,
                avatarLoading: action.value
            }
        case 'SET_AVATAR':
            return {
                ...state,
                avatar: action.value
            }
        case 'SET_AVATAR_FILE':
            return {
                ...state,
                avatarName: action.name,
                avatarSize: action.size,
                avatarType: action.tipo,
                avatarExt: action.ext,
                avatarData: action.data
            }
        case 'SET_LOADING_PROXIMAS_PERFIL':
            return {
                ...state,
                loadingProximas: action.value
            }
        case 'SET_LOADING_PASADAS_PERFIL':
            return {
                ...state,
                loadingPasadas: action.value
            }
        case 'GET_PASADAS_PERFIL':
            return {
                ...state,
                pasadas: action.value
            }
        case 'GET_PROXIMAS_PERFIL':
            return {
                ...state,
                proximas: action.value
            }
        case 'GET_DETALLE_COMPRA':
            return {
                ...state,
                detalleCompra: action.value
            }
        case 'SET_DETALLE_HISTORIAL_COMPRAS':
            return {
                ...state,
                detalleHistorialCompras: action.value
            }
        case 'SET_CONSULTA_PERFIL':
            return {
                ...state,
                consulta: action.value
            }
        case 'SET_MODAL_AVATAR':
            return {
                ...state,
                modal: action.value
            }
        case 'SET_MODAL_FACE':
            return {
                ...state,
                modalFace: action.value
            }
        case 'SET_VALID_MODAL_FACE':
            return {
                ...state,
                validModalFace: action.value,
                faceType: ''
            }
        case 'SET_TAB_PERFIL':
            return {
                ...state,
                tab: action.value
            }
        case 'SET_ID_PERFIL':
            return {
                ...state,
                id: action.value
            }
        case 'SET_NOMBRE_PERFIL':
            return {
                ...state,
                nombre: action.value
            }
        case 'SET_APELLIDOS_PERFIL':
            return {
                ...state,
                apellidos: action.value
            }
        case 'SET_RFC_PERFIL':
            return {
                ...state,
                rfc: action.value
            }
        case 'SET_NICKNAME_PERFIL':
            return {
                ...state,
                nickname: action.value
            }
        case 'SET_TELEFONO_PERFIL':
            return {
                ...state,
                telefono: action.value
            }
        case 'SET_TALLA_PERFIL':
            return {
                ...state,
                talla: action.value
            }
        case 'SET_CORREO_PERFIL':
            return {
                ...state,
                correo: action.value
            }
        case 'SET_PASS_PERFIL':
            return {
                ...state,
                pass: action.value
            }
        case 'SET_CONFIRMAR_PERFIL':
            return {
                ...state,
                confirmar: action.value
            }
        case 'SET_MENSAJE_PERFIL':
            return {
                ...state,
                mensaje: action.value
            }
        case 'SET_MENSAJE_CONFIRMA_PERFIL':
            return {
                ...state,
                mensajeconfirma: action.value
            }
        case 'SET_NACIMIENTO_PERFIL':
            return {
                ...state,
                nacimiento: action.value
            }
        case 'SET_GENERO_PERFIL':
            return {
                ...state,
                genero: action.value
            }
        case 'SET_ALERT_CHANGE_PASS':
            return {
                ...state,
                alert_change_pass: !state.alert_change_pass
            }
        default:
            return state
    }
}

export default perfil
