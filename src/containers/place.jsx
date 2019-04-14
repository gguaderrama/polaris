import React from 'react'
import { connect } from 'react-redux'
import Place from '../components/place'
import { withRouter } from 'react-router-dom'
import {
    recoverShoppingCart,
    setLogged,
    setPlaceItem,
    setPlaceItemBusy,
    setPlaceSelected,
    handleSelectPlace,
    closeAlertPlace,
    setAlertWithOut
} from '../actions'

const mapState = state => {
    return {
        active: state.booking.active,
        visible: state.navigation.visible,
        schedule_item: state.place.schedule_item,
        loading: state.place.loading,
        loadingBusy: state.place.loadingBusy,
        selected: state.place.selected,
        busy_items: state.place.busy_items,
        alert_place: state.place.alert_place,
        reservando: state.place.reservando,
        alert_with_out: state.place.alert_with_out
    }
}

const mapDispatch = (dispatch, props) => {
    dispatch(setLogged())
    dispatch(recoverShoppingCart())
    dispatch(setPlaceItem(props.match.params.id))
    dispatch(setPlaceSelected(0))
    return {
        setPlaceSelected: val => dispatch(setPlaceSelected(val)),
        handleSelectPlace: schedule => dispatch(handleSelectPlace(schedule)),
        setPlaceItemBusy: schedule => dispatch(setPlaceItemBusy(schedule)),
        closeAlertPlace: id => dispatch(closeAlertPlace(id)),
        setAlertWithOut: () => dispatch(setAlertWithOut())
    }
}

export default connect(
    mapState,
    mapDispatch
)(Place)
