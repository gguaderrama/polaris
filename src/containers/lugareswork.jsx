import React from 'react'
import { connect } from 'react-redux'
import LugaresWork from '../components/reservar/lugareswork'

const mapState = state => {
    return {
        active: state.reservar.active,
        visible: state.navigation.visible
    }
}

const mapDispatch = dispatch => {
    return {}
}

export default connect(
    mapState,
    mapDispatch
)(LugaresWork)
