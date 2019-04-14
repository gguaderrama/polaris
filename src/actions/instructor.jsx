import api from '../config/api'

export const activarInstructor = id => {
    return dispatch => {
        dispatch({
            type: 'ACTIVAR_INSTRUCTOR',
            value: parseInt(id)
        })
    }
}
export const getInstructor = id => {
    return dispatch => {
        dispatch({ type: 'SET_LOADING_INSTRUCTOR', value: true })
        api.get('coach/' + id)
            .then(response => {
                dispatch({
                    type: 'SET_INSTRUCTOR',
                    value: response.data.data
                })
                dispatch({ type: 'SET_LOADING_INSTRUCTOR', value: false })
            })
            .catch(err => {
                console.log('======================================')
                console.log(err)
                console.log('======================================')
            })
    }
}
export const getInstructores = () => {
    return dispatch => {
        api.get('coach')
            .then(response => {
                dispatch({
                    type: 'SET_INSTRUCTORES',
                    value: response.data.data
                })
                dispatch({ type: 'SET_LOADING_INSTRUCTOR', value: false })
            })
            .catch(err => {
                console.log('======================================')
                console.log(err)
                console.log('======================================')
            })
    }
}
