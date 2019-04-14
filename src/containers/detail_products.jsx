import React from 'react'
import { connect } from 'react-redux'
import DetailProducts from '../components/tienda/detail_products'
import { toggle } from '../actions'

const mapState = state => {
    return {
        /* active: state.tienda.active,
        visible: state.navigation.visible, */
    }
}

const mapDispatch = dispatch => {
    return {}
}

export default connect(
    mapState,
    mapDispatch
)(DetailProducts)
