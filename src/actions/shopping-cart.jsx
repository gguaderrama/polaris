import api from '../config/api'
import toastr from 'toastr'
import messages from '../config/messages'
import types from '../config/types'
import endpoints from '../config/endpoints'

export const reduceProductShoppingCart = id => {
    return (dispatch, getState) => {
        const { shoppingCart } = getState().shoppingCart
        let busqueda = shoppingCart.orderItems
            .map(e => e.product.id)
            .indexOf(id)
        if (busqueda !== -1) {
            if (shoppingCart.orderItems[busqueda].quantity > 1) {
                shoppingCart.orderItems[busqueda].quantity =
                    shoppingCart.orderItems[busqueda].quantity - 1
                dispatch(saveCart(shoppingCart))
                toastr.success(messages.SHOPPING_CART_REDUCE)
            }
        }
    }
}
export const increaseProductShoppingCart = id => {
    return (dispatch, getState) => {
        const { shoppingCart } = getState().shoppingCart
        let busqueda = shoppingCart.orderItems
            .map(e => e.product.id)
            .indexOf(id)
        if (busqueda !== -1) {
            shoppingCart.orderItems[busqueda].quantity =
                shoppingCart.orderItems[busqueda].quantity + 1
            dispatch(saveCart(shoppingCart))
            toastr.success(messages.SHOPPING_CART_INCREASE)
        }
    }
}
export const addProductShoppingCart = product => {
    return (dispatch, getState) => {
        const { giftName, giftEmail } = getState().comprar
        const { shoppingCart } = getState().shoppingCart
        let item = {}
        if (product.acces) {
            if (product.acces.daysUse > 29) {
                let busqueda = shoppingCart.orderItems
                    .map(e => e.product.id)
                    .indexOf(14)
                if (busqueda === -1) {
                    if (shoppingCart.firstBuy) {
                        dispatch({
                            type: types.SET_ALERT_MEMBERSHIP,
                            value: true
                        })
                    }
                }
            }
        }
        if (product.category.id === 2) {
            if (giftName === '') {
                dispatch({
                    type: types.SET_MESSAGE_GIFT_NAME,
                    value: messages.GIFT_CARD_NAME
                })
                dispatch({
                    type: types.SET_VALID_GIFT_NAME,
                    value: true
                })
            }
            if (giftEmail === '') {
                dispatch({
                    type: types.SET_MESSAGE_GIFT_EMAIL,
                    value: messages.GIFT_CARD_EMAIL
                })
                dispatch({ type: types.SET_VALID_GIFT_EMAIL, value: true })
            }
            if (giftEmail === '' || giftName === '') {
                return
            } else {
                dispatch({
                    type: types.SET_GIFT_NAME,
                    value: ''
                })
                dispatch({
                    type: types.SET_GIFT_EMAIL,
                    value: ''
                })
                item['product'] = product
                item['recurringPurchase'] = false
                item['giftEmail'] = giftEmail
                item['giftName'] = giftName
                item['quantity'] = 1
                shoppingCart.orderItems.push(item)
            }
        } else {
            let busqueda = shoppingCart.orderItems
                .map(e => e.product.id)
                .indexOf(product.id)
            if (busqueda !== -1) {
                shoppingCart.orderItems[busqueda].quantity =
                    shoppingCart.orderItems[busqueda].quantity + 1
            } else {
                item['product'] = product
                item['recurringPurchase'] = false
                item['giftEmail'] = ''
                item['giftName'] = ''
                item['quantity'] = 1
                shoppingCart.orderItems.push(item)
            }
        }
        dispatch(saveCart(shoppingCart))
        toastr.success(messages.SHOPPING_CART_ADD)
    }
}
export const saveCart = shoppingCart => {
    return dispatch => {
        dispatch({ type: types.SET_SHOPPING_CART_LOADING, value: true })
        let orderItems = []
        shoppingCart.orderItems.map(e => {
            orderItems.push({
                giftEmail: e.giftEmail ? e.giftEmail : '',
                giftName: e.giftName ? e.giftName : '',
                productId: e.product.id,
                quantity: e.quantity,
                recurringPurchase: e.recurringPurchase
            })
        })
        api.post(endpoints.ORDER, {
            orderItems
        })
            .then(response => {
                dispatch({
                    type: types.SET_SHOPPING_CART_ICON_SHAKE,
                    value: true
                })
                dispatch({
                    type: types.SET_SHOPPING_CART_LOADING,
                    value: false
                })
                dispatch(setAmounts(response.data.data))
                setTimeout(() => {
                    dispatch({
                        type: types.SET_SHOPPING_CART_ICON_SHAKE,
                        value: false
                    })
                }, 1000)
            })
            .catch(err => {
                toastr.warning(err.response.data.message)
                dispatch({
                    type: types.SET_SHOPPING_CART_LOADING,
                    value: false
                })
            })
    }
}
export const removeProductShoppingCart = productId => {
    return (dispatch, getState) => {
        const { shoppingCart } = getState().shoppingCart
        let trigger = false
        if (productId === 14) {
            shoppingCart.orderItems.map(e => {
                if (e.product.acces.length > 0) {
                    if (
                        e.product.acces[0].daysUse > 29
                    ) {
                        trigger = true
                    }
                }
            })
        }
        if (trigger) {
            dispatch({
                type: types.SET_SHOPPING_CART_MODAL_MEMBERSHIP,
                value: true
            })
            return
        }
        let busqueda = shoppingCart.orderItems
            .map(e => e.product.id)
            .indexOf(productId)
        shoppingCart.orderItems.splice(busqueda, 1)
        toastr.warning(messages.SHOPPING_CART_REMOVE)
        dispatch(saveCart(shoppingCart))
    }
}
export const recoverShoppingCart = () => {
    return dispatch => {
        if (sessionStorage.access_token) {
            dispatch({ type: types.SET_SHOPPING_CART_LOADING, value: true })
            api.get(endpoints.ORDER_CUSTOMER).then(response => {
                dispatch(setAmounts(response.data.data))
                dispatch({
                    type: types.SET_SHOPPING_CART_LOADING,
                    value: false
                })
            })
        }
    }
}
export const payShoppingCart = () => {
    return (dispatch, getState) => {
        const { shoppingCart, metodopago, code, rfc } = getState().shoppingCart
        if (metodopago === 0) {
            toastr.warning(messages.SHOPPING_CART_NO_PAYMENT)
            return
        }
        if (shoppingCart.orderItems.length === 0) {
            toastr.warning(messages.SHOPPING_CART_EMPTY)
            return
        }
        if (rfc === '') {
            console.log(types.SET_SHOPPING_CART_MODAL_MEMBERSHIP_TWO)
            dispatch({
                type: types.SET_SHOPPING_CART_MODAL_MEMBERSHIP_TWO,
                value: true
            })
        }
        dispatch({ type: types.SET_SHOPPING_CART_QUERY, value: true })
        let names = [],
            emails = []
        shoppingCart.orderItems.map((e, i) => {
            if (e.giftName !== '') {
                names.push(e.giftName)
                emails.push(e.giftEmail)
            }
        })
        api.post(endpoints.PURCHASE, {
            orderProductId: shoppingCart.id,
            paymentConektaId: metodopago,
            promotionCode: code,
            giftEmail: emails,
            giftName: names,
            rfc: rfc
        })
            .then(() => {
                dispatch({ type: types.TOGGLE_SHOPPING_CART_ALERT })
                dispatch({
                    type: types.SET_SHOPPING_CART_QUERY,
                    value: false
                })
                dispatch({
                    type: types.SET_SHOPPING_CART_QUERY,
                    value: 0
                })
                dispatch({
                    type: types.SET_SHOPPING_CART_TOTAL,
                    value: 0
                })
                dispatch({
                    type: types.SET_SHOPPING_CART_TAXES,
                    value: 0
                })
                dispatch({
                    type: types.SET_SHOPPING_CART,
                    value: { orderItems: [] }
                })
                dispatch({
                    type: types.SET_SHOPPING_CART_COUNT,
                    value: 0
                })
                dispatch({
                    type: types.SET_SHOPPING_CART_PAYMENT_METHOD,
                    value: 0
                })
            })
            .catch(err => {
                toastr.warning(err.response.data.message)
                dispatch({
                    type: types.SET_SHOPPING_CART_QUERY,
                    value: false
                })
            })
    }
}
export const setAceptoCargo = id => {
    return (dispatch, getState) => {
        const { shoppingCart } = getState().shoppingCart
        let busqueda = shoppingCart.orderItems
            .map(e => e.product.id)
            .indexOf(id)
        if (busqueda !== -1) {
            shoppingCart.orderItems[busqueda].recurringPurchase = !shoppingCart
                .orderItems[busqueda].recurringPurchase
            dispatch(saveCart(shoppingCart))
        }
    }
}
export const setShoppingCartRfc = event => {
    return {
        type: types.SET_SHOPPING_CART_RFC,
        value: event.target.value
    }
}
export const closeModalMembresia = () => {
    return {
        type: types.SET_SHOPPING_CART_MODAL_MEMBERSHIP,
        value: false
    }
}
export const closeModalMembresiaTwo = () => {
    return {
        type: types.SET_SHOPPING_CART_MODAL_MEMBERSHIP_TWO,
        value: false
    }
}
const setAmounts = shoppingCart => {
    return dispatch => {
        let impuestos = 0
        let total = 0
        shoppingCart.orderItems.map(e => {
            let price = e.product.price[0]
            total = total + parseFloat(price.price * e.quantity)
            impuestos =
                impuestos +
                parseFloat(price.price * e.quantity) / (1.16)
        }, total)
        dispatch({
            type: types.SET_SHOPPING_CART_SUBTOTAL,
            value: impuestos
        })
        dispatch({
            type: types.SET_SHOPPING_CART_TOTAL,
            value: total
        })
        dispatch({
            type: types.SET_SHOPPING_CART_TAXES,
            value: total - impuestos
        })
        dispatch({
            type: types.SET_SHOPPING_CART,
            value: shoppingCart
        })
        dispatch({
            type: types.SET_SHOPPING_CART_COUNT,
            value: shoppingCart.orderItems.length
        })
    }
}
export const deleteProductsDays = () => {
    return (dispatch, getState) => {
        const { shoppingCart } = getState().shoppingCart
        dispatch({
            type: types.SET_SHOPPING_CART_LOADING,
            value: true
        })
        dispatch({
            type: types.SET_SHOPPING_CART_MODAL_MEMBERSHIP,
            value: false
        })
        shoppingCart.orderItems.map(e => {
            if (e.product.acces.length > 0) {
                if (
                    e.product.acces[0].daysUse > 29 ||
                    e.product.acces[0].daysUse === 0
                ) {
                    let mayores = shoppingCart.orderItems
                        .map(el => el.product.id)
                        .indexOf(e.product.id)
                    shoppingCart.orderItems.splice(mayores, 1)
                }
            }
        })
        shoppingCart.orderItems.map(e => {
            if (e.product.acces.length > 0) {
                if (
                    e.product.acces[0].daysUse > 29 ||
                    e.product.acces[0].daysUse === 0
                ) {
                    let mayores = shoppingCart.orderItems
                        .map(el => el.product.id)
                        .indexOf(e.product.id)
                    shoppingCart.orderItems.splice(mayores, 1)
                }
            }
        })
        toastr.warning(messages.SHOPPING_CART_REMOVE)
        setTimeout(() => {
            dispatch(saveCart(shoppingCart))
        }, 500)
    }
}

