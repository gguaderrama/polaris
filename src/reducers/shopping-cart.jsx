import types from '../config/types'
import initialState from '../config/state'

const shoppingCart = (state = initialState.shoppingCart, action) => {
    switch (action.type) {
        case types.SET_SHOPPING_CART_MODAL_MEMBERSHIP:
            return {
                ...state,
                modal_membership: action.value
            }
        case types.SET_SHOPPING_CART_MODAL_MEMBERSHIP_TWO:
            return {
                ...state,
                modal_membershiptwo: action.value
            }
        case types.SET_SHOPPING_CART_RFC:
            return {
                ...state,
                rfc: action.value
            }
        case types.SET_SHOPPING_CART_ICON_SHAKE:
            return {
                ...state,
                shake: action.value
            }
        case types.SET_SHOPPING_CART_LOADING:
            return {
                ...state,
                loading: action.value
            }
        case types.SET_SHOPPING_CART_TOTAL:
            return {
                ...state,
                total: action.value
            }
        case types.SET_SHOPPING_CART_SUBTOTAL:
            return {
                ...state,
                subtotal: action.value
            }
        case types.SET_SHOPPING_CART_TAXES:
            return {
                ...state,
                impuestos: action.value
            }
        case types.SET_SHOPPING_CART_TAX:
            return {
                ...state,
                impuesto: action.value
            }
        case types.SET_SHOPPING_CART:
            return {
                ...state,
                shoppingCart: action.value
            }
        case types.SET_SHOPPING_CART_COUNT:
            return {
                ...state,
                shopping_cart_count: action.value
            }
        case types.SET_SHOPPING_CART_PROMOTION_CODE:
            return {
                ...state,
                code: action.value
            }
        case types.SET_SHOPPING_CART_PAYMENT_METHOD:
            return {
                ...state,
                metodopago: action.value
            }
        case types.TOGGLE_SHOPPING_CART_ALERT:
            return {
                ...state,
                modal: !state.modal
            }
        case types.SET_SHOPPING_CART_QUERY:
            return {
                ...state,
                consulta: action.value
            }
        default:
            return state
    }
}

export default shoppingCart
