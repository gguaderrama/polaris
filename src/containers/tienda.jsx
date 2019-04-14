import React from 'react'
import { connect } from 'react-redux'
import Tienda from '../components/tienda'

const mapState = state => {
    return {
        active: state.tienda.active,
        visible: state.navigation.visible
    }
}

const mapDispatch = dispatch => {
    return {}
}

export default connect(
    mapState,
    mapDispatch
)(Tienda)
