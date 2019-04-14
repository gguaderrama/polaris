import initialState from '../config/state'
import types from '../config/types'

const event = (state = initialState.event , action) => {
    switch (action.type) {
        case types.SET_EVENT_ALERT:
            return {
                ...state,
                alert: !state.alert
            }
        case types.SET_EVENT_QUERY:
            return {
                ...state,
                query: action.value
            }
        case types.SET_EVENT_LOADING:
            return {
                ...state,
                loading: action.value
            }
        case types.SET_EVENT_VIEW:
            return {
                ...state,
                view: action.value
            }
        case types.SET_EVENT_SUMARY:
            return {
                ...state,
                event: action.value,
            }
        case types.SET_EVENT_EVENTS:
            return {
                ...state,
                events: action.value
            }
        default:
            return state
    }
}

export default event