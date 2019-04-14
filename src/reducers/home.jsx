const initialState = {
    active: '/',
    banner: 'load'
}

const home = (state = initialState, action) => {
    switch (action.type) {
        case 'CAMBIAR_BANNER':
            return {
                ...state,
                banner: action.value
            }
        default:
            return state
    }
}

export default home
