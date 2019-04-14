export * from './navigation'
export * from './login'
export * from './instructor'
export * from './booking'
export * from './nosotros'
export * from './perfil'
export * from './home'
export * from './password'
export * from './comprar'
export * from './legal'
export * from './place'
export * from './schedule'
export * from './payment-method'
export * from './registry'
export * from './contactanos'
export * from './shopping-cart'
export * from './promo'
export * from './event'

export const cleanAll = () => {
    return dispatch => {
        dispatch({ type: 'SET_NOMBRE_REGISTRO', value: '' })
        dispatch({ type: 'SET_APELLIDO_REGISTRO', value: '' })
        dispatch({ type: 'SET_NICKNAME_REGISTRO', value: '' })
        dispatch({ type: 'SET_SEXO_REGISTRO', value: '' })
        dispatch({ type: 'SET_FECHA_REGISTRO', value: null })
        dispatch({ type: 'SET_CORREO_REGISTRO', value: '' })
        dispatch({ type: 'SET_TALLA_REGISTRO', value: '' })
        dispatch({ type: 'SET_ACEPTO_REGISTRO' })
        dispatch({ type: 'SET_CONSULTA_LOGIN', value: false })
        dispatch({ type: 'SET_SHOPPING_CART_QUERY', value: false })
        dispatch({ type: 'SET_SHOPPING_CART_PAYMENT_METHOD', value: 0 })
        dispatch({ type: 'SET_USER_LOGIN', value: '' })
        dispatch({ type: 'SET_PASS_LOGIN', value: '' })
        dispatch({ type: 'SET_CARD_VERIFICATION', value: '' })
        dispatch({ type: 'SET_CARD_NUMBER', value: '' })
        dispatch({ type: 'SET_EXP_YEAR', value: '' })
        dispatch({ type: 'SET_EXP_MONTH', value: '' })
        dispatch({ type: 'SET_CARD_TYPE', value: 'CREDITO' })
        dispatch({ type: 'SET_CARD_HOLDER', value: '' })
        dispatch({ type: 'SET_CARD_PROVIDER', value: '' })
        dispatch({ type: 'SET_MAX_CARD_NUMBER', value: 19 })
        dispatch({ type: 'SET_PASS_PASSWORD', value: '' })
        dispatch({ type: 'SET_CONFIRMAR_PASSWORD', value: '' })
        dispatch({ type: 'SET_PROMO', value: ''})
    }
}
