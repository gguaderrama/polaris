import React from 'react'
import { connect } from 'react-redux'
import Home from '../components/home'
import {
    cambiarBanner,
    setMenu,
    recoverShoppingCart,
    setLogged,
    setFilterClases
} from '../actions'

const mapState = state => {
    document.title = 'Load'
    return {
        active: state.home.active,
        visible: state.navigation.visible,
        banner: state.home.banner
    }
}

const mapDispatch = dispatch => {
    setTimeout(() => {
        dispatch(setMenu(false))
    }, 150)
    dispatch(setLogged())
    dispatch(recoverShoppingCart())
    return {
        cambiarBanner: value => dispatch(cambiarBanner(value)),
        setFilterClases: value => dispatch(setFilterClases(value))
    }
}

export default connect(
    mapState,
    mapDispatch
)(Home)
