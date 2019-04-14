import React from 'react'
import { connect } from 'react-redux'
import ShoppingCart from '../components/shopping-cart'
import types from '../config/types'
import {
    setLogged,
    getMetodoPago,
    recoverShoppingCart,
    removeProductShoppingCart,
    setMenu,
    setCodePromo,
    setMetodoPagoCompras,
    payShoppingCart,
    toggleModalCompras,
    closeModalCompras,
    newMetodoPago,
    increaseProductShoppingCart,
    reduceProductShoppingCart,
    setAceptoCargo,
    setShoppingCartRfc,
    closeModalMembresia,
    closeModalMembresiaTwo,
    deleteProductsDays
} from '../actions'
let rfc
const mapState = state => {
    document.title = 'Load | Carrito de compras'
    rfc = state.perfil.rfc
    return {
        active: state.tienda.active,
        visible: state.navigation.visible,
        metodos: state.pagos.metodos,
        conekta_count: state.pagos.conekta_count,
        shoppingCart: state.shoppingCart.shoppingCart,
        total: state.shoppingCart.total,
        subtotal: state.shoppingCart.subtotal,
        impuestos: state.shoppingCart.impuestos,
        impuesto: state.shoppingCart.impuesto,
        modal: state.shoppingCart.modal,
        consulta: state.shoppingCart.consulta,
        loading: state.shoppingCart.loading,
        rfc: state.shoppingCart.rfc,
        modal_membership: state.shoppingCart.modal_membership,
        modal_membershiptwo: state.shoppingCart.modal_membershiptwo
    }
}

const mapDispatch = (dispatch, state) => {
    dispatch(setMenu(false))
    dispatch(setLogged())
    dispatch(recoverShoppingCart())
    dispatch(getMetodoPago())
    setTimeout(() => {
        dispatch({
            type: types.SET_SHOPPING_CART_RFC,
            value: rfc
        })
    }, 1200)
    return {
        payShoppingCart: () => dispatch(payShoppingCart()),
        toggleModalCompras: () => dispatch(toggleModalCompras()),
        closeModalCompras: () => dispatch(closeModalCompras()),
        newMetodoPago: () => dispatch(newMetodoPago()),
        removeProductShoppingCart: productId =>
            dispatch(removeProductShoppingCart(productId)),
        setMetodoPagoCompras: id => dispatch(setMetodoPagoCompras(id)),
        increaseProductShoppingCart: id =>
            dispatch(increaseProductShoppingCart(id)),
        reduceProductShoppingCart: id =>
            dispatch(reduceProductShoppingCart(id)),
        setCodePromo: event => dispatch(setCodePromo(event)),
        setAceptoCargo: id => dispatch(setAceptoCargo(id)),
        setShoppingCartRfc: event => dispatch(setShoppingCartRfc(event)),
        closeModalMembresia: () => dispatch(closeModalMembresia()),
        closeModalMembresiaTwo: () => dispatch(closeModalMembresiaTwo()),
        deleteProductsDays: () => dispatch(deleteProductsDays())
    }
}

export default connect(
    mapState,
    mapDispatch
)(ShoppingCart)
