import React from 'react'
import { connect } from 'react-redux'
import { closePromoModal } from '../actions'
import Promo from '../components/promo'

const mapState = state => {
    return {
        promo: state.promo.promo,
        visible: state.promo.visible
    }
}

const mapDispatch = (dispatch, props) => {
    return {
        closePromoModal: () => dispatch(closePromoModal())
    }
}

export default connect(
    mapState,
    mapDispatch
)(Promo)