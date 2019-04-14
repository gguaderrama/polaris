import api from '../config/api'
import toastr from 'toastr'
import { conekta } from '../config/constants'

let amati_token
let load_token
if (process.env.PROD) {
    amati_token = conekta.prod.AMATI
    load_token = conekta.prod.LOAD
} else {
    amati_token = conekta.dev.AMATI
    load_token = conekta.dev.LOAD
}

export const getMetodoPago = () => {
    return dispatch => {
        api.get('conektakeys')
            .then(response => {
                dispatch({
                    type: 'SET_CONEKTA_COUNT',
                    value: response.data.data.length
                })
            })
            .catch(err => {
                toastr.warning(err.response.data.message)
            })
        api.get('payment')
            .then(response => {
                dispatch({
                    type: 'SET_METODO_PAGO',
                    value: response.data.data
                })
            })
            .catch(err => {
                toastr.warning(err.response.data.message)
            })
    }
}
export const saveMetodoPago = () => {
    return (dispatch, getState) => {
        let tokenAmati
        dispatch({ type: 'SET_REGISTRANDO_METODO_PAGO', value: true })
        const {
            cardVerification,
            card_number,
            cardType,
            expYear,
            expMonth,
            card_provider,
            card_holder
        } = getState().pagos
        const { id } = getState().perfil
        if (card_holder === '') {
            dispatch({
                type: 'SET_MESSAGE_CARD_HOLDER',
                value: 'Es obligatorio llenar el campo'
            })
            dispatch({ type: 'SET_VALID_CARD_HOLDER', value: true })
        } else {
            dispatch({ type: 'SET_MESSAGE_CARD_HOLDER', value: '' })
            dispatch({ type: 'SET_VALID_CARD_HOLDER', value: false })
        }
        if (card_number === '') {
            dispatch({
                type: 'SET_MESSAGE_CARD_NUMBER',
                value: 'Es obligatorio llenar el campo'
            })
            dispatch({ type: 'SET_VALID_CARD_NUMBER', value: true })
        } else {
            dispatch({ type: 'SET_MESSAGE_CARD_NUMBER', value: '' })
            dispatch({ type: 'SET_VALID_CARD_NUMBER', value: false })
        }
        if (cardVerification === '') {
            dispatch({
                type: 'SET_MESSAGE_CARD_VERIFICATION',
                value: 'Es obligatorio llenar el campo'
            })
            dispatch({ type: 'SET_VALID_CARD_VERIFICATION', value: true })
        } else {
            dispatch({ type: 'SET_MESSAGE_CARD_VERIFICATION', value: '' })
            dispatch({ type: 'SET_VALID_CARD_VERIFICATION', value: false })
        }
        Conekta.setLanguage('es')
        let tokenParams = {
            card: {
                number: card_number.replace(new RegExp('-', 'g'), ''),
                name: card_holder,
                exp_year: expYear,
                exp_month: expMonth,
                cvc: cardVerification
            }
        }
        api.get('conektakeys')
            .then(response => {
                let conektaTokenPayment = []
                response.data.data.map((e, i) => {
                    Conekta.setPublicKey(e.conektaKey)
                    let successResponseHandler = function(token) {
                        conektaTokenPayment.push({
                            conektaKeyId: e.id,
                            token: token.id
                        })
                    }
                    let errorResponseHandler = function(error) {
                        dispatch({
                            type: 'SET_REGISTRANDO_METODO_PAGO',
                            value: false
                        })
                        toastr.remove()
                        toastr.warning(error.message_to_purchaser)
                    }
                    Conekta.Token.create(
                        tokenParams,
                        successResponseHandler,
                        errorResponseHandler
                    )
                })
                setTimeout(() => {
                    dispatch(
                        saveConektaCards({
                            cardProvider: card_provider,
                            cardType: cardType,
                            conektaTokenPayment,
                            lastFourDigits: card_number.substr(-4),
                            yearValidity: expYear,
                            monthValidity: expMonth
                        })
                    )
                }, 2000)
            })
            .catch(err => {})
    }
}
export const saveConektaCards = data => {
    return dispatch => {
        api.post('payment/v2', data)
            .then(response => {
                dispatch({
                    type: 'SET_METODO_PAGO',
                    value: response.data.data
                })
                dispatch({
                    type: 'SET_REGISTRANDO_METODO_PAGO',
                    value: false
                })
                dispatch({
                    type: 'SET_CARD_VERIFICATION',
                    value: ''
                })
                dispatch({ type: 'SET_CARD_NUMBER', value: '' })
                dispatch({ type: 'SET_EXP_YEAR', value: '' })
                dispatch({ type: 'SET_EXP_MONTH', value: '' })
                dispatch({
                    type: 'SET_CARD_TYPE',
                    value: 'CREDITO'
                })
                dispatch({ type: 'SET_CARD_HOLDER', value: '' })
                dispatch({
                    type: 'SET_CARD_PROVIDER',
                    value: ''
                })
                dispatch({
                    type: 'SET_MAX_CARD_NUMBER',
                    value: 19
                })
                toastr.success('Tarjeta guardada satisfactoriamente.')
            })
            .catch(err => {
                dispatch({
                    type: 'SET_REGISTRANDO_METODO_PAGO',
                    value: false
                })
                toastr.warning(err.response.data.message)
            })
    }
}
export const setCardVerification = event => {
    return (dispatch, getState) => {
        const { card_verification_length } = getState().pagos
        if (isNaN(event.target.value)) {
            dispatch({
                type: 'SET_MESSAGE_CARD_VERIFICATION',
                value: 'Solo números'
            })
            dispatch({ type: 'SET_VALID_CARD_VERIFICATION', value: true })
            return
        } else {
            dispatch({ type: 'SET_MESSAGE_CARD_VERIFICATION', value: '' })
            dispatch({ type: 'SET_VALID_CARD_VERIFICATION', value: false })
        }
        if (card_verification_length === 4 && event.target.value.length !== 4) {
            dispatch({
                type: 'SET_MESSAGE_CARD_VERIFICATION',
                value: 'Formato incorrecto'
            })
            dispatch({ type: 'SET_VALID_CARD_VERIFICATION', value: true })
        } else if (
            card_verification_length === 3 &&
            event.target.value.length !== 3
        ) {
            dispatch({
                type: 'SET_MESSAGE_CARD_VERIFICATION',
                value: 'Formato incorrecto'
            })
            dispatch({ type: 'SET_VALID_CARD_VERIFICATION', value: true })
        } else {
            dispatch({ type: 'SET_MESSAGE_CARD_VERIFICATION', value: '' })
            dispatch({ type: 'SET_VALID_CARD_VERIFICATION', value: false })
        }
        if (event.target.value.length === 0) {
            dispatch({ type: 'SET_MESSAGE_CARD_VERIFICATION', value: '' })
            dispatch({ type: 'SET_VALID_CARD_VERIFICATION', value: false })
        }
        dispatch({
            type: 'SET_CARD_VERIFICATION',
            value: event.target.value
        })
    }
}
export const formatCardNumber = event => {
    return (dispatch, getState) => {
        let code = event.keyCode ? event.keyCode : event.which
        setTimeout(() => {
            const { card_number } = getState().pagos
            let toEval = card_number.replace(new RegExp('-', 'g'), '')
            if (code !== 8) {
                if (toEval.length > 1) {
                    if (
                        toEval.substr(0, 2) == '34' ||
                        toEval.substr(0, 2) == '37'
                    ) {
                        if (toEval.length / 4 === 1) {
                            dispatch({
                                type: 'SET_CARD_NUMBER',
                                value: card_number + '-'
                            })
                        } else {
                            if (toEval.length / 10 === 1) {
                                dispatch({
                                    type: 'SET_CARD_NUMBER',
                                    value: card_number + '-'
                                })
                            } else {
                                dispatch({
                                    type: 'SET_CARD_NUMBER',
                                    value: card_number
                                })
                            }
                        }
                    } else {
                        if (
                            toEval.length % 4 === 0 &&
                            toEval.length % 16 !== 0
                        ) {
                            dispatch({
                                type: 'SET_CARD_NUMBER',
                                value: card_number + '-'
                            })
                        } else {
                            dispatch({
                                type: 'SET_CARD_NUMBER',
                                value: card_number
                            })
                        }
                    }
                }
            }
        }, 2)
    }
}
export const setCardNumber = event => {
    return dispatch => {
        let valor = event.target.value
        let toEval = valor.replace(new RegExp('-', 'g'), '')
        const positives = /^[1-9]\d*$/g
        if (!positives.test(toEval) && valor !== '') {
            dispatch({
                type: 'SET_MESSAGE_CARD_NUMBER',
                value: 'Solo se aceptan números'
            })
            dispatch({ type: 'SET_VALID_CARD_NUMBER', value: true })
            return
        } else {
            dispatch({ type: 'SET_MESSAGE_CARD_NUMBER', value: '' })
            dispatch({ type: 'SET_VALID_CARD_NUMBER', value: false })
        }
        if (toEval.length > 16) {
            return
        } else {
            if (toEval.length >= 1) {
                if (valor.substr(0) == '4') {
                    dispatch({
                        type: 'SET_CARD_PROVIDER',
                        value: 'VISA'
                    })
                }
                if (toEval.substr(0) == '5') {
                    dispatch({
                        type: 'SET_CARD_PROVIDER',
                        value: 'MASTERCARD'
                    })
                }
            }
            if (toEval.length >= 2) {
                if (
                    toEval.substr(0, 2) == '34' ||
                    toEval.substr(0, 2) == '37'
                ) {
                    dispatch({
                        type: 'SET_MAX_CARD_NUMBER',
                        value: 17
                    })
                    dispatch({
                        type: 'SET_CARD_PROVIDER',
                        value: 'AMEX'
                    })
                    dispatch({
                        type: 'SET_CARD_VERIFICATION_LENGTH',
                        value: 4
                    })
                }
            }
            if (toEval.substr(0) == '') {
                dispatch({
                    type: 'SET_CARD_PROVIDER',
                    value: ''
                })
                dispatch({
                    type: 'SET_CARD_VERIFICATION_LENGTH',
                    value: 3
                })
                dispatch({
                    type: 'SET_MAX_CARD_NUMBER',
                    value: 19
                })
            }
            dispatch({
                type: 'SET_CARD_NUMBER',
                value: valor
            })
            dispatch({
                type: 'SET_CARD_VERIFICATION',
                value: ''
            })
        }
    }
}
export const setCardType = event => {
    return {
        type: 'SET_CARD_TYPE',
        value: event.target.value
    }
}
export const setExpYear = event => {
    return dispatch => {
        if (isNaN(event.target.value)) {
            toastr.warning('solo números')
        } else if (event.target.value.length > 4) {
            toastr.warning('máximo cuatro caracteres')
        } else {
            dispatch({
                type: 'SET_EXP_YEAR',
                value: event.target.value
            })
        }
    }
}
export const setExpMonth = event => {
    return dispatch => {
        if (isNaN(event.target.value)) {
            toastr.warning('solo números')
        } else if (event.target.value.length > 2) {
            toastr.warning('máximo dos caracteres')
        } else if (parseInt(event.target.value) > 12) {
            toastr.warning('mes incorrecto')
        } else {
            dispatch({
                type: 'SET_EXP_MONTH',
                value: event.target.value
            })
        }
    }
}
export const setCardHolder = event => {
    return dispatch => {
        let valor = event.target.value
        const validate = new RegExp('^(?=.*[0-9])')
        if (validate.test(valor)) {
            dispatch({
                type: 'SET_MESSAGE_CARD_HOLDER',
                value: 'No se aceptan números'
            })
            dispatch({ type: 'SET_VALID_CARD_HOLDER', value: true })
            return
        } else {
            dispatch({ type: 'SET_MESSAGE_CARD_HOLDER', value: '' })
            dispatch({ type: 'SET_VALID_CARD_HOLDER', value: false })
        }
        dispatch({
            type: 'SET_CARD_HOLDER',
            value: valor
        })
    }
}
export const setCardProvider = val => {
    return {
        type: 'SET_CARD_PROVIDER',
        value: val
    }
}
export const deleteMetodoPago = id => {
    return dispatch => {
        api.delete('payment/' + id)
            .then(response => {
                dispatch({
                    type: 'SET_METODO_PAGO',
                    value: response.data.data
                })
                toastr.success('Se eliminó correctamente el método de pago')
            })
            .catch(err => {
                toastr.warning(err.response.data.message)
            })
    }
}
export const setCodePromo = event => {
    return {
        type: 'SET_SHOPPING_CART_PROMOTION_CODE',
        value: event.target.value
    }
}
