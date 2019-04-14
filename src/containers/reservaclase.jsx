import React from 'react'
import { connect } from 'react-redux'
import ReservaClase from '../components/booking/reservaclase'
import {
    setPlaceItem,
    setPlaceItemBusy,
    closeAlertBooking,
    bookingSchedule
} from '../actions'

const mapState = state => {
    return {
        active: state.booking.active,
        visible: state.navigation.visible,
        alert: state.booking.alert,
        schedule_item: state.place.schedule_item,
        loading: state.place.loading
    }
}

const mapDispatch = (dispatch, props) => {
    dispatch(setPlaceItem(props.match.params.id))
    dispatch(setPlaceItemBusy(props.match.params.id))
    return {
        closeAlertBooking: () => dispatch(closeAlertBooking()),
        bookingSchedule: (id, place) => dispatch(bookingSchedule(id, place))
    }
}

export default connect(
    mapState,
    mapDispatch
)(ReservaClase)
