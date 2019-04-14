import moment from 'moment'

const initialState = {
    active: '/reservar',
    loadingCalendar: false,
    schedule: [],
    date: moment(),
    alert: false,
    alert_cancel_schedule: false,
    schedule_to_cancel: 0,
    clase: 0,
    instructor: 0,
    sucursal: 0,
    clases: [],
    instructores: [],
    sucursales: [],
    filter_clases: '',
    filter_instructores: '',
    filter_sucursales: ''
}

const reservar = (state = initialState, action) => {
    switch (action.type) {
        case 'SET_CLASES_SCHEDULE':
            return {
                ...state,
                clases: action.value
            }
        case 'SET_INSTRUCTORES_SCHEDULE':
            return {
                ...state,
                instructores: action.value
            }
        case 'SET_SUCURSALES_SCHEDULE':
            return {
                ...state,
                sucursales: action.value
            }
        case 'SET_CLASE_SCHEDULE':
            return {
                ...state,
                clase: action.value
            }
        case 'SET_INSTRUCTOR_SCHEDULE':
            return {
                ...state,
                instructor: action.value
            }
        case 'SET_SUCURSAL_SCHEDULE':
            return {
                ...state,
                sucursal: action.value
            }
        case 'SET_ALERT_CANCEL_SCHEDULE':
            return {
                ...state,
                schedule_to_cancel: action.value,
                alert_cancel_schedule: !state.alert_cancel_schedule
            }
        case 'SET_ALERT_BOOKING':
            return {
                ...state,
                alert: action.value
            }
        case 'SET_DATE_CALENDAR':
            return {
                ...state,
                date: action.value
            }
        case 'SET_LOADING_CALENDAR':
            return {
                ...state,
                loadingCalendar: action.value
            }
        case 'SET_SCHEDULE':
            return {
                ...state,
                schedule: action.value
            }
        case 'SET_FILTER_CLASES':
            return {
                ...state,
                clase: action.value
            }
        case 'SET_FILTER_INSTRUCTORES':
            return {
                ...state,
                filter_instructores: action.value
            }
        case 'SET_FILTER_SUCURSALES':
            return {
                ...state,
                filter_sucursales: action.value
            }
        default:
            return state
    }
}

export default reservar
