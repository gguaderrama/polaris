import React from 'react'
import { connect } from 'react-redux'
import Instructores from '../components/instructores'
import {
    recoverShoppingCart,
    setLogged,
    activarInstructor,
    getInstructores
} from '../actions'

const mapState = state => {
    document.title = 'Load | Coaches'
    return {
        active: state.instructores.active,
        visible: state.navigation.visible,
        instructores: state.instructores.instructores,
        activo: state.instructores.activo,
        loading: state.instructores.loading
    }
}

const mapDispatch = dispatch => {
    dispatch(getInstructores())
    dispatch(setLogged())
    dispatch(recoverShoppingCart())
    return {
        activarInstructor: id => dispatch(activarInstructor(id))
    }
}

export default connect(
    mapState,
    mapDispatch
)(Instructores)
