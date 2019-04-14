import types from '../config/types'

const initialState = {
    promo: true,
    visible: true
}

const promo = (state = initialState, action) => {
    switch (action.type) {
        case types.SET_PROMO_MODAL:
            return {
                ...state,
                promo: action.value
            }
        case 'SET_PROMO':
            return {
                ...state,
                promo: !state.promo
            }
        default:
            return state
    }
}

export default promo
