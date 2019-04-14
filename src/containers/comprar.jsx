import React from 'react'
import { connect } from 'react-redux'
import Comprar from '../components/comprar'
import {
    recoverShoppingCart,
    setLogged,
    getCategorias,
    getProductos,
    addProductShoppingCart,
    toggleModalCompras,
    setMenu,
    setGiftEmail,
    setGiftName,
    setAlertMembership,
    setMembershipOption
} from '../actions'

const mapState = state => {
    document.title = 'Load | Comprar'
    return {
        active: state.comprar.active,
        visible: state.navigation.visible,
        logged: state.navigation.logged,
        categorias: state.comprar.categorias,
        productos: state.comprar.productos,
        loading: state.comprar.loading,
        giftName: state.comprar.giftName,
        giftEmail: state.comprar.giftEmail,
        valid_gift_name: state.comprar.valid_gift_name,
        valid_gift_email: state.comprar.valid_gift_email,
        message_gift_name: state.comprar.message_gift_name,
        message_gift_email: state.comprar.message_gift_email,
        alert_membership: state.comprar.alert_membership
    }
}

const mapDispatch = dispatch => {
    dispatch(setMenu(false))
    dispatch(setLogged())
    dispatch(recoverShoppingCart())
    dispatch(getCategorias())
    dispatch(getProductos())
    return {
        addProductShoppingCart: product =>
            dispatch(addProductShoppingCart(product)),
        toggleModalCompras: () => dispatch(toggleModalCompras()),
        setGiftName: event => dispatch(setGiftName(event)),
        setGiftEmail: event => dispatch(setGiftEmail(event)),
        setAlertMembership: value => dispatch(setAlertMembership(value)),
        setMembershipOption: value => dispatch(setMembershipOption(value))
    }
}

export default connect(
    mapState,
    mapDispatch
)(Comprar)
