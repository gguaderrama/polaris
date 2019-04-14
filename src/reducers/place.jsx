const initialState = {
    active: '/',
    schedule_item: {},
    loading: true,
    loadingBusy: true,
    busy_items: [],
    selected: 0,
    alert_place: false,
    alert_with_out: false,
    reservando: false
}

const place = (state = initialState, action) => {
    switch (action.type) {
        case 'SET_RESERVANDO_PLACE':
            return {
                ...state,
                reservando: action.value
            }
        case 'SET_ALERT_PLACE':
            return {
                ...state,
                alert_place: action.value
            }
        case 'SET_PLACE_SELECTED':
            return {
                ...state,
                selected: action.value
            }
        case 'SET_PLACE_ITEM':
            return {
                ...state,
                schedule_item: action.value
            }
        case 'SET_LOADING_PLACE':
            return {
                ...state,
                loading: action.value
            }
        case 'SET_LOADING_PLACE_BUSY':
            return {
                ...state,
                loadingBusy: action.value
            }
        case 'SET_BUSY_ITEMS':
            return {
                ...state,
                busy_items: action.value
            }
        case 'SET_ALERT_WITH_OUT':
            return {
                ...state,
                alert_with_out: !state.alert_with_out
            }
        default:
            return state
    }
}

export default place
