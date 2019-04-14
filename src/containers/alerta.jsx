import React from 'react'
import { connect } from 'react-redux'
import Alerta from '../components/alerta'
import { setAlerta } from '../actions'

const mapState = state => {
    return {
        alerta: state.alerta.alerta
    }
}

const mapDispatch = (dispatch, props) => {
    return {
        setAlerta: () => dispatch(setAlerta())
    }
}

export default connect(
    mapState,
    mapDispatch
)(Alerta)
