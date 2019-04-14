import api from '../config/api'
import { push } from 'connected-react-router'
import toastr from 'toastr'

export const closeAlertPlace = id => {
    return (dispatch, getState) => {
        const { selected } = getState().place
        dispatch({ type: 'SET_ALERT_PLACE', value: false })
        dispatch(push('/reservar/clase/' + id + '/' + selected))
    }
}
export const setPlaceSelected = val => {
    return (dispatch, getState) => {
        const { selected } = getState().place
        if (val === selected) {
            dispatch({ type: 'SET_PLACE_SELECTED', value: 0 })
        } else {
            dispatch({ type: 'SET_PLACE_SELECTED', value: val })
        }
    }
}
export const handleSelectPlace = id => {
    return (dispatch, getState) => {
        dispatch({ type: 'SET_RESERVANDO_PLACE', value: true })
        const { selected } = getState().place
        if (selected > 0) {
            api.post('booking', {
                assistance: false,
                scheduleEnded: false,
                scheduleId: parseInt(id),
                site: parseInt(selected)
            })
                .then(() => {
                    dispatch({ type: 'SET_ALERT_PLACE', value: true })
                    setTimeout(() => {
                        dispatch({ type: 'SET_RESERVANDO_PLACE', value: false })
                    }, 2000)
                })
                .catch(err => {
                    if (err.response.data.code === 406) {
                        dispatch({type: 'SET_ALERT_WITH_OUT'})
                    } else {
                        toastr.warning(err.response.data.message)
                    }
                    dispatch({ type: 'SET_RESERVANDO_PLACE', value: false })
                })
        } else {
            dispatch({ type: 'SET_RESERVANDO_PLACE', value: false })
            toastr.warning('Debes seleccionar un lugar primero.')
        }
    }
}
export const setPlaceItem = id => {
    return dispatch => {
        dispatch({ type: 'SET_LOADING_PLACE', value: true })
        api.get('schedule/' + id)
            .then(response => {
                dispatch({
                    type: 'SET_PLACE_ITEM',
                    value: response.data.data
                })
                dispatch({ type: 'SET_LOADING_PLACE', value: false })
            })
            .catch(err => {
                console.log('======================================')
                console.log(err.response)
                console.log('======================================')
            })
    }
}
export const setPlaceItemBusy = id => {
    return dispatch => {
        api.get('schedule/busy/' + id)
            .then(response => {
                dispatch({
                    type: 'SET_BUSY_ITEMS',
                    value: response.data.data
                })
                dispatch({ type: 'SET_LOADING_PLACE_BUSY', value: false })
            })
            .catch(err => {
                console.log('======================================')
                console.log(err.response)
                console.log('======================================')
            })
    }
}
export const setLoadingPlaceBusy = val => {
    return {
        type: 'SET_LOADING_PLACE_BUSY',
        value: val
    }
}
export const setAlertWithOut = () => {
    return {
        type: 'SET_ALERT_WITH_OUT'
    }
}
