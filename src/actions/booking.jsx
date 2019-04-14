import api from '../config/api'
import moment from 'moment'
import { push } from 'connected-react-router'
import toastr from 'toastr'

export const setDateCalendar = val => {
    return {
        type: 'SET_DATE_CALENDAR',
        value: val
    }
}
export const reservaclase = () => {
    return {
        type: 'ACTIVAR_INSTRUCTOR',
        id: parseInt(id)
    }
}
export const setLoadingCalendar = val => {
    return {
        type: 'SET_LOADING_CALENDAR',
        value: val
    }
}
export const setFilterClases = val => {
    return {
        type: 'SET_FILTER_CLASES',
        value: val
    }
}
export const setFilterInstructor = val => {
    return {
        type: 'SET_FILTER_INSTRUCTOR',
        value: val
    }
}
export const setFilterSucursales = val => {
    return {
        type: 'SET_FILTER_SUCURSALES',
        value: val
    }
}
export const closeAlertBooking = () => {
    return dispatch => {
        dispatch({
            type: 'SET_ALERT_BOOKING',
            value: false
        })
        dispatch(push('/reservar'))
    }
}
export const getSchedule = () => {
    return (dispatch, getState) => {
        const { date, clase, instructor, sucursal } = getState().booking
        let url =
            'schedule/' +
            moment(date)
                .startOf('isoWeek')
                .format('YYYY-MM-DD') +
            '/' +
            6
        api.get(url, {
            params: {
                discipline: clase > 0 ? clase : null,
                coach: instructor > 0 ? instructor : null,
                club: sucursal > 0 ? sucursal : null
            }
        })
            .then(response => {
                dispatch({
                    type: 'SET_SCHEDULE',
                    value: response.data.data
                })
                dispatch({ type: 'SET_LOADING_CALENDAR', value: false })
            })
            .catch(err => {
                toastr.warning(err.response.data.message)
            })
    }
}
export const bookingSchedule = (id, place) => {
    return dispatch => {
        dispatch(push('/reservar'))
    }
}
export const setClaseSchedule = event => {
    return dispatch => {
        dispatch({
            type: 'SET_LOADING_CALENDAR',
            value: true
        })
        dispatch({
            type: 'SET_CLASE_SCHEDULE',
            value: event.target.value
        })
        dispatch(getSchedule())
    }
}
export const setInstructorSchedule = event => {
    return dispatch => {
        dispatch({
            type: 'SET_LOADING_CALENDAR',
            value: true
        })
        dispatch({
            type: 'SET_INSTRUCTOR_SCHEDULE',
            value: event.target.value
        })
        dispatch(getSchedule())
    }
}
export const setSucursalSchedule = event => {
    return dispatch => {
        dispatch({
            type: 'SET_LOADING_CALENDAR',
            value: true
        })
        dispatch({
            type: 'SET_SUCURSAL_SCHEDULE',
            value: event.target.value
        })
        dispatch(getSchedule())
    }
}
export const setClasesSchedule = event => {
    return dispatch => {
        api.get('discipline')
            .then(response => {
                let clases = response.data.data
                clases.unshift({ id: 0, name: 'Todas' })
                dispatch({
                    type: 'SET_CLASES_SCHEDULE',
                    value: clases
                })
            })
            .catch(err => {
                toastr.warning(err.response.data.message)
            })
    }
}
export const setInstructoresSchedule = event => {
    return dispatch => {
        api.get('coach')
            .then(response => {
                let coaches = []
                let instructores = response.data.data
                instructores.map((e, i) => {
                    coaches.push({ id: e.id, name: e.name + ' ' + e.surname })
                })
                coaches.unshift({ id: 0, name: 'Todos' })
                dispatch({
                    type: 'SET_INSTRUCTORES_SCHEDULE',
                    value: coaches
                })
            })
            .catch(err => {
                toastr.warning(err.response.data.message)
            })
    }
}
export const setSucursalesSchedule = event => {
    return dispatch => {
        api.get('club')
            .then(response => {
                let clubes = response.data.data
                clubes.unshift({ id: 0, name: 'Todas' })
                dispatch({
                    type: 'SET_SUCURSALES_SCHEDULE',
                    value: clubes
                })
            })
            .catch(err => {
                toastr.warning(err.response.data.message)
            })
    }
}
export const cancelSchedule = () => {
    return (dispatch, getState) => {
        const { schedule_to_cancel } = getState().booking
        dispatch({
            type: 'SET_LOADING_CALENDAR',
            value: true
        })
        api.put('booking/cancel/' + schedule_to_cancel)
            .then(() => {
                dispatch(getSchedule())
                dispatch({
                    type: 'SET_ALERT_CANCEL_SCHEDULE',
                    value: 0
                })
            })
            .catch(err => {
                dispatch(getSchedule())
                dispatch({
                    type: 'SET_ALERT_CANCEL_SCHEDULE',
                    value: 0
                })
                toastr.warning(err.response.data.message)
            })
    }
}
