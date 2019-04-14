import api from '../config/api'
import toastr from 'toastr'
import moment from 'moment'

export const getScheduleByCoach = id => {
    return dispatch => {
        api.get(
            'schedule/' +
                moment().format('YYYY-MM-DD') +
                '/' +
                6 +
                '?coach=' +
                id
        )
            .then(response => {
                dispatch({
                    type: 'SET_COACH_SCHEDULE',
                    value: response.data.data
                })
            })
            .catch(err => {
                toastr.warning(err.response.data.message)
            })
    }
}
export const setAlertCancelSchedule = id => {
    return {
        type: 'SET_ALERT_CANCEL_SCHEDULE',
        value: id
    }
}
