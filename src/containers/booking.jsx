import React from 'react'
import { connect } from 'react-redux'
import Reservar from 'components/booking'
import {
    recoverShoppingCart,
    reservaclase,
    setLogged,
    setLoadingCalendar,
    setAlerta,
    getSchedule,
    setDateCalendar,
    setAlertCancelSchedule,
    setClasesSchedule,
    setInstructoresSchedule,
    setSucursalesSchedule,
    setClaseSchedule,
    setInstructorSchedule,
    setSucursalSchedule,
    cancelSchedule,
    setMenu
} from '../actions'

const mapState = state => {
    document.title = 'Load | Reservar'
    return {
        active: state.booking.active,
        visible: state.navigation.visible,
        logged: state.navigation.logged,
        loadingCalendar: state.booking.loadingCalendar,
        alerta: state.alerta.alerta,
        schedule: state.booking.schedule,
        date: state.booking.date,
        alert_cancel_schedule: state.booking.alert_cancel_schedule,
        clase: state.booking.clase,
        instructor: state.booking.instructor,
        sucursal: state.booking.sucursal,
        clases: state.booking.clases,
        instructores: state.booking.instructores,
        sucursales: state.booking.sucursales
    }
}

const mapDispatch = dispatch => {
    dispatch(setInstructoresSchedule())
    dispatch(setClasesSchedule())
    dispatch(setSucursalesSchedule())
    dispatch(setLoadingCalendar(true))
    dispatch(setLogged())
    dispatch(recoverShoppingCart())
    return {
        reservaclase: () => dispatch(reservaclase()),
        setLoadingCalendar: val => dispatch(setLoadingCalendar(val)),
        setAlerta: () => dispatch(setAlerta()),
        getSchedule: () => dispatch(getSchedule()),
        setDateCalendar: val => dispatch(setDateCalendar(val)),
        setAlertCancelSchedule: id => dispatch(setAlertCancelSchedule(id)),
        setClaseSchedule: event => dispatch(setClaseSchedule(event)),
        setInstructorSchedule: event => dispatch(setInstructorSchedule(event)),
        setSucursalSchedule: event => dispatch(setSucursalSchedule(event)),
        cancelSchedule: id => dispatch(cancelSchedule(id))
    }
}

export default connect(
    mapState,
    mapDispatch
)(Reservar)
