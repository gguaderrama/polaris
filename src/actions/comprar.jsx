import api from '../config/api'
import toastr from 'toastr'
import types from '../config/types'
import { push } from 'connected-react-router'
import { regex } from '../config/constants'
import {
    addProductShoppingCart,
    removeProductShoppingCart
} from './shopping-cart'

export const setMembershipOption = value => {
    return (dispatch, getState) => {
        if (value) {
            const { productos } = getState().comprar
            let busqueda = productos.map(e => e.id).indexOf(14)
            const producto = productos[busqueda]
            dispatch(addProductShoppingCart(producto))
            dispatch({
                type: types.SET_ALERT_MEMBERSHIP,
                value: false
            })
        } else {
            const { shoppingCart } = getState().shoppingCart
            shoppingCart.orderItems.map(e => {
                if (
                    e.product.acces[0].daysUse > 29 ||
                    e.product.acces[0].daysUse === 0
                ) {
                    dispatch(removeProductShoppingCart(e.product.id))
                }
            })
            dispatch({
                type: types.SET_ALERT_MEMBERSHIP,
                value: false
            })
        }
    }
}
export const setAlertMembership = value => {
    return {
        type: types.SET_ALERT_MEMBERSHIP,
        value
    }
}
export const setMetodoPagoCompras = id => {
    return {
        type: types.SET_SHOPPING_CART_PAYMENT_METHOD,
        value: id
    }
}
export const setGiftName = event => {
    return dispatch => {
        let valor = event.target.value
        const validate = new RegExp('^(?=.*[0-9])')
        if (validate.test(valor)) {
            dispatch({
                type: types.SET_MESSAGE_GIFT_NAME,
                value: 'El nombre no es válido'
            })
            dispatch({ type: 'SET_VALID_GIFT_NAME', value: true })
            return
        } else {
            dispatch({ type: types.SET_MESSAGE_GIFT_NAME, value: '' })
            dispatch({ type: 'SET_VALID_GIFT_NAME', value: false })
        }
        dispatch({
            type: 'SET_GIFT_NAME',
            value: valor
        })
    }
}
export const setGiftEmail = event => {
    return dispatch => {
        let valor = event.target.value
        if (!regex.EMAIL.test(valor)) {
            dispatch({
                type: 'SET_MESSAGE_GIFT_EMAIL',
                value: 'Ingresa un correo electrónico válido'
            })
            dispatch({ type: 'SET_VALID_GIFT_EMAIL', value: true })
        } else {
            dispatch({ type: 'SET_MESSAGE_GIFT_EMAIL', value: '' })
            dispatch({ type: 'SET_VALID_GIFT_EMAIL', value: false })
        }
        dispatch({
            type: 'SET_GIFT_EMAIL',
            value: event.target.value
        })
    }
}
export const getCategorias = () => {
    return dispatch => {
        api.get('category').then(response => {
            dispatch({
                type: 'SET_CATEGORIAS_COMPRAS',
                value: response.data.data
            })
        })
    }
}
export const getHistorialCompras = () => {
    return dispatch => {
        api.get('customerorderproduct').then(response => {
            dispatch({
                type: 'SET_HISTORIAL_COMPRAS',
                value: response.data.data
            })
        })
    }
}
export const getProductos = () => {
    return dispatch => {
        api.get('product').then(response => {
            dispatch({
                type: 'SET_PRODUCTOS_COMPRAS',
                value: response.data.data
            })
            dispatch({
                type: 'SET_LOADING_COMPRAS',
                value: false
            })
        })
    }
}

export const toggleModalCompras = () => {
    return {
        type: 'TOGGLE_SHOPPING_CART_ALERT'
    }
}
export const closeModalCompras = () => {
    return dispatch => {
        dispatch({ type: 'TOGGLE_SHOPPING_CART_ALERT' })
        dispatch(push('/comprar'))
    }
}
export const newMetodoPago = () => {
    return dispatch => {
        dispatch({ type: 'SET_TAB_PERFIL', value: 'métodos de pago' })
        dispatch(push('/perfil'))
    }
}
