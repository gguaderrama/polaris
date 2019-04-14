import React from 'react'
import { connect } from 'react-redux'
import Navigation from '../components/navigation'
import { toggle, navigate, logOut, getAvatarPerfil } from '../actions'

const mapState = state => {
    return {
        visible: state.navigation.visible,
        menu: state.navigation.menu,
        logged: state.navigation.logged,
        shopping_cart_count: state.shoppingCart.shopping_cart_count,
        avatar: state.perfil.avatar,
        loading: state.shoppingCart.loading,
        shake: state.shoppingCart.shake
    }
}

const mapDispatch = dispatch => {
    dispatch(getAvatarPerfil())
    return {
        logOut: () => dispatch(logOut()),
        toggle: () => dispatch(toggle()),
        navigate: opcion => dispatch(navigate(opcion))
    }
}

export default connect(
    mapState,
    mapDispatch
)(Navigation)
