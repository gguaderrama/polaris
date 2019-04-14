import { types } from '../config/constants'

const menu = [
    { texto: 'home', seccion: '/' },
    { texto: 'log in', seccion: '/login' },
    { texto: 'nosotros', seccion: '/nosotros' },
    { texto: 'reservar', seccion: '/reservar' },
    { texto: 'comprar', seccion: '/comprar' },
    { texto: 'coaches', seccion: '/coaches' },
    // { texto: "tienda", seccion: "/tienda" },
    { texto: 'contáctanos', seccion: '/contactanos' },
    // { texto: 'eventos', seccion: '/eventos' }
]

const initialState = {
    visible: false,
    logged: false,
    menu
}

const navigation = (state = initialState, action) => {
    switch (action.type) {
        case types.SET_MENU_NAVIGATION:
            return {
                ...state,
                visible: action.value
            }
        case types.SET_LOGGED:
            return {
                ...state,
                logged: action.value
            }
        case types.TOGGLE:
            return {
                ...state,
                visible: !state.visible
            }
        default:
            return state
    }
}

export default navigation
