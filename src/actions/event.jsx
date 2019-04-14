import api from '../config/api'
import endpoints from '../config/endpoints'
import types from '../config/types'
import toastr from 'toastr'
import messages from '../config/messages'
import { getMetodoPago } from './payment-method'

export const returnEventList = () => {
    return {
        type: types.SET_EVENT_VIEW,
        value: 'list'
    }
}
export const setEventAlert = () => {
    return dispatch => {
        dispatch({
            type: types.SET_EVENT_ALERT
        })
        dispatch({
            type: types.SET_EVENT_QUERY,
            value: false
        })
        dispatch({
            type: types.SET_EVENT_VIEW,
            value: 'list'
        })
    }
}
export const sumaryEvent = event => {
    return dispatch => {
        dispatch({
            type: types.SET_EVENT_LOADING,
            value: true
        })
        dispatch(getMetodoPago())
        dispatch({
            type: types.SET_EVENT_SUMARY,
            value: event
        })
        dispatch({
            type: types.SET_EVENT_VIEW,
            value: 'sumary'
        })
        setTimeout(() => {
            dispatch({
                type: types.SET_EVENT_LOADING,
                value: false
            })
        }, 900)
    }
}

export const getEvents = () => {
    return dispatch => {
        api.get(endpoints.EVENT)
            .then(response => {
                dispatch({
                    type: types.SET_EVENT_EVENTS,
                    value: response.data.data
                })
            })
            .catch(err => {
                toastr.warning(err.response.data.data)
            })
    }
}

export const payEvent = event => {
    return (dispatch, getState) => {
        const { metodopago } = getState().shoppingCart
        if (event.product.price[0].price !== 0) {
            if (metodopago === 0) {
                toastr.warning(messages.SHOPPING_CART_NO_PAYMENT)
                return
            }
        }
        dispatch({
            type: types.SET_EVENT_QUERY,
            value: true
        })
        api.post(endpoints.BOOKING_EVENT, {
            assistance: true,
            eventId: event.id,
            paymentConektaId: metodopago
        })
            .then(response => {
                dispatch({
                    type: types.SET_EVENT_ALERT,
                })
            })
            .catch(err => {
                toastr.warning(err.response.data.message)
                dispatch({
                    type: types.SET_EVENT_QUERY,
                    value: false
                })
            })
    }
}
