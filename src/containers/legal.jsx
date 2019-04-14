import React from 'react'
import { connect } from 'react-redux'
import Legal from '../components/legal'
import { setTabLegal } from '../actions'

const mapState = state => {
    return {
        active: state.legal.active,
        visible: state.navigation.visible,
        tabs: state.legal.tabs,
        tab: state.legal.tab
    }
}

const mapDispatch = dispatch => {
    return {
        setTabLegal: tab => dispatch(setTabLegal(tab))
    }
}

export default connect(
    mapState,
    mapDispatch
)(Legal)
