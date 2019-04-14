const initialState = {
    alerta: false
}

const alerta = (state = initialState, action) => {
    switch (action.type) {
        case 'SET_ALERTA':
            return {
                ...state,
                alerta: !state.alerta
            }
        default:
            return state
    }
}

export default alerta
