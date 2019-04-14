import React from 'react'
import { connect } from 'react-redux'
import Make from '../components/tienda/make_order'

const mapState = state => {
    return {
        active: state.tienda.active,
        visible: state.navigation.visible,
        shoppingCart: state.comprar.shoppingCart,
        metodos: state.pagos.metodos
    }
}

const mapDispatch = dispatch => {
    return {}
}

export default connect(
    mapState,
    mapDispatch
)(Make)
