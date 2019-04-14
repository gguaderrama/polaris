const tabs = [
    'aviso de privacidad clientes',
    'aviso de privacidad uso de APP',
    'términos y condiciones',
    'reglamento'
]
const initialState = {
    active: '/legal',
    tabs: tabs,
    tab: tabs[0]
}

const legal = (state = initialState, action) => {
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

export default legal
