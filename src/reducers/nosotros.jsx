const tabs = ['cycling', 'workout bar']
const initialState = {
    active: '/nosotros',
    tabs: tabs,
    tab: tabs[0]
}

const nosotros = (state = initialState, action) => {
    switch (action.type) {
        case 'SET_TAB_CLASES':
            return {
                ...state,
                tab: action.value
            }
        default:
            return state
    }
}

export default nosotros
