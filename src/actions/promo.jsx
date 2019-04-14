import types from '../config/types'

export const closePromoModal = () => {
    return {
        type: types.SET_PROMO_MODAL,
        value: false
    }
}
