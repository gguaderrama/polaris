const initialState = {
    active: '/coaches',
    instructores: [],
    activo: 1,
    loading: true,
    instructor: {},
    schedule: []
}

const instructores = (state = initialState, action) => {
    switch (action.type) {
        case 'SET_COACH_SCHEDULE':
            return {
                ...state,
                schedule: action.value
            }
        case 'SET_LOADING_INSTRUCTOR':
            return {
                ...state,
                loading: action.value
            }
        case 'SET_INSTRUCTORES':
            return {
                ...state,
                instructores: action.value
            }
        case 'SET_INSTRUCTOR':
            return {
                ...state,
                instructor: action.value
            }
        case 'ACTIVAR_INSTRUCTOR':
            return {
                ...state,
                activo: action.value
            }
        default:
            return state
    }
}

export default instructores
