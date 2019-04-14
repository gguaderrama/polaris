import React from 'react'
import { connect } from 'react-redux'
import Nosotros from '../components/nosotros'
import {
    setTabNosotros,
    recoverShoppingCart,
    setLogged,
    setFilterClases
} from '../actions'

const mapState = state => {
    document.title = 'Load | Nosotros'
    return {
        active: state.nosotros.active,
        visible: state.navigation.visible,
        tabs: state.nosotros.tabs,
        tab: state.nosotros.tab,
        logged: state.navigation.logged
    }
}

const mapDispatch = dispatch => {
    dispatch(setLogged())
    dispatch(recoverShoppingCart())
    return {
        setTabNosotros: tab => dispatch(setTabNosotros(tab)),
        setFilterClases: value => dispatch(setFilterClases(value))
    }
}

export default connect(
    mapState,
    mapDispatch
)(Nosotros)
